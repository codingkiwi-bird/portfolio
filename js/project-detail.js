// 프로젝트 상세 페이지 JavaScript

// 프로젝트 상세 정보 데이터
const projectData = {
    'project-1': {
        title: '쇼핑몰 웹사이트',
        date: '2024년 1월 - 3월',
        role: '풀스택 개발자',
        duration: '3개월',
        description: 'React와 Node.js를 활용한 풀스택 전자상거래 플랫폼입니다. 사용자 친화적인 인터페이스와 안전한 결제 시스템을 구현했습니다. 실시간 재고 관리, 주문 추적, 고객 리뷰 시스템 등 완전한 이커머스 솔루션을 제공합니다. 대용량 트래픽을 처리할 수 있는 확장 가능한 아키텍처로 설계했습니다.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe API', 'Redis', 'AWS S3'],
        features: [
            '사용자 인증 및 권한 관리 시스템',
            '실시간 장바구니 및 결제 시스템 (Stripe 연동)',
            '고급 상품 검색 및 필터링 기능',
            '주문 관리 및 실시간 배송 추적',
            '고객 리뷰 및 평점 시스템',
            '관리자 대시보드 및 통계 분석',
            '이메일 알림 및 마케팅 기능',
            '모바일 반응형 디자인'
        ],
        challenges: '대용량 트래픽 처리와 실시간 재고 동기화가 주요 도전이었습니다. Redis를 활용한 캐싱 시스템과 웹소켓을 통한 실시간 업데이트로 해결했습니다. 또한 결제 시스템의 보안을 위해 PCI DSS 준수 방안을 적용했습니다.',
        lessons: '대규모 웹 애플리케이션의 아키텍처 설계와 성능 최적화에 대해 깊이 있게 학습했습니다. 특히 캐싱 전략, 데이터베이스 최적화, 그리고 보안 구현의 중요성을 체감했습니다.',
        githubUrl: 'https://github.com/username/shopping-mall',
        demoUrl: 'https://shopping-mall-demo.com'
    },
    'project-2': {
        title: '프로젝트 관리 앱',
        date: '2024년 4월 - 6월',
        role: '프론트엔드 개발자',
        duration: '3개월',
        description: 'Vue.js와 Firebase를 사용한 실시간 협업 프로젝트 관리 도구입니다. 팀 협업과 업무 효율성을 향상시키는 기능을 제공합니다. 칸반 보드, 간트 차트, 실시간 채팅 등 다양한 프로젝트 관리 도구를 통합했습니다. PWA로 구현하여 오프라인에서도 작업이 가능합니다.',
        tech: ['Vue.js', 'Firebase', 'SCSS', 'PWA', 'Chart.js', 'Socket.io', 'Vuex', 'Vue Router'],
        features: [
            '드래그 앤 드롭 칸반 보드',
            '간트 차트 및 타임라인 관리',
            '팀 멤버 초대 및 세분화된 권한 관리',
            '실시간 채팅 및 알림 시스템',
            '프로젝트 진행률 및 성과 대시보드',
            'PWA 지원으로 오프라인 작업 가능',
            '파일 첨부 및 공유 기능',
            '시간 추적 및 업무 로그'
        ],
        challenges: '실시간 데이터 동기화와 오프라인 지원이 주요 과제였습니다. Firebase의 실시간 데이터베이스와 Service Worker를 활용해 seamless한 사용자 경험을 구현했습니다. 복잡한 상태 관리를 위해 Vuex를 효과적으로 활용했습니다.',
        lessons: 'Vue.js 생태계에 대한 깊은 이해와 PWA 개발 경험을 쌓았습니다. 실시간 애플리케이션 개발과 오프라인 대응 전략에 대해 학습했습니다.',
        githubUrl: 'https://github.com/username/project-management',
        demoUrl: 'https://project-management-demo.com'
    },
    'project-3': {
        title: '브랜드 아이덴티티 디자인',
        date: '2024년 2월 - 4월',
        role: '브랜드 디자이너',
        duration: '2개월',
        description: '스타트업을 위한 완전한 브랜드 아이덴티티 패키지입니다. 로고, 컬러 팔레트, 타이포그래피, 브랜드 가이드라인을 포함합니다. 현대적이면서도 친근한 브랜드 이미지를 구축하여 타겟 고객에게 강한 인상을 남기도록 디자인했습니다. 다양한 매체에서 일관성 있게 적용할 수 있는 확장 가능한 시스템을 구축했습니다.',
        tech: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects', 'Sketch'],
        features: [
            '메인, 서브, 심볼 로고 디자인',
            '브랜드 컬러 시스템 및 팔레트 구축',
            '전용 타이포그래피 가이드라인',
            '명함, 레터헤드 등 스테이셔너리 디자인',
            '웹사이트 및 모바일 적용 가이드',
            '브랜드 사용 매뉴얼 및 가이드라인',
            '소셜 미디어 템플릿 제작',
            '패키징 및 마케팅 자료 디자인'
        ],
        challenges: '다양한 매체에서 일관성을 유지하면서도 각 플랫폼의 특성을 살리는 것이 중요했습니다. 확장 가능한 디자인 시스템을 구축하여 브랜드의 성장에 맞춰 유연하게 적용할 수 있도록 했습니다.',
        lessons: '브랜드 아이덴티티의 전략적 접근과 시스템적 사고를 배웠습니다. 다양한 터치포인트에서의 브랜드 경험 설계의 중요성을 깨달았습니다.',
        githubUrl: '#',
        demoUrl: 'https://brand-portfolio.com'
    },
    'project-4': {
        title: '모바일 앱 UI/UX 디자인',
        date: '2024년 5월 - 7월',
        role: 'UI/UX 디자이너',
        duration: '3개월',
        description: '건강 관리 앱의 사용자 인터페이스와 사용자 경험 디자인입니다. 직관적인 네비게이션과 아름다운 시각적 디자인을 제공합니다. 사용자의 건강 데이터를 효과적으로 시각화하고, 동기부여를 위한 게이미피케이션 요소를 포함했습니다. 접근성을 고려한 인클루시브 디자인을 적용했습니다.',
        tech: ['Figma', 'Sketch', 'Prototyping', 'Adobe XD', 'Principle', 'Zeplin', 'InVision'],
        features: [
            '직관적인 온보딩 프로세스 설계',
            '건강 데이터 시각화 대시보드',
            '운동 및 식단 관리 인터페이스',
            '소셜 기능 및 커뮤니티 설계',
            '개인화된 건강 목표 설정 시스템',
            '게이미피케이션 요소 및 보상 시스템',
            '접근성을 고려한 인클루시브 디자인',
            '다크 모드 및 개인화 옵션'
        ],
        challenges: '복잡한 건강 데이터를 사용자가 쉽게 이해할 수 있도록 시각화하는 것이 핵심 과제였습니다. 사용자 테스트를 반복하며 최적의 정보 아키텍처와 인터랙션 디자인을 찾아갔습니다.',
        lessons: '사용자 중심 디자인의 중요성과 데이터 시각화 기법을 학습했습니다. 접근성과 사용성을 동시에 만족시키는 디자인의 어려움과 보람을 경험했습니다.',
        githubUrl: '#',
        demoUrl: 'https://health-app-demo.com'
    }
};

