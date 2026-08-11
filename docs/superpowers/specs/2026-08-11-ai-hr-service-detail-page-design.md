# AI 기반 E-HR 시스템 상세 페이지 — 설계

## 배경

메인 홈페이지(`index.html` / `App.tsx`)의 "Detailed Services" 섹션은 4개 서비스 카테고리(조직 진단 / 조직·인사 컨설팅 / AI 기반 E-HR 시스템 / 변화 관리)를 짧은 불릿 리스트로만 보여준다. 각 서비스가 독립된 URL을 갖지 않아 검색엔진이 개별 키워드(예: "AI 인사행정 시스템", "직무평가 시스템")로 색인할 수 없다. SEO 개선의 일환으로, 우선 가장 문의가 많을 것으로 예상되는 **"AI 기반 E-HR 시스템"** 하나에 대해 독립된 상세 페이지를 연결한다.

## 범위

- 대상 서비스: **AI 기반 E-HR 시스템** 1개만 (조직진단/변화관리 등 나머지 3개는 이번 범위 아님)
- 신규 콘텐츠 작성 없음 — 기존에 만든 두 자산을 재사용/보강

## 재사용할 기존 자산

1. **`/ai-hr-system.html`** (이미 `public/`에 존재, `HR Suite.html`에서 복사)
   - 내용: 인력산정·직무평가·인사평가·직무적합도매칭·총인건비시뮬레이터·모바일복무관리 6개 모듈
   - data.ts의 "AI 기반 E-HR 시스템" 항목(직무분석·직무평가, 인력산정, 조직및개인평가, 복무관리)과 내용상 대부분 겹침
   - 반응형 웹페이지라 모바일에서도 정상적으로 읽힘
   - → **메인 SEO 대상 페이지**로 채택

2. **`HR Intelligence Suite/deck.html`** (사용자가 새로 추가한 참고자료, 12페이지 슬라이드 덱)
   - `design_system.css`, `deck_stage.js`와 함께 완결된 프레젠테이션 패키지
   - 1920×1080 고정 슬라이드 + JS 자동 축소(letterbox)로 렌더링 — 모바일에서 깨지진 않지만 텍스트가 작아져 읽기엔 불편
   - → **보너스 리소스**로 링크만 추가 ("발표자료 보기"), SEO 메인 타깃으로는 사용하지 않음

## 변경 사항

### 1. `public/ai-hr-system.html` — SEO 메타태그 보강

현재 `<title>`만 있고 `meta description`, canonical, OG 태그가 전혀 없다. 다음을 `<head>`에 추가:
- `meta description` (핵심 키워드 포함: AI 인사행정, 인력산정, 직무평가, 공공기관 HR)
- `canonical` → `https://ellev.co.kr/ai-hr-system.html`
- Open Graph 태그 (`og:title`, `og:description`, `og:type`, `og:url`, `og:image` — 기존 `og-image.png` 재사용)
- `viewport` meta (원본에 없으면 추가 확인)

### 2. `public/sitemap.xml` — 신규 URL 등록

`https://ellev.co.kr/ai-hr-system.html` 항목 추가 (홈페이지보다 낮은 `priority`, 예: 0.8)

### 3. `HR Intelligence Suite/` 폴더 → `public/hr-intelligence-suite/`로 복사

- `deck.html`, `design_system.css`, `deck_stage.js`만 이동 (poster/brochure/srcmap.json 등은 이번 범위 아님 — 필요시 추후 추가)
- 상대경로(`design_system.css`, `deck_stage.js`) 그대로 유지되므로 같은 폴더에 함께 위치

### 4. `src/App.tsx` — `DetailedServicesSection`에 링크 추가

`detailedServices` 배열의 `id === 'hr-education'`(AI 기반 E-HR 시스템) 탭이 활성화되었을 때만, 카드 목록 아래에 버튼 2개 표시:
- "서비스 상세 보기 →" → `/ai-hr-system.html` (새 탭)
- "발표자료 보기 →" → `/hr-intelligence-suite/deck.html` (새 탭)

다른 3개 탭(조직진단/조직인사컨설팅/변화관리)에는 버튼을 표시하지 않는다 (해당 콘텐츠가 없으므로).

## 검증 계획

- `npm run dev`로 로컬 확인: AI 기반 E-HR 시스템 탭 클릭 → 버튼 2개 노출 → 각각 정상 페이지로 이동
- `deck.html`이 `design_system.css`/`deck_stage.js`를 상대경로로 정상 로드하는지 네트워크 탭 확인
- 모바일 뷰포트(375px)에서 새 버튼 2개가 레이아웃 깨짐 없이 표시되는지 확인
- `ai-hr-system.html`의 OG 태그가 카카오톡 디버거에서 정상 노출되는지 확인 (배포 후)

## 범위 밖 (Out of scope)

- 나머지 3개 서비스(조직진단/조직인사컨설팅/변화관리) 상세 페이지 — 추후 별도 작업
- `poster.html`, `brochure.html`, `brochure_인쇄용.html`, srcmap.json 등 — 이번엔 미사용, 필요시 후속 작업에서 검토
