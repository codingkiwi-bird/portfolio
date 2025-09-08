// 컴포넌트 로더 클래스
class ComponentLoader {
    constructor() {
        this.components = {};
        this.loadedComponents = new Set();
        // GitHub Pages용 base path 설정
        this.basePath = this.getBasePath();
    }

    // GitHub Pages base path 계산
    getBasePath() {
        const path = window.location.pathname;
        // GitHub Pages에서 repository 이름 추출
        const repoMatch = path.match(/^\/([^\/]+)\//);
        return repoMatch ? `/${repoMatch[1]}` : '';
    }

    // 컴포넌트 로드
    async loadComponent(componentName, targetElement) {
        try {
            // 이미 로드된 컴포넌트인지 확인
            if (this.loadedComponents.has(componentName)) {
                console.log(`Component ${componentName} already loaded`);
                return;
            }

            // 캐시된 컴포넌트가 있는지 확인
            if (this.components[componentName]) {
                this.insertComponent(this.components[componentName], targetElement);
                this.loadedComponents.add(componentName);
                return;
            }

            // 컴포넌트 파일 로드 (GitHub Pages 경로 고려)
            const componentPath = `${this.basePath}/components/${componentName}.html`;
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName} (${response.status})`);
            }

            const html = await response.text();

            // 컴포넌트 캐싱
            this.components[componentName] = html;

            // DOM에 삽입
            this.insertComponent(html, targetElement);

            // 로드된 컴포넌트로 표시
            this.loadedComponents.add(componentName);

            console.log(`Component ${componentName} loaded successfully from ${componentPath}`);

        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            // 에러가 발생한 경우 기본 메시지 표시
            targetElement.innerHTML = `<div class="error">컴포넌트 로드 실패: ${componentName}</div>`;
        }
    }

    // 컴포넌트를 DOM에 삽입
    insertComponent(html, targetElement) {
        // 임시 컨테이너 생성
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // 스크립트 태그들을 별도로 처리
        const scripts = tempDiv.querySelectorAll('script');
        scripts.forEach(script => script.remove());

        // HTML 내용 삽입
        targetElement.innerHTML = tempDiv.innerHTML;

        // 스크립트 실행 (있는 경우)
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
        });
    }

    // 여러 컴포넌트 동시에 로드
    async loadComponents(componentList) {
        const promises = componentList.map(({ name, target }) => {
            const targetElement = document.querySelector(target);
            if (targetElement) {
                return this.loadComponent(name, targetElement);
            } else {
                console.warn(`Target element not found: ${target}`);
                return Promise.resolve();
            }
        });

        await Promise.all(promises);
    }

    // 컴포넌트 리로드
    async reloadComponent(componentName, targetElement) {
        // 캐시에서 제거
        delete this.components[componentName];
        this.loadedComponents.delete(componentName);

        // 다시 로드
        await this.loadComponent(componentName, targetElement);
    }

    // 로드된 모든 컴포넌트 정보 가져오기
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }

    // 컴포넌트 존재 확인
    hasComponent(componentName) {
        return this.loadedComponents.has(componentName);
    }
}

// 전역 컴포넌트 로더 인스턴스
const componentLoader = new ComponentLoader();

// DOM이 로드된 후 컴포넌트 자동 로드
document.addEventListener('DOMContentLoaded', () => {
    // 자동 로드할 컴포넌트들 (data-component 속성이 있는 요소들)
    const autoLoadElements = document.querySelectorAll('[data-component]');

    autoLoadElements.forEach(element => {
        const componentName = element.getAttribute('data-component');
        if (componentName) {
            componentLoader.loadComponent(componentName, element);
        }
    });
});

// 전역 함수로 노출 (콘솔에서 직접 사용 가능)
window.ComponentLoader = ComponentLoader;
window.componentLoader = componentLoader;