// URL에서 프로젝트 ID 가져오기
function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'project-1';
}

// 프로젝트 상세 정보 로드
function loadProjectDetail() {
    const projectId = getProjectIdFromUrl();
    const data = projectData[projectId];
    
    if (!data) {
        console.error('프로젝트 데이터를 찾을 수 없습니다:', projectId);
        // 기본 프로젝트로 리다이렉트
        window.location.href = 'project-detail.html?id=project-1';
        return;
    }
    
    // 페이지 제목 업데이트
    document.title = `${data.title} - 포트폴리오`;
    
    // 프로젝트 정보 업데이트
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-date').textContent = data.date;
    document.getElementById('detail-role').textContent = data.role;
    document.getElementById('detail-duration').textContent = data.duration;
    document.getElementById('detail-description-text').textContent = data.description;
    document.getElementById('detail-challenges-text').textContent = data.challenges;
    document.getElementById('detail-lessons-text').textContent = data.lessons;
    
    // 기술 태그 업데이트
    const techContainer = document.getElementById('detail-tech-tags');
    techContainer.innerHTML = '';
    data.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });
    
    // 주요 기능 업데이트
    const featuresList = document.getElementById('detail-features-list');
    featuresList.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // 링크 업데이트
    const githubLink = document.getElementById('github-link');
    const demoLink = document.getElementById('demo-link');
    
    if (data.githubUrl && data.githubUrl !== '#') {
        githubLink.href = data.githubUrl;
        githubLink.style.display = 'inline-flex';
    } else {
        githubLink.style.display = 'none';
    }
    
    if (data.demoUrl && data.demoUrl !== '#') {
        demoLink.href = data.demoUrl;
        demoLink.style.display = 'inline-flex';
    } else {
        demoLink.style.display = 'none';
    }
}

// 헤더 스크롤 효과
function initializeHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    };

    window.addEventListener('scroll', handleScroll);
}

// 부드러운 스크롤 네비게이션
function initializeNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadProjectDetail();
    initializeHeader();
    initializeNavigation();
    
    // 페이지 로드 애니메이션
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// 뒤로가기 버튼 기능 향상
document.addEventListener('DOMContentLoaded', function() {
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            // 브라우저 히스토리에 이전 페이지가 있으면 뒤로가기, 없으면 메인 페이지로
            if (document.referrer && document.referrer.includes(window.location.host)) {
                e.preventDefault();
                window.history.back();
            }
            // 그렇지 않으면 기본 링크 동작 (index.html#projects)
        });
    }
});
