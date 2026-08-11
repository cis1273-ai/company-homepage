# AI HR 서비스 상세 페이지 연결 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 메인 홈페이지의 "AI 기반 E-HR 시스템" 서비스 탭에서, 이미 존재하는 반응형 상세 페이지(`ai-hr-system.html`)와 새로 추가된 슬라이드 덱(`deck.html`)으로 이어지는 링크를 제공하고, 상세 페이지 자체를 검색엔진이 색인할 수 있도록 메타태그를 보강한다.

**Architecture:** 정적 파일(`public/*.html`, `sitemap.xml`)에 대한 직접 수정과, React 컴포넌트(`DetailedServicesSection`)에 조건부 렌더링 버튼 2개 추가. 이 프로젝트는 Vite + React (TypeScript) SPA이며 자동화 테스트 스위트가 없으므로, 각 태스크의 검증은 (a) 정적 파일은 `grep`/`curl`로 내용 확인, (b) React 변경은 `npm run dev` 로컬 서버 + 브라우저 렌더링 확인으로 수행한다.

**Tech Stack:** Vite 6, React 19, TypeScript, Tailwind CSS 4. 정적 자산은 `public/`에 두면 빌드 시 그대로 `dist/`에 복사된다.

## Global Constraints

- 도메인은 `https://ellev.co.kr` (기존 `sitemap.xml`, `index.html`의 canonical과 동일하게 유지)
- 새 URL 경로는 대소문자·파일명 그대로 유지: `/ai-hr-system.html`, `/hr-intelligence-suite/deck.html`
- 기존 `og-image.png`(1200×630, `public/og-image.png`)를 재사용 — 새 OG 이미지를 만들지 않는다
- "AI 기반 E-HR 시스템" 탭의 `id`는 `'hr-education'` (`src/data.ts`의 `detailedServices` 배열 참조) — 버튼은 이 탭에서만 노출
- 나머지 3개 서비스 탭(`org-diagnosis`, `org-innovation`, `change-management`)에는 이번 범위에서 버튼을 추가하지 않는다

---

### Task 1: `ai-hr-system.html`에 SEO 메타태그 추가

**Files:**
- Modify: `public/ai-hr-system.html:1-8`

**Interfaces:**
- Consumes: 없음 (독립적인 정적 HTML 파일 수정)
- Produces: 이후 Task 4에서 이 파일을 링크할 때, 페이지가 이미 완전한 SEO 메타데이터를 갖추고 있다는 전제

- [ ] **Step 1: 현재 `<head>` 확인**

Run: `sed -n '1,8p' "public/ai-hr-system.html"`

Expected (현재 상태):
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HR One Intelligence Suite - 통합 브로슈어</title>
    <style>
```

- [ ] **Step 2: `<title>` 태그 바로 아래에 메타태그 삽입**

`public/ai-hr-system.html`에서 다음 줄을 찾는다:

```html
    <title>HR One Intelligence Suite - 통합 브로슈어</title>
```

그 줄을 아래 블록으로 교체한다 (title 유지 + 메타태그 추가):

```html
    <title>HR One Intelligence Suite - 통합 브로슈어 | 엘레브앤컴퍼니 AI HR 시스템</title>
    <meta name="description" content="인력산정, 직무평가, 인사평가, 직무적합도 매칭, 총인건비 시뮬레이터, 모바일 복무관리까지 아우르는 엘레브앤컴퍼니의 AI 기반 HR One Intelligence Suite를 소개합니다." />
    <link rel="canonical" href="https://ellev.co.kr/ai-hr-system.html" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="엘레브앤컴퍼니" />
    <meta property="og:title" content="HR One Intelligence Suite - 통합 브로슈어 | 엘레브앤컴퍼니 AI HR 시스템" />
    <meta property="og:description" content="인력산정, 직무평가, 인사평가, 직무적합도 매칭, 총인건비 시뮬레이터, 모바일 복무관리까지 아우르는 AI 기반 HR 플랫폼." />
    <meta property="og:url" content="https://ellev.co.kr/ai-hr-system.html" />
    <meta property="og:image" content="https://ellev.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="HR One Intelligence Suite - 통합 브로슈어 | 엘레브앤컴퍼니 AI HR 시스템" />
    <meta name="twitter:description" content="인력산정, 직무평가, 인사평가, 직무적합도 매칭, 총인건비 시뮬레이터, 모바일 복무관리까지 아우르는 AI 기반 HR 플랫폼." />
    <meta name="twitter:image" content="https://ellev.co.kr/og-image.png" />
