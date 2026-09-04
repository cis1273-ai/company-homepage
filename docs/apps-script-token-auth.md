# Apps Script 토큰 인증 — 적용 방법

프론트엔드는 이미 처리됨 (`src/App.tsx`, 커밋 b1e69e5):
관리자 액션 `getData` / `updateRow` / `sendReply` 호출 시 `&token=<VITE_ADMIN_PASSWORD>` 를 함께 보낸다.
문의 접수(공개)는 그대로.

이제 Apps Script 쪽에서 그 토큰을 검사하면 된다.

---

## 1. 스크립트 속성에 토큰 등록

Apps Script 편집기 → 왼쪽 ⚙ **프로젝트 설정** → 아래로 스크롤 → **스크립트 속성** → **속성 추가**

| 속성 | 값 |
|------|-----|
| `ADMIN_TOKEN` | GitHub 시크릿 `VITE_ADMIN_PASSWORD` 와 **똑같은 값** |

> 비밀번호는 항상 세 곳이 같아야 한다: GitHub 시크릿 / (로컬 개발 시) `.env` / Apps Script `ADMIN_TOKEN`

---

## 2. `doGet` 맨 앞에 가드 8줄 추가

`Code.gs`(또는 `코드.gs`)에서 `function doGet(e) {` 를 찾아, **그 줄 바로 다음에** 붙여넣는다.
기존 코드는 손대지 않는다.

```javascript
  var _adminActions = ['getData', 'updateRow', 'sendReply'];
  if (_adminActions.indexOf(e.parameter.action) !== -1) {
    var _expected = PropertiesService.getScriptProperties().getProperty('ADMIN_TOKEN');
    if (!_expected || e.parameter.token !== _expected) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
```

저장 (Ctrl+S).

---

## 3. 재배포 (URL 유지)

오른쪽 위 **배포 → 배포 관리** → 현재 활성 배포의 **✏️** → 버전을 **"새 버전"** 으로 → **배포**

> ⚠️ "새 배포"(New deployment)를 누르면 URL(`AKfycby...`)이 바뀐다. 반드시 **배포 관리 → 기존 것 수정**.
> 만약 URL이 바뀌었다면 `src/App.tsx` 74번째 줄 `SCRIPT_URL` 을 새 URL로 고치고 다시 배포한다.

---

## 4. 확인

- `<SCRIPT_URL>?action=getData` 를 브라우저에서 토큰 없이 열기 → `{"success":false,"error":"unauthorized"}`
- `<SCRIPT_URL>?action=getData&token=<ADMIN_TOKEN값>` → 데이터 JSON
- `ellev.co.kr/#admin` 로그인 → 목록/상태변경/답장 정상
- 문의 폼(비로그인) 정상

---

## 남은 한계

`VITE_ADMIN_PASSWORD` 는 Vite 가 빌드 JS 에 인라인하므로 토큰이 번들에서 보인다.
- 현재(토큰 없음): URL만 알면 데이터 유출
- 적용 후: 번들을 뜯어야 토큰 획득 → 난이도 상승
- 완전한 해결은 Apps Script 에 Google 계정 인증(OAuth) 또는 별도 백엔드. 정적 SPA 구조상 이 저장소만으로는 불가.
