/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Lightbulb, Award, CheckCircle2, Menu, X, Check } from 'lucide-react';
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <div className="flex items-center cursor-pointer py-2 -ml-8 md:-ml-14">
          <img src="/logo.png" alt="엘레브앤컴퍼니 Logo" className="h-16 md:h-20 w-auto object-contain object-left" />
        </div>
        
        <nav className="hidden md:flex gap-10 items-center font-medium text-[15px] md:-mr-8">
          <a href="#about" className="text-on-surface hover:text-secondary transition-colors">회사소개</a>
          <a href="#services" className="text-on-surface hover:text-secondary transition-colors">서비스 영역</a>
          <a href="#projects" className="text-on-surface hover:text-secondary transition-colors">주요 실적</a>
          <a href="#contact" className="text-on-surface hover:text-secondary transition-colors">상담 문의</a>
        </nav>
        
        <button className="md:hidden p-2 text-on-surface" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {menuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-surface border-b border-outline p-4 flex flex-col gap-4 shadow-lg">
          <a href="#about" className="p-2 font-medium" onClick={() => setMenuOpen(false)}>회사소개</a>
          <a href="#services" className="p-2 font-medium" onClick={() => setMenuOpen(false)}>서비스 영역</a>
          <a href="#projects" className="p-2 font-medium" onClick={() => setMenuOpen(false)}>주요 실적</a>
          <a href="#contact" className="p-2 font-medium" onClick={() => setMenuOpen(false)}>상담 문의</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-primary text-white py-24 md:py-36 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-8">
        <p className="text-lg md:text-xl font-medium tracking-wide">
          조직과 사람, 그리고 변화를 잇는 <span className="font-bold">통합 HR 솔루션 파트너</span>
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.4] text-gray-200 tracking-tight break-keep">
          <span className="font-bold text-white">엘레브앤컴퍼니</span>는 기업의 지속 가능한 성장을 위한<br />
          최적의 인적 자원 전략과 실행력을 제공합니다.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#contact" className="bg-secondary text-white px-8 py-4 rounded hover:bg-[#004f9b] font-semibold transition-colors text-lg text-center block">
            상담 문의하기
          </a>
          <a href="/company_profile.pdf" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-8 py-4 rounded hover:bg-white hover:text-primary font-semibold transition-colors text-lg text-center block">
            회사 소개서
          </a>
        </div>
      </div>
    </section>
  );
}