```

- [ ] **Step 3: 삽입 결과 확인**

Run: `grep -c "og:title\|meta name=\"description\"\|canonical" "public/ai-hr-system.html"`
Expected: `3` 이상의 숫자 출력 (og:title, description, canonical이 모두 존재)

- [ ] **Step 4: Commit**

```bash
git add public/ai-hr-system.html
git commit -m "Add SEO meta tags to ai-hr-system.html brochure page"
```

---

### Task 2: `sitemap.xml`에 새 URL 등록

**Files:**
- Modify: `public/sitemap.xml`

**Interfaces:**
- Consumes: 없음
- Produces: 없음 (독립적인 정적 파일)

- [ ] **Step 1: 현재 내용 확인**

Run: `cat "public/sitemap.xml"`

Expected (현재 상태, Task 실행 시점 날짜는 다를 수 있음):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ellev.co.kr/</loc>
    <lastmod>2026-08-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 2: `</urlset>` 닫는 태그 바로 앞에 새 `<url>` 블록 추가**

`public/sitemap.xml`의 `</urlset>` 줄을 아래로 교체한다 (오늘 날짜로 `lastmod` 채우기):

```xml
  <url>
    <loc>https://ellev.co.kr/ai-hr-system.html</loc>
    <lastmod>2026-08-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 3: XML 유효성 확인**

