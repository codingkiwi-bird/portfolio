// ===========================================
// 포트폴리오 JavaScript 모듈
// 컴포넌트 기반 아키텍처로 구성
// ===========================================

// 전역 변수 및 설정
let skillObserver = null;

// ===========================================
// 유틸리티 함수들
// ===========================================

// 이메일 검증 함수
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 디바운스 함수 (성능 최적화)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================================
// 네비게이션 기능
// ===========================================

function initializeNavigation() {
    console.log('네비게이션 초기화 중...');

    // 스무스 스크롤 네비게이션
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

    console.log('네비게이션 초기화 완료');
}

// ===========================================
// 헤더 기능
// ===========================================

function initializeHeader() {
    console.log('헤더 초기화 중...');

    const header = document.querySelector('.header');
    if (!header) {
        console.warn('헤더 요소를 찾을 수 없습니다.');
        return;
    }

    // 헤더 스크롤 효과
    const handleScroll = debounce(() => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }, 10);

    window.addEventListener('scroll', handleScroll);

    console.log('헤더 초기화 완료');
}

// ===========================================
// 프로젝트 기능
// ===========================================

function initializeProjects() {
    console.log('프로젝트 초기화 중...');

    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectGrids = document.querySelectorAll('.projects-grid[data-category]');

    if (projectCards.length === 0) {
        console.warn('프로젝트 카드를 찾을 수 없습니다.');
        return;
    }

    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // 활성 버튼 상태 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 프로젝트 필터링
            if (filter === 'all') {
                // 모든 프로젝트 표시
                projectCards.forEach(card => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                });
                projectGrids.forEach(grid => {
                    grid.style.display = 'grid';
                });
            } else {
                // 특정 카테고리만 표시
                projectCards.forEach(card => {
                    const cardType = card.getAttribute('data-type');
                    if (cardType === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });

                // 카테고리별 그리드 표시/숨김
                projectGrids.forEach(grid => {
                    const category = grid.getAttribute('data-category');
                    if (category === filter) {
                        grid.style.display = 'grid';
                    } else {
                        grid.style.display = 'none';
                    }
                });
            }
        });
    });

    // 초기 상태 설정
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.transition = 'all 0.3s ease';
    });

    console.log(`${projectCards.length}개의 프로젝트 카드 초기화 완료`);
}

// ===========================================
// 스킬 애니메이션 기능
// ===========================================

function initializeSkills() {
    console.log('스킬 애니메이션 초기화 중...');

    // 기존 옵저버 정리
    if (skillObserver) {
        skillObserver.disconnect();
    }

    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length === 0) {
        console.warn('스킬 아이템을 찾을 수 없습니다.');
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 스킬 아이템들에 애니메이션 적용
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        skillObserver.observe(item);
    });

    console.log(`${skillItems.length}개의 스킬 아이템 애니메이션 설정 완료`);
}

// ===========================================
// 연락처 폼 기능
// ===========================================

function initializeContactForm() {
    console.log('연락처 폼 초기화 중...');

    const form = document.querySelector('form');
    if (!form) {
        console.warn('연락처 폼을 찾을 수 없습니다.');
        return;
    }

    // 폼 제출 처리
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 간단한 폼 검증
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('유효한 이메일 주소를 입력해주세요.');
            return;
        }

        // 실제로는 서버로 데이터를 전송해야 하지만, 여기서는 데모용으로 알림만 표시
        alert('메시지가 성공적으로 전송되었습니다!');

        // 폼 초기화
        e.target.reset();
    });

    console.log('연락처 폼 초기화 완료');
}

// ===========================================
// 히어로 섹션 애니메이션
// ===========================================

function initializeHeroAnimation() {
    console.log('히어로 애니메이션 초기화 중...');

    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) {
        console.warn('히어로 콘텐츠를 찾을 수 없습니다.');
        return;
    }

    // 히어로 섹션 페이드인
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);

    console.log('히어로 애니메이션 초기화 완료');
}

// ===========================================
// 메인 초기화 함수
// ===========================================

function initializePortfolio() {
    console.log('포트폴리오 초기화 시작...');

    try {
        // 컴포넌트별 초기화 함수들 실행
        initializeNavigation();
        initializeHeader();
        initializeProjects();
        initializeSkills();
        initializeContactForm();
        initializeHeroAnimation();

        console.log('포트폴리오 초기화 완료! 🎉');
    } catch (error) {
        console.error('포트폴리오 초기화 중 오류 발생:', error);
    }
}

// ===========================================
// 컴포넌트 로드 완료 이벤트 리스너
// ===========================================

// 컴포넌트 로더에서 컴포넌트가 로드될 때마다 호출되는 함수
function onComponentLoaded(componentName) {
    console.log(`컴포넌트 로드됨: ${componentName}`);

    // 특정 컴포넌트가 로드되면 관련 초기화 함수 실행
    switch (componentName) {
        case 'header':
            initializeHeader();
            break;
        case 'hero':
            initializeHeroAnimation();
            break;
        case 'projects':
            initializeProjects();
            break;
        case 'skills':
            initializeSkills();
            break;
        case 'contact':
            initializeContactForm();
            break;
        default:
            break;
    }
}

// 전역 이벤트 리스너 등록
document.addEventListener('componentLoaded', (e) => {
    onComponentLoaded(e.detail.componentName);
});

// ===========================================
// 페이지 로드 시 초기화
// ===========================================

// DOM이 완전히 로드된 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 로드됨, 포트폴리오 초기화 대기 중...');

    // 컴포넌트 로더가 준비될 때까지 대기
    if (typeof componentLoader !== 'undefined') {
        initializePortfolio();
    } else {
        // 컴포넌트 로더가 아직 로드되지 않은 경우
        const checkLoader = setInterval(() => {
            if (typeof componentLoader !== 'undefined') {
                clearInterval(checkLoader);
                initializePortfolio();
            }
        }, 100);
    }
});

// ===========================================
// 개발자 콘솔용 유틸리티 함수들
// ===========================================

// 전역 함수로 노출 (개발자 콘솔에서 직접 사용 가능)
window.PortfolioUtils = {
    reloadComponent: (componentName) => {
        if (typeof componentLoader !== 'undefined') {
            const targetElement = document.querySelector(`[data-component="${componentName}"]`);
            if (targetElement) {
                componentLoader.reloadComponent(componentName, targetElement);
            } else {
                console.error(`컴포넌트 대상 요소를 찾을 수 없습니다: ${componentName}`);
            }
        } else {
            console.error('컴포넌트 로더가 초기화되지 않았습니다.');
        }
    },

    getLoadedComponents: () => {
        return typeof componentLoader !== 'undefined' ? componentLoader.getLoadedComponents() : [];
    },

    initializeAll: initializePortfolio
};
