// ===========================================
// 간단한 해시 기반 라우터 시스템
// ===========================================

class SimpleRouter {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    // 라우트 등록
    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    // 라우터 초기화
    init() {
        // 해시 변경 이벤트 리스너
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });

        // 페이지 로드 시 현재 해시 처리
        window.addEventListener('DOMContentLoaded', () => {
            this.handleRoute();
        });

        // 뒤로가기 버튼 처리
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
    }

    // 라우트 처리
    handleRoute() {
        const hash = window.location.hash.slice(1); // # 제거
        const [path, id] = hash.split('/');

        if (path === 'project' && id) {
            this.showProjectDetail(id);
        } else {
            this.showMainPage();
        }
    }

    // 프로젝트 상세 페이지 표시
    async showProjectDetail(projectId) {
        try {
            // 프로젝트 상세 페이지 CSS 로드
            this.loadProjectDetailCSS();

            // 메인 컨테이너 숨기기
            const mainElement = document.querySelector('main');
            if (mainElement) {
                mainElement.style.display = 'none';
            }

            // 상세 페이지 컨테이너 생성 또는 표시
            let detailContainer = document.getElementById('project-detail-container');
            if (!detailContainer) {
                detailContainer = document.createElement('div');
                detailContainer.id = 'project-detail-container';
                detailContainer.className = 'project-detail-container';
                document.body.appendChild(detailContainer);
            }

            // 상세 페이지 HTML 로드
            const detailHtml = await this.loadProjectDetail(projectId);
            detailContainer.innerHTML = detailHtml;
            detailContainer.style.display = 'block';

            // 스크롤을 맨 위로
            window.scrollTo(0, 0);

            this.currentRoute = `project/${projectId}`;
            
        } catch (error) {
            console.error('프로젝트 상세 페이지 로드 실패:', error);
            this.showMainPage();
        }
    }

    // 메인 페이지 표시
    showMainPage() {
        // 상세 페이지 컨테이너 숨기기
        const detailContainer = document.getElementById('project-detail-container');
        if (detailContainer) {
            detailContainer.style.display = 'none';
        }

        // 메인 컨테이너 표시
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.style.display = 'block';
        }

        this.currentRoute = null;
    }

    // 프로젝트 상세 HTML 로드
    async loadProjectDetail(projectId) {
        try {
            const response = await fetch(`./projects/${projectId}.html`);
            if (!response.ok) {
                throw new Error(`프로젝트 파일을 찾을 수 없습니다: ${projectId}`);
            }
            return await response.text();
        } catch (error) {
            // 기본 템플릿 반환
            return this.getDefaultProjectTemplate(projectId);
        }
    }

    // 기본 프로젝트 템플릿
    getDefaultProjectTemplate(projectId) {
        return `
            <div class="project-detail">
                <header class="project-detail-header">
                    <button class="back-button" onclick="router.goBack()">
                        <i class="fas fa-arrow-left"></i> 뒤로가기
                    </button>
                    <h1>프로젝트 상세</h1>
                </header>
                
                <div class="project-detail-content">
                    <div class="project-hero">
                        <h2>프로젝트 제목</h2>
                        <p>프로젝트 설명이 여기에 들어갑니다.</p>
                    </div>
                    
                    <div class="project-info">
                        <h3>프로젝트 정보</h3>
                        <p>상세한 프로젝트 정보와 기술 스택, 개발 과정 등을 여기에 작성합니다.</p>
                    </div>
                </div>
            </div>
        `;
    }

    // 프로젝트 상세 페이지 CSS 로드
    loadProjectDetailCSS() {
        // 이미 로드되어 있는지 확인
        if (document.getElementById('project-detail-css')) {
            return;
        }

        const link = document.createElement('link');
        link.id = 'project-detail-css';
        link.rel = 'stylesheet';
        link.href = './css/project-detail.css';
        document.head.appendChild(link);
    }

    // 프로그래매틱 네비게이션
    navigate(path) {
        window.location.hash = path;
    }

    // 뒤로가기
    goBack() {
        if (this.currentRoute) {
            window.location.hash = '';
        } else {
            window.history.back();
        }
    }
}

// 전역 라우터 인스턴스 생성
const router = new SimpleRouter();

// 전역으로 내보내기
window.router = router;
