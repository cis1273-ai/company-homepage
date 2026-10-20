/**
 * ==============================================================================
 * 엘레브앤컴퍼니(ELLEV&COMPANY) 상담문의 접수 및 관리자 연동 Apps Script
 *
 * 기능:
 * 1. 신규 문의 제출 시 구글 스프레드시트에 자동 기록
 * 2. 관리자 이메일(ellev1273@gmail.com)로 상세 접수 알림 이메일 자동 발송
 * 3. 문의 고객에게 접수 확인 안내 이메일 자동 회신
 * 4. 관리자 페이지(#admin) 목록 조회(getData), 상태/메모 변경(updateRow), 답장 전송(sendReply) 완벽 지원
 * ==============================================================================
 */

// 알림 메일을 수신할 관리자 이메일 주소
var ADMIN_EMAIL = 'ellev1273@gmail.com';

function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var params = (e && e.parameter) ? e.parameter : {};
    var action = params.action;

    // 1. 관리자 전용 기능 (getData, updateRow, sendReply)
    var adminActions = ['getData', 'updateRow', 'sendReply'];
    if (adminActions.indexOf(action) !== -1) {
      if (!isAuthorized(params.token)) {
        return ContentService
          .createTextOutput(JSON.stringify({ success: false, error: 'unauthorized' }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      if (action === 'getData') {
        return handleGetData();
      } else if (action === 'updateRow') {
        return handleUpdateRow(params);
      } else if (action === 'sendReply') {
        return handleSendReply(params);
      }
    }

    // 2. 신규 상담 문의 접수 (홈페이지 폼 제출)
    return handleNewInquiry(params);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// -------------------------------------------------------------
// 관리자 권한 검증 함수
// -------------------------------------------------------------
function isAuthorized(token) {
  if (!token) return false;

  // 1) 스크립트 속성에 ADMIN_TOKEN이 설정되어 있다면 비교
  var expectedToken = PropertiesService.getScriptProperties().getProperty('ADMIN_TOKEN');
  if (expectedToken && token === expectedToken) {
    return true;
  }

  // 2) Google OAuth ID 토큰 검증
  try {
    var response = UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(token), {
      muteHttpExceptions: true
    });
    if (response.getResponseCode() === 200) {
      var tokenInfo = JSON.parse(response.getContentText());
      var allowedEmails = [ADMIN_EMAIL, 'cis1273@gmail.com'];
      if (tokenInfo.email && allowedEmails.indexOf(tokenInfo.email.toLowerCase()) !== -1) {
        return true;
      }
    }
  } catch (e) {
    Logger.log('Auth check error: ' + e);
  }

  return false;
}

// -------------------------------------------------------------
// 신규 상담문의 접수 처리 & ellev1273@gmail.com 알림 발송
// -------------------------------------------------------------
function handleNewInquiry(params) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var name = params.name || '';
  var company = params.company || '';
  var email = params.email || '';
  var contact = params.contact || '';
  var message = params.message || '';
  var now = new Date();
  var dateStr = Utilities.formatDate(now, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
  var defaultStatus = '신규 문의';
  var defaultMemo = '';

  // 1. 구글 스프레드시트에 행 추가
  sheet.appendRow([dateStr, name, company, email, contact, message, defaultStatus, defaultMemo]);

  // 2. 관리자(ellev1273@gmail.com)에게 알림 메일 발송
  try {
    var adminSubject = '[신규 상담문의 접수] ' + (company ? company + ' / ' : '') + name + '님';
    var adminHtml = '<div style="font-family: \'Apple SD Gothic Neo\', \'Malgun Gothic\', sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">'
      + '<h2 style="color: #002b66; border-bottom: 2px solid #002b66; padding-bottom: 12px; margin-top: 0;">홈페이지 신규 상담문의가 접수되었습니다</h2>'
      + '<table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; width: 110px; border-bottom: 1px solid #e2e8f0;">접수 일시</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">' + dateStr + '</td></tr>'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">성함</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">' + name + '</td></tr>'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">회사명</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">' + company + '</td></tr>'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">이메일</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:' + email + '">' + email + '</a></td></tr>'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">연락처</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:' + contact + '">' + contact + '</a></td></tr>'
      + '<tr><td style="padding: 10px; background-color: #f8fafc; font-weight: bold; vertical-align: top; border-bottom: 1px solid #e2e8f0;">문의 내용</td><td style="padding: 10px; white-space: pre-wrap; line-height: 1.6; border-bottom: 1px solid #e2e8f0;">' + message + '</td></tr>'
      + '</table>'
      + '<div style="margin-top: 24px; text-align: center;">'
      + '<a href="https://ellev.co.kr/#admin" style="display: inline-block; background-color: #0056b3; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">관리자 대시보드 바로가기</a>'
      + '</div>'
      + '</div>';

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: adminSubject,
      htmlBody: adminHtml
    });
  } catch (mailErr) {
    Logger.log('관리자 메일 발송 실패: ' + mailErr.toString());
  }

  // 3. 신청자에게 자동 확인 안내 메일 발송
  if (email && email.indexOf('@') !== -1) {
    try {
      var clientSubject = '[엘레브앤컴퍼니] 상담문의가 정상적으로 접수되었습니다.';
      var clientHtml = '<div style="font-family: \'Apple SD Gothic Neo\', \'Malgun Gothic\', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">'
        + '<h2 style="color: #002b66; margin-top: 0;">안녕하세요, ' + name + '님.</h2>'
        + '<p style="font-size: 15px; line-height: 1.6; color: #334155;">'
        + '엘레브앤컴퍼니에 상담 문의를 남겨주셔서 대단히 감사합니다.<br/>'
        + '보내주신 문의 내용이 정상적으로 접수되었으며, 담당 컨설턴트가 검토 후 빠른 시일 내에 연락드리겠습니다.'
        + '</p>'
        + '<div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin: 20px 0; font-size: 14px; color: #475569;">'
        + '<p style="margin: 0 0 8px 0;"><strong>접수 일시:</strong> ' + dateStr + '</p>'
        + '<p style="margin: 0 0 8px 0;"><strong>회사명:</strong> ' + company + '</p>'
        + '<p style="margin: 0;"><strong>문의 내용:</strong></p>'
        + '<p style="margin: 4px 0 0 0; white-space: pre-wrap;">' + message + '</p>'
        + '</div>'
        + '<p style="font-size: 14px; color: #64748b; margin-top: 24px;">'
        + '감사합니다.<br/>'
        + '<strong>주식회사 엘레브앤컴퍼니 드림</strong>'
        + '</p>'
        + '</div>';

      MailApp.sendEmail({
        to: email,
        subject: clientSubject,
        htmlBody: clientHtml
      });
    } catch (clientMailErr) {
      Logger.log('신청자 안내 메일 발송 실패: ' + clientMailErr.toString());
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: 'Inquiry received' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// -------------------------------------------------------------
// 관리자 문의 목록 조회 (getData)
// -------------------------------------------------------------
function handleGetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var result = [];

  var startIndex = 0;
  if (data.length > 0 && (data[0][0] === '접수일시' || data[0][0] === 'date' || isNaN(Date.parse(data[0][0])))) {
    startIndex = 1;
  }

  for (var i = startIndex; i < data.length; i++) {
    var row = data[i];
    if (!row[0] && !row[1] && !row[2]) continue;
    result.push({
      rowIndex: i + 1,
      date: row[0] ? String(row[0]) : '',
      name: row[1] ? String(row[1]) : '',
      company: row[2] ? String(row[2]) : '',
      email: row[3] ? String(row[3]) : '',
      contact: row[4] ? String(row[4]) : '',
      message: row[5] ? String(row[5]) : '',
      status: row[6] ? String(row[6]) : '신규 문의',
      memo: row[7] ? String(row[7]) : ''
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// -------------------------------------------------------------
// 상담 문의 상태 및 관리자 메모 수정 (updateRow)
// -------------------------------------------------------------
function handleUpdateRow(params) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowIndex = parseInt(params.rowIndex, 10);
  if (!rowIndex || rowIndex < 1) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Invalid rowIndex' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (params.status !== undefined) {
    sheet.getRange(rowIndex, 7).setValue(params.status);
  }
  if (params.memo !== undefined) {
    sheet.getRange(rowIndex, 8).setValue(params.memo);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// -------------------------------------------------------------
// 관리자 답장 발송 (sendReply)
// -------------------------------------------------------------
function handleSendReply(params) {
  var toEmail = params.toEmail;
  var subject = params.subject || '[엘레브앤컴퍼니] 문의에 대한 답변드립니다.';
  var body = params.body || '';
  var rowIndex = parseInt(params.rowIndex, 10);

  if (!toEmail || !body) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Missing toEmail or body' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  MailApp.sendEmail({
    to: toEmail,
    subject: subject,
    body: body
  });

  if (rowIndex && rowIndex >= 1) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(rowIndex, 7).setValue('답변 완료');
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