function GreetingSection() {
  return (
    <section className="py-24 bg-surface-low px-4 md:px-6 border-b border-outline">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-on-surface mb-6 leading-tight break-keep">
          사람을 향한 진심, <br className="hidden sm:block"/> 상생을 이끄는 고객중심의 정교한 전략.
        </h2>
        <h3 className="text-lg md:text-[19px] font-medium text-secondary mb-12">
          안녕하십니까, 엘레브앤컴퍼니 대표 전인식입니다.
        </h3>
        
        <div className="space-y-6 text-[15px] md:text-[16px] text-on-surface-muted leading-[1.8] break-keep">
          <p>한 분야에서 25년을 보낸다는 것은, 수많은 기업의 고민을 내 고민처럼 여기고 함께 밤을 지새웠다는 의미이기도 합니다.</p>
          <p>지난 2010년, 더 가치 있는 HR 서비스를 제공하고자 문을 연 <span className="font-semibold text-on-surface">엘레브앤컴퍼니</span>는 언제나 '고객중심'의 가치를 최우선에 두고 달려왔습니다. 우리는 단순히 컨설팅을 제공하는 제3자가 아닙니다. 고객사의 치열한 현장 속으로 들어가 함께 호흡하고, 기업이 직면한 진짜 문제를 함께 해결하는 가장 든든한 러닝메이트입니다.</p>
          <p>경영학 책에 나오는 뻔한 이론은 현장에서 결코 작동하지 않습니다.<br/>저희는 기업마다 가진 고유의 가치와 구성원들의 목소리에 먼저 귀 기울입니다.</p>
          <div className="pl-5 md:pl-6 py-2 border-l-4 border-secondary/40 my-10 italic text-on-surface font-medium">
            <p className="mb-2">"CEO의 철학이 조직 말단까지 흐르는 고객 맞춤형 전략,"</p>
            <p>"구성원의 성장이 기업의 이익으로 이어지는 상생(相生)의 매커니즘"을</p>
            <p className="mt-4 not-italic font-normal text-on-surface-muted text-[15px] md:text-[15px]">
              구축하는 것이 <span className="font-semibold text-on-surface">엘레브앤컴퍼니</span>가 존재하는 이유이자 사명입니다.
            </p>
          </div>
          <p>고객사의 성장이 곧 저희의 성장이며, 기업과 인재가 함께 상생할 때 비로소 위대한 도약이 시작됩니다. 화려한 수식어보다 확실한 '결과'로 증명하겠습니다.</p>
          <p>철저하게 고객의 눈높이에서 고민하고, 진심을 담은 컨설팅으로 귀사의 위대한 여정에 늘 동행하겠습니다.</p>
          
          <div className="mt-16 pt-8 border-t border-outline/50 flex align-middle justify-end pr-4">
            <span className="font-bold text-lg md:text-[19px] text-on-surface">엘레브앤컴퍼니 대표 전인식 올림</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section id="about" className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold inline-block border-b-[3px] border-secondary pb-2 mb-8">Brand Identity</h2>
          </div>
          <div className="space-y-8 text-on-surface-muted leading-relaxed break-keep text-[15px]">
            <div>
              <h3 className="text-[17px] font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                상생을 뜻하는 '인터록킹(Interlocking)' 추상화 컨셉
              </h3>
              <p className="pl-3.5">두 개의 유연한 고리가 서로 맞물려 있거나 무한대(∞) 기호를 변형한 형태입니다.</p>
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                심벌 의미
              </h3>
              <p className="pl-3.5">컨설팅 회사와 고객사가 함께 맞물려 돌아가며 가치를 창출하는 &quot;상생&quot;과 &quot;고객 중심&quot;의 철학을 가장 직관적으로 보여줍니다.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold inline-block border-b-[3px] border-secondary pb-2 mb-2">Our Core Values</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = IconMap[val.icon] || Users;
            return (
              <div key={idx} className="bg-surface border border-outline rounded p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-surface-low rounded flex items-center justify-center mb-6 border border-outline">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-on-surface">{val.title}</h3>
                <p className="text-on-surface-muted leading-[1.6] break-keep">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessModelSection() {
  return (
    <section id="services" className="py-24 bg-surface-low px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-2xl font-bold inline-block border-b-[3px] border-secondary pb-2 mb-6">Services</h2>
          <p className="text-on-surface-muted max-w-2xl px-4 leading-[1.6]">
            엘레브앤컴퍼니의 세 가지 핵심 사업 영역은 유기적으로 통합되어, 기업의 인사 문제를 근본적으로 해결하고 최적의 고객 가치를 창출합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {businessModels.map((model) => (
            <div key={model.id} className="bg-surface border border-outline rounded p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-secondary">
              <span className="text-secondary font-bold text-2xl mb-6">{model.id}</span>
              <h3 className="text-xl font-bold mb-4 break-keep">{model.title}</h3>
              <p className="text-on-surface-muted leading-[1.6] break-keep">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                  activeTab === idx 
                    ? 'border-secondary text-primary' 
                    : 'border-transparent text-on-surface-muted hover:text-on-surface'
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

function StatsClientsSection() {
  return (
    <section id="projects" className="bg-primary text-white">
      <div className="border-b border-primary-container px-4 md:px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-primary-container">
          <div className="md:pr-12">
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">SUCCESS TRACK</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">150여 <span className="text-4xl text-white">건</span></div>
            <p className="text-xl font-semibold mb-2">누적 프로젝트 수행</p>
          </div>
          <div className="pt-12 md:pt-0 md:pl-12">
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">RETENTION</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">80%+</div>
            <p className="text-xl font-semibold mb-2">기존 고객 재계약률</p>
          </div>
        </div>
      </div>
      
      <div className="px-4 md:px-6 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-widest font-bold text-gray-400 mb-2">TRUSTED BY</h2>
            <h3 className="text-2xl font-bold tracking-widest">CLIENT TRUST</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-blue-300 font-bold mb-6 text-lg border-b border-primary-container pb-4">공공 부문</h4>
              <div className="flex flex-wrap gap-2">
                {publicClients.map((client, idx) => (
                  <span key={idx} className="bg-[#111c2e] border border-[#1e2f47] text-gray-300 text-sm py-1.5 px-3 rounded text-center">{client.trim().replace(/ 등$/, '')}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-blue-300 font-bold mb-6 text-lg border-b border-primary-container pb-4">민간 부문</h4>
              <div className="flex flex-wrap gap-2">
                {privateClients.map((client, idx) => (
                  <span key={idx} className="bg-[#111c2e] border border-[#1e2f47] text-gray-300 text-sm py-1.5 px-3 rounded text-center">{client.trim().replace(/ 등$/, '')}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-2">전인식 대표 컨설턴트</h2>
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Principal Consultant</span>
            <div className="mt-10 space-y-8">
              <p className="font-bold text-[15px] md:text-[17px] text-primary p-6 bg-surface-low rounded border-l-4 border-secondary">
                "조직 및 인적자원관리 전략 분야에 있어 25년에 걸친 전략적 통찰력과 전문적 실무 역량의 결집"
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src="/Profile.png" alt="Profile" className="w-full rounded border-4 border-white shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 서버 통신 없이 상태 업데이트 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    
    setTimeout(() => {
      setIsSuccess(false);
      setIsFormVisible(false);
      setIsSubmitting(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-surface-low py-24 px-4 border-y border-outline">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">조직의 미래를 함께 설계하시겠습니까?</h2>
        {!isFormVisible && !isSuccess && (
          <button onClick={() => setIsFormVisible(true)} className="bg-secondary text-white px-10 py-5 rounded font-bold transition-all text-lg shadow-lg">
            상담 문의하기
          </button>
        )}
        {isSuccess && <div className="bg-green-100 p-6 rounded text-green-700">문의가 성공적으로 접수되었습니다.</div>}
        {isFormVisible && !isSuccess && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-background p-8 rounded shadow-lg mt-8 text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="성함" className="w-full px-4 py-3 border rounded" />
              <input required name="company" value={formData.company} onChange={handleChange} placeholder="회사명" className="w-full px-4 py-3 border rounded" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="문의 내용" className="w-full px-4 py-3 border rounded mb-4" />
            <button type="submit" className="bg-secondary text-white px-8 py-3 rounded" disabled={isSubmitting}>
              {isSubmitting ? '접수 중...' : '문의하기 접수'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111822] text-gray-400 py-16 px-4 md:px-6 text-sm text-center">
      <p>© 2026 Ellev&Company. All rights reserved.</p>
    </footer>
  );
}
