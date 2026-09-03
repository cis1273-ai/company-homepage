// 관리자 비밀번호는 .env 파일의 VITE_ADMIN_PASSWORD 로 관리합니다. (.env 는 .gitignore 에 등록됨)
//
// ⚠️ 주의: Vite 는 빌드 시 VITE_* 환경변수를 클라이언트 번들에 그대로 인라인합니다.
// 따라서 이 방식은 비밀번호를 "소스 코드와 깃 히스토리에서 제거"할 뿐,
// 브라우저 사용자에게서 숨기지는 못합니다 (DevTools 로 번들을 열면 보임).
// 실제 인증은 백엔드(Google Apps Script)에서 수행해야 합니다.
// 자세한 내용은 docs/SECURITY_AUDIT.md 참고.
export const ADMIN_PASSWORD: string = import.meta.env.VITE_ADMIN_PASSWORD ?? '';
