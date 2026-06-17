/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Lightbulb, Award, CheckCircle2, Menu, X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { coreValues, businessModels, detailedServices, publicClients, privateClients } from './data';

const IconMap: Record<string, React.FC<any>> = {
  Users, Lightbulb, Award
};

export default function App() {
  return (
    <div className="font-sans min-h-screen text-on-surface bg-background">
      <Header />
      <main>
        <Hero />
        <GreetingSection />
        <CoreValuesSection />
        <BusinessModelSection />
        <DetailedServicesSection />
        <StatsClientsSection />
        <ProfileSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

// ... [중략: Header, Hero, GreetingSection 등 기존 컴포넌트 유지] ...

function CTASection() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 본인의 EmailJS 서비스 ID, 템플릿 ID, Public Key를 각각 입력해주세요.
      // 보안을 위해 실제 환경에서는 .env 파일을 사용하는 것을 권장합니다.
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }, publicKey);

      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS 발송 실패:', error);
      alert('메일 발송에 실패했습니다. 관리자에게 문의해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-surface-low py-24 px-4 border-y border-outline">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">조직의 미래를 함께 설계하시겠습니까?</h2>
        {!isFormVisible && !isSuccess && (
          <button onClick={() => setIsFormVisible(true)} className="bg-secondary text-white px-10 py-5 rounded font-bold shadow-lg">상담 문의하기</button>
        )}
        {isSuccess && <div className="bg-green-100 p-6 rounded text-green-700">문의가 성공적으로 전달되었습니다.</div>}
        {isFormVisible && !isSuccess && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-background p-8 rounded shadow-lg mt-8 text-left">
            <input required name="name" onChange={handleChange} placeholder="성함" className="w-full px-4 py-3 border rounded mb-4" />
            <input required name="company" onChange={handleChange} placeholder="회사명" className="w-full px-4 py-3 border rounded mb-4" />
            <input required type="email" name="email" onChange={handleChange} placeholder="이메일" className="w-full px-4 py-3 border rounded mb-4" />
            <input required name="phone" onChange={handleChange} placeholder="연락처" className="w-full px-4 py-3 border rounded mb-4" />
            <textarea name="message" onChange={handleChange} rows={5} placeholder="문의 내용" className="w-full px-4 py-3 border rounded mb-4" />
            <button type="submit" disabled={isSubmitting} className="bg-secondary text-white px-8 py-3 rounded">
              {isSubmitting ? '전송 중...' : '문의하기 접수'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ... [나머지 Footer 등 동일] ...
