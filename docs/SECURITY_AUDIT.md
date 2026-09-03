# 보안 감사 — company-homepage

작성일: 2026-09-03

## 위험도 순 요약

| # | 위험도 | 위치 | 문제 | 상태 |
|---|--------|------|------|------|
| 1 | 🔴 Critical | `src/App.tsx` `AdminPage` (client-side 인증) + Google Apps Script `SCRIPT_URL` | 관리자 인증이 브라우저에서만 수행됨. 백엔드(`SCRIPT_URL`)는 인증 없이 `?action=getData` 로 **모든 상담 문의(이름·이메일·전화·문의내용)를 반환**하고, `updateRow` / `sendReply` 도 누구나 호출 가능. | ⚠️ 코드로만은 해결 불가 (Apps Script 수정 필요) |
| 2 | 🟠 High | `src/admin-config.ts:2` (원본) | 관리자 비밀번호 `admin1234` 가 소스에 하드코딩 + 깃 히스토리에 존재. | ✅ `.env` 로 이관 (아래 표) — 단 근본 해결은 #1 |
| 3 | 🟡 Medium | `.env.example` (원본) | 실제 이메일 주소 `cis1273@gmail.com` 가 예시 파일에 커밋됨. | ✅ placeholder 로 교체 |
| 4 | 🟢 Low | `package.json` | 의존성은 대체로 최신(React 19, Vite 6, Tailwind 4). `@google/genai`, `@emailjs/browser` 는 설치돼 있으나 `src/` 에서 미사용. | 사용 안 하면 제거 권장 |

### 화면단 외부 API 직접 호출 여부 (프롬프트 3번 항목)

- `SCRIPT_URL` (Google Apps Script) 를 브라우저에서 직접 호출 — 상담 접수(`CTASection`)와 관리자 기능(`AdminDashboard`) 모두.
- 이 URL 자체는 "비밀"이 아니지만, **엔드포인트에 인증이 없어** 사실상 공개 데이터 유출 통로. → #1 과 동일 이슈.
- Gemini/이메일 키는 `src/` 코드에서 실제로 호출하지 않음 (노출 없음).

### 소유권 미검증 (프롬프트 4번 항목)

- 이 앱은 "사용자별 데이터 소유권" 모델이 없다. 단일 관리자가 전체 문의를 본다.
- 따라서 IDOR 형태의 코드 수정 대상은 이 저장소에 없음.
- 실질적 접근통제 결함은 **Apps Script 엔드포인트가 호출자를 전혀 검증하지 않는 것**.
  권장: Apps Script Script Property 에 공유 토큰을 두고, `getData`/`updateRow`/`sendReply`
  모두 요청의 토큰을 검사한 뒤에만 동작하도록 수정. 관리자 비밀번호 검증도 Apps Script 로 이동.

## 적용한 변경

| 파일 | 변경 전 | 변경 후 |
|------|---------|---------|
| `src/admin-config.ts:2` | `export const ADMIN_PASSWORD = 'admin1234';` | `export const ADMIN_PASSWORD: string = import.meta.env.VITE_ADMIN_PASSWORD ?? '';` (+ 경고 주석) |
| `src/vite-env.d.ts` | (없음) | 신규 — `VITE_ADMIN_PASSWORD` 타입 선언 |
| `.env` | (없음) | 신규 — `VITE_ADMIN_PASSWORD=admin1234` (`.gitignore` 로 이미 제외됨) |
| `.env.example` | `EMAIL_USER="cis1273@gmail.com"` | `EMAIL_USER=""`, `VITE_ADMIN_PASSWORD=` 항목 추가 |
| `CLAUDE.md` | (없음) | 신규 — 보안 규칙 |

- 커밋/서버 재시작 하지 않음.
- `.gitignore` 는 이미 `.env*` + `!.env.example` 규칙이 있어 수정 불필요.
- `npx tsc --noEmit` 통과 확인.

## 남은 조치 (수동)

1. **노출됐던 `admin1234` 를 새 비밀번호로 교체.** 깃 히스토리·배포 번들에 이미 남아 있음.
2. Google Apps Script 에 호출자 인증(공유 토큰 또는 Google 계정 검증) 추가.
3. 관리자 비밀번호 검증 로직을 Apps Script 로 이동 (브라우저에서 완전히 제거).
4. 미사용 의존성 `@google/genai`, `@emailjs/browser` 제거 검토.

---

## 2026-09-03 후속 — 권장 항목 적용

- **`npm audit fix`** 실행 → **0 vulnerabilities** (4→0). `tsc --noEmit` 통과.
