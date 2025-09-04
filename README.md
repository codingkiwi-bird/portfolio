# 🎯 포트폴리오 웹사이트

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://[깃허브아이디].github.io/portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)

프론트엔드 개발자 [이름]의 반응형 포트폴리오 웹사이트입니다.
컴포넌트 기반 아키텍처로 구성되어 유지보수가 용이합니다.

## 🌟 주요 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱에서 최적화된 경험
- **컴포넌트 기반**: 각 섹션이 독립적인 컴포넌트로 구성
- **SEO 최적화**: 검색 엔진 친화적 메타 태그 및 구조
- **접근성**: 웹 접근성 가이드라인 준수
- **성능 최적화**: 빠른 로딩과 부드러운 애니메이션

## 📁 프로젝트 구조

```
/portfolio/
├── index.html              # 메인 페이지
├── 404.html               # 404 에러 페이지
├── robots.txt             # 검색 엔진 크롤링 규칙
├── sitemap.xml            # 사이트맵
├── components/            # HTML 컴포넌트들
│   ├── header.html       # 헤더/네비게이션
│   ├── hero.html         # 히어로 섹션
│   ├── about.html        # 소개 섹션
│   ├── projects.html     # 프로젝트 섹션
│   ├── skills.html       # 기술 스택 섹션
│   ├── contact.html      # 연락처 섹션
│   └── footer.html       # 푸터
├── css/
│   └── styles.css        # 스타일시트
├── js/
│   ├── loader.js         # 컴포넌트 로더
│   └── script.js         # 메인 스크립트
└── images/               # 이미지 파일들
    ├── favicon.svg       # 파비콘
    └── og-image.jpg      # 소셜 미디어 공유 이미지
```

## 🚀 로컬 개발 환경

### 사전 요구사항

- 웹 브라우저 (Chrome, Firefox, Safari 등)
- 로컬 웹 서버 (Python, Node.js, Apache 등)

### 로컬 서버 실행

#### Python 사용 (권장)
```bash
# Python 3.x 버전 확인
python3 --version

# 서버 실행
python3 -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000
```

#### Node.js 사용
```bash
# http-server 설치 (전역)
npm install -g http-server

# 서버 실행
http-server -p 8000

# 브라우저에서 접속
# http://localhost:8000
```

## 🌐 GitHub Pages 배포

### 1. GitHub Repository 생성

1. GitHub에서 새 repository 생성
2. Repository 이름을 `portfolio`로 설정
3. 프로젝트 파일들을 업로드

### 2. GitHub Pages 설정

1. Repository의 **Settings** 탭 클릭
2. 좌측 메뉴에서 **Pages** 선택
3. **Source**를 **Deploy from a branch**로 설정
4. **Branch**를 `main`으로 설정
5. **Save** 버튼 클릭

### 3. URL 설정

GitHub Pages가 활성화되면 다음 URL로 접속 가능:
```
https://[깃허브아이디].github.io/portfolio/
```

### 4. 배포 후 확인사항

배포 후 다음 파일들의 경로를 확인하고 수정:

1. **index.html**의 메타 태그들:
   ```html
   <meta property="og:url" content="https://[깃허브아이디].github.io/portfolio/">
   ```

2. **robots.txt**의 sitemap URL:
   ```
   Sitemap: https://[깃허브아이디].github.io/portfolio/sitemap.xml
   ```

3. **sitemap.xml**의 모든 URL들:
   ```xml
   <loc>https://[깃허브아이디].github.io/portfolio/</loc>
   ```

## 🎨 컴포넌트 수정하기

### HTML 컴포넌트 수정

각 섹션은 독립적인 컴포넌트로 구성되어 있어 개별 수정이 가능합니다:

```bash
# 헤더 수정
components/header.html

# 소개 섹션 수정
components/about.html

# 프로젝트 섹션 수정
components/projects.html
```

### 스타일 수정

CSS 파일에서 디자인을 수정할 수 있습니다:

```css
/* 메인 스타일 파일 */
css/styles.css
```

### 스크립트 수정

JavaScript 파일에서 기능을 수정할 수 있습니다:

```javascript
// 컴포넌트 로더
js/loader.js

// 메인 스크립트
js/script.js
```

## 📱 반응형 디자인

다음 브레이크포인트에서 최적화되어 있습니다:

- **데스크톱**: 1200px 이상
- **태블릿**: 768px ~ 1199px
- **모바일**: 767px 이하

## 🔍 SEO 최적화

다음 SEO 요소들이 포함되어 있습니다:

- 메타 태그 (description, keywords, author)
- Open Graph 태그 (페이스북 공유용)
- Twitter Card 태그
- 구조화된 데이터
- 검색 엔진 친화적 URL 구조

## 🚀 성능 최적화

- **컴포넌트 지연 로딩**: 필요한 컴포넌트만 로드
- **CSS 최적화**: 불필요한 코드 제거
- **이미지 최적화**: 적절한 포맷과 크기 사용
- **캐싱 전략**: 컴포넌트 캐싱으로 재방문 시 빠른 로딩

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **이름**: [이름]
- **이메일**: your.email@example.com
- **GitHub**: https://github.com/[깃허브아이디]
- **포트폴리오**: https://[깃허브아이디].github.io/portfolio/

---

⭐ **이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**
