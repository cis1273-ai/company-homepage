import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import 'dotenv/config';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API Route for sending email
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, company, email, phone, message } = req.body;

      if (!name || !company || !email || !phone) {
        return res.status(400).json({ error: "필수 입력 항목이 누락되었습니다." });
      }

      // Check if environment variables are set
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;

      if (!emailUser || !emailPass) {
        console.error("이메일 서버 환경변수(EMAIL_USER, EMAIL_PASS)가 설정되지 않았습니다.");
        return res.status(500).json({ 
          error: "서버 이메일 설정이 완료되지 않았습니다.", 
          details: "관리자에게 문의하거나 .env 파일에 EMAIL_USER와 EMAIL_PASS를 설정해주세요." 
        });
      }

      // Set up NodeMailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${emailUser}>`, // Use authenticated user as sender to avoid DMARC issues
        replyTo: email,
        to: emailUser, // Send to yourself
        subject: `[웹사이트 상담 문의] ${company} - ${name}님`,
        text: `
이름: ${name}
회사명: ${company}
이메일: ${email}
연락처: ${phone}

문의 내용:
${message}
        `,
        html: `
          <h3>새로운 상담 문의가 접수되었습니다.</h3>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>회사명:</strong> ${company}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>연락처:</strong> ${phone}</p>
          <br />
          <p><strong>문의 내용:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "문의가 접수되었습니다." });

    } catch (error: any) {
      console.error("이메일 전송 상세 오류:", error);
      res.status(500).json({ error: "서버 오류로 인해 메일을 전송하지 못했습니다.", details: error?.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Static files serving in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