Run: `node -e "require('fs').readFileSync('public/sitemap.xml','utf8').includes('ai-hr-system.html') && console.log('OK')"`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add public/sitemap.xml
git commit -m "Register ai-hr-system.html in sitemap.xml"
```

---

### Task 3: 슬라이드 덱 자산을 `public/hr-intelligence-suite/`로 복사

**Files:**
- Create: `public/hr-intelligence-suite/deck.html` (원본: `../HR Intelligence Suite/deck.html`, 프로젝트 루트 기준 `../../HR Intelligence Suite/deck.html`)
- Create: `public/hr-intelligence-suite/design_system.css` (원본: `../HR Intelligence Suite/design_system.css`)
- Create: `public/hr-intelligence-suite/deck_stage.js` (원본: `../HR Intelligence Suite/deck_stage.js`)

**Interfaces:**
- Consumes: 없음 (파일 복사만)
- Produces: `/hr-intelligence-suite/deck.html` — Task 4에서 이 경로로 링크 연결

- [ ] **Step 1: 원본 파일 존재 확인**

Run (company-homepage 상위의 `company-homepage-main` 디렉토리에서):
```bash
ls -la "../HR Intelligence Suite/deck.html" "../HR Intelligence Suite/design_system.css" "../HR Intelligence Suite/deck_stage.js"
```
Expected: 세 파일 모두 크기와 함께 출력됨 (에러 없음)

- [ ] **Step 2: 대상 디렉토리 생성 및 복사**

`company-homepage/` 디렉토리에서 실행:
```bash
mkdir -p public/hr-intelligence-suite
cp "../HR Intelligence Suite/deck.html" public/hr-intelligence-suite/deck.html
cp "../HR Intelligence Suite/design_system.css" public/hr-intelligence-suite/design_system.css
cp "../HR Intelligence Suite/deck_stage.js" public/hr-intelligence-suite/deck_stage.js
```

- [ ] **Step 3: `deck.html`이 상대경로로 CSS/JS를 참조하는지 확인** (같은 폴더에 있어야 함)

Run: `grep -n "design_system.css\|deck_stage.js" public/hr-intelligence-suite/deck.html`
Expected: `design_system.css`와 `deck_stage.js`를 참조하는 줄이 출력됨 (경로에 `../`나 절대경로가 없어야 함 — 있다면 Step 2에서 옮긴 상대 위치와 어긋나므로 해당 참조를 파일명만 남도록 수정)

- [ ] **Step 4: 로컬 서버로 실제 로딩 확인**

Run:
```bash
npm run dev
```
브라우저에서 `http://localhost:5173/hr-intelligence-suite/deck.html` 접속 → 개발자 도구 Network 탭에서 `design_system.css`와 `deck_stage.js`가 200 상태로 로드되는지 확인. 확인 후 서버 종료(Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add public/hr-intelligence-suite/
git commit -m "Add HR Intelligence Suite slide deck as static assets"
```

---

### Task 4: `DetailedServicesSection`에 링크 버튼 2개 추가

**Files:**
- Modify: `src/App.tsx:602-636` (`DetailedServicesSection` 함수)

**Interfaces:**
- Consumes: `detailedServices` (from `src/data.ts`, 이미 import됨) — 각 항목은 `{ id: string, title: string, items: string[] }`
- Produces: 없음 (leaf 컴포넌트)

- [ ] **Step 1: 현재 컴포넌트 구조 확인**

Run: `sed -n '602,636p' src/App.tsx`

Expected (현재 상태):
```tsx
function DetailedServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-24 bg-surface px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold inline-block border-b-[3px] border-secondary pb-2">Detailed Services</h2>
          </div>
          <div className="flex flex-wrap border-b border-outline mb-12 w-full">
            {detailedServices.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`py-4 px-4 font-bold text-[15px] sm:text-[17px] border-b-2 transition-colors flex-1 text-center whitespace-nowrap ${
                  activeTab === idx ? 'border-secondary text-primary' : 'border-transparent text-on-surface-muted hover:text-on-surface'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 min-h-[200px]">
            {detailedServices[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-background p-6 rounded-lg shadow-sm border border-outline hover:border-secondary transition-all hover:-translate-y-1">
                <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 카드 그리드 `</div>` 바로 다음에 조건부 버튼 블록 삽입**

`src/App.tsx`에서 아래 부분을 찾는다:

```tsx
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 min-h-[200px]">
            {detailedServices[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-background p-6 rounded-lg shadow-sm border border-outline hover:border-secondary transition-all hover:-translate-y-1">
                <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

아래 내용으로 교체한다 (카드 그리드 `</div>` 뒤에 조건부 버튼 블록 추가):

```tsx
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 min-h-[200px]">
            {detailedServices[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-background p-6 rounded-lg shadow-sm border border-outline hover:border-secondary transition-all hover:-translate-y-1">
                <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
          {detailedServices[activeTab].id === 'hr-education' && (
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <a
                href="/ai-hr-system.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded font-semibold text-center hover:bg-[#004f9b] transition-colors"
              >
                서비스 상세 보기 →
              </a>
              <a
                href="/hr-intelligence-suite/deck.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary text-secondary px-6 py-3 rounded font-semibold text-center hover:bg-secondary hover:text-white transition-colors"
              >
                발표자료 보기 →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: 타입 확인 (컴파일 에러 없는지)**

Run: `npm run lint`
Expected: 에러 없이 종료 (`tsc --noEmit`가 lint 스크립트로 등록되어 있음)

- [ ] **Step 4: 로컬 서버로 동작 확인**

Run:
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 접속 → "Detailed Services" 섹션까지 스크롤 → 4개 탭 중 "AI 기반 E-HR 시스템" 탭 클릭 → 카드 아래에 "서비스 상세 보기 →", "발표자료 보기 →" 버튼 2개가 나타나는지 확인. 다른 3개 탭("조직 진단", "조직·인사 컨설팅", "변화 관리") 클릭 시 버튼이 나타나지 않는지 확인. 두 버튼을 각각 클릭해 `/ai-hr-system.html`과 `/hr-intelligence-suite/deck.html`이 새 탭에서 정상적으로 열리는지 확인.

- [ ] **Step 5: 모바일 뷰포트 확인**

브라우저 개발자 도구에서 375px 너비로 전환 후 같은 절차 반복 — 버튼 2개가 세로로 쌓이며(`flex-col`) 겹치거나 화면 밖으로 넘치지 않는지 확인.

서버 확인 후 종료(Ctrl+C).

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx
git commit -m "Link AI HR System detail page and deck from services tab"
```

---

### Task 5: 배포 후 최종 확인

**Files:** 없음 (검증 전용 태스크)

**Interfaces:**
- Consumes: Task 1~4의 배포된 결과물
- Produces: 없음

- [ ] **Step 1: 원격에 push (아직 안 했다면)**

```bash
git push origin main
```

- [ ] **Step 2: GitHub Actions 빌드 완료 대기**

`https://github.com/cis1273-ai/company-homepage/actions` 에서 최신 워크플로우가 초록색 체크로 완료될 때까지 기다린다 (보통 2~3분).

- [ ] **Step 3: 실사이트에서 확인**

- `https://ellev.co.kr` 접속 → Detailed Services → "AI 기반 E-HR 시스템" 탭 → 두 버튼 클릭 확인
- `https://ellev.co.kr/ai-hr-system.html` 직접 접속 → 페이지 소스에서 `<meta name="description"` 존재 확인
- `https://ellev.co.kr/hr-intelligence-suite/deck.html` 직접 접속 → 슬라이드 덱이 스타일 깨짐 없이 로드되는지 확인

- [ ] **Step 4: Google Search Console에 새 URL 수동 색인 요청 (선택)**

Search Console 상단 검색창에 `https://ellev.co.kr/ai-hr-system.html` 입력 → "색인 생성 요청" 클릭.
