/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Users, Lightbulb, Award, CheckCircle2, Menu, X, BookOpen, BarChart3, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { coreValues, businessModels, detailedServices, publicClients, privateClients } from './data';

const IconMap: Record<string, React.FC<any>> = {
  Users, Lightbulb, Award
};

const TICKER_TEXT = '전인식 대표컨설턴트 · 조직·인적자원관리 분야 25년 경력 · 네모파트너즈 이사 역임 · 前 서울특별시·인천광역시 출자출연기관 경영평가 위원 역임 · 공공 108건 + 민간 42건, 총 150여 건 프로젝트 수행 · 기존 고객 재계약률 80%+ · 전문 강연 46회 이상 · 저서 『알기 쉬운 조사방법론』';

function Ticker() {
  const repeated = `${TICKER_TEXT}　　　　　${TICKER_TEXT}`;
  return (
    <div className="overflow-hidden bg-primary-container text-blue-100 text-[12px] tracking-wide h-8 flex items-center">
      <div className="ticker-track whitespace-nowrap select-none">
        <span className="px-8">{repeated}</span>
        <span className="px-8">{repeated}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="font-sans min-h-screen text-on-surface bg-background">
      <Ticker />
      <Header />
      <main>
        <Hero />
        <GreetingSection />
        <CoreValuesSection />
        <BusinessModelSection />
        <DetailedServicesSection />
        <StatsClientsSection />
        <ProfileSection />
        <CaseStudySection />
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
          <a href="#contact" className="bg-secondary text-white px-8 py-4 rounded hover:bg-[#004f9b] font-semibold transition-colors text-lg text-center block">상담 문의하기</a>
          <a href="/company_profile.pdf" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-8 py-4 rounded hover:bg-white hover:text-primary font-semibold transition-colors text-lg text-center block">회사 소개서</a>
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
            <p className="mt-4 not-italic font-normal text-on-surface-muted text-[15px]">
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

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatsClientsSection() {
  const projects = useCountUp(150, 2000);
  const retention = useCountUp(80, 2000);
  const experience = useCountUp(25, 2000);
  const lectures = useCountUp(50, 2000);

  return (
    <section id="projects" className="bg-primary text-white">
      <div className="border-b border-primary-container px-4 md:px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-primary-container">
          <div className="py-8 md:py-0 px-6 md:px-8 text-center" ref={experience.ref}>
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">EXPERIENCE</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">{experience.count}<span className="text-4xl text-white">년+</span></div>
            <p className="text-xl font-semibold mb-2">컨설팅 경력</p>
          </div>
          <div className="py-8 md:py-0 px-6 md:px-8 text-center" ref={projects.ref}>
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">SUCCESS TRACK</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">{projects.count}여 <span className="text-4xl text-white">건</span></div>
            <p className="text-xl font-semibold mb-2">누적 프로젝트 수행</p>
          </div>
          <div className="py-8 md:py-0 px-6 md:px-8 text-center" ref={retention.ref}>
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">RETENTION</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">{retention.count}%+</div>
            <p className="text-xl font-semibold mb-2">기존 고객 재계약률</p>
          </div>
          <div className="py-8 md:py-0 px-6 md:px-8 text-center" ref={lectures.ref}>
            <h3 className="text-secondary font-bold mb-4 text-sm tracking-widest">LECTURE</h3>
            <div className="text-5xl sm:text-6xl font-bold mb-4 text-blue-300">{lectures.count}여 <span className="text-4xl text-white">건</span></div>
            <p className="text-xl font-semibold mb-2">풍부한 전문 강의 실적</p>
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
    <section className="py-24 bg-background px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28 w-full">
            <img src="/Profile.png" alt="전인식 대표 프로필 사진" className="w-full rounded-lg border-4 border-white shadow-2xl" />
          </div>
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-on-surface">전인식 대표 컨설턴트</h2>
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase block mb-6">Principal Consultant</span>
              <p className="font-bold text-[15px] md:text-[16px] text-primary p-6 bg-surface-low rounded border-l-4 border-secondary leading-relaxed break-keep shadow-sm">
                "조직 및 인적자원관리 전략 분야에 있어 25년에 걸친 전략적 통찰력과 전문적 실무 역량의 결집"
              </p>
            </div>
            <div className="space-y-6 text-on-surface-muted text-[15px] leading-relaxed break-keep">
              <div>
                <h3 className="font-bold text-on-surface text-lg mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  총 경력 개요 및 전략적 리더십
                </h3>
                <p className="pl-3.5">
                  네모파트너즈(Nemo Partners) 이사를 역임하였으며, 국내 경영 컨설팅 산업의 성장기부터 현재에 이르기까지 약 25년에 달하는 심도 있는 실무 경력과 사업적 통찰력을 보유하고 있습니다. 단순한 이론적 자문 수준을 넘어, 급변하는 경영 환경 속에서 조직의 중장기 비전과 실제 인사 실행 전략을 정밀하게 정렬시키는 핵심 의사결정 파트너로서 독보적인 입지를 확고히 해왔습니다.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface text-lg mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  압도적인 프로젝트 트랙 레코드
                </h3>
                <p className="pl-3.5">
                  공공 부문 108건 및 민간 부문 42건을 합산하여 총 150여 건 이상의 대형 프로젝트를 성공적으로 완수하였습니다. 이는 중앙 부처의 정책 수립 지원부터 지방자치단체 산하 공공기관의 체질 개선, 그리고 대기업의 글로벌 인사 전략 구축에 이르기까지, 다양한 조직 생태계의 특수성을 깊이 있게 이해하고 각기 다른 문제 해결 방법론을 유연하게 적용할 수 있는 검증된 실무 능력을 의미합니다.
                </p>
              </div>
              <div className="pt-4 border-t border-outline/50">
                <h3 className="font-bold text-on-surface text-xl mb-4 text-primary">심화 전문 영역 (Core Competencies)</h3>
                <div className="space-y-4 pl-1">
                  <div className="bg-surface-low p-4 rounded border border-outline/40">
                    <h4 className="font-bold text-on-surface text-[16px] mb-1 flex items-center gap-2 text-secondary">
                      <BarChart3 size={18} /> 조직 전략 및 거버넌스
                    </h4>
                    <p className="text-sm text-on-surface-muted leading-relaxed pl-6">
                      조직 정밀 진단(Diagnostic)을 통해 숨겨진 비효율을 찾아내고, 기능 기반의 과학적 적정 정원 산정(Manpower Sizing)을 수행합니다. 이를 통해 거시적 거버넌스 체계를 재설계하고 실행력 있는 중장기 경영 전략 로드맵을 수립하는 데 특화되어 있습니다.
                    </p>
                  </div>
                  <div className="bg-surface-low p-4 rounded border border-outline/40">
                    <h4 className="font-bold text-on-surface text-[16px] mb-1 flex items-center gap-2 text-secondary">
                      <Users size={18} /> 직무 중심 HR 솔루션
                    </h4>
                    <p className="text-sm text-on-surface-muted leading-relaxed pl-6">
                      현대적 HR의 핵심인 과학적 직무 분석과 직무가치 평가(Job Evaluation) 시스템을 구축합니다. 역량 중심의 직급 체계 고도화는 물론, 구성원의 동기부여를 극대화할 수 있는 성과 및 직무 기반의 보수 체계(Total Rewards)를 설계하여 조직의 보상 경쟁력을 강화합니다.
                    </p>
                  </div>
                  <div className="bg-surface-low p-4 rounded border border-outline/40">
                    <h4 className="font-bold text-on-surface text-[16px] mb-1 flex items-center gap-2 text-secondary">
                      <ShieldCheck size={18} /> 성과 관리 및 평가 환류
                    </h4>
                    <p className="text-sm text-on-surface-muted leading-relaxed pl-6">
                      BSC(Balanced Scorecard) 및 MBO 체계를 조직 문화에 맞게 커스터마이징하여 구축합니다. 특히 공공기관 경영평가(Internal & External) 대응에 있어 단순한 지표 관리를 넘어, 평가 결과가 조직의 실제 성과 향상으로 이어지도록 하는 환류 시스템 고도화 자문에 강점을 보유하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline/50">
                <h3 className="font-bold text-on-surface text-lg mb-2 flex items-center gap-2">
                  <BookOpen size={18} className="text-secondary" />
                  지식 자본 및 학술적 기여
                </h3>
                <p className="pl-6 text-sm sm:text-[15px]">
                  『알기 쉬운 조사방법론』, 『사례로 배우는 스포츠마케팅』 등 다수의 전문 서적 저술 활동과 총 46회 이상의 기업 및 공공기관 대상 전문 강연을 실시하였습니다. 이를 통해 이론과 현장 실무가 융합된 지식 자산을 업계에 공유하고, 후배 컨설턴트 및 인사 담당자들에게 실질적인 가이드라인을 제시하며 해당 분야의 지식 전파를 주도해오고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    num: '01',
    client: '금융감독원',
    year: '2008',
    title: '글로벌 금융기관 조직 재설계',
    problem: '글로벌 금융위기 속 국가 금융감독 시스템의 공공성·전문성 동시 강화 필요',
    approach: '경영혁신안 마련 → 조직 기능 통폐합 및 구조 개편 자문',
    result: '부처 간 기능 중복 해소, 슬림화된 국가 인력 운영 모델 제시',
  },
  {
    num: '02',
    client: '외교부',
    year: '2018',
    title: '재외공관장 성과평가 체계 고도화',
    problem: '외교 업무 특수성으로 인해 기존 성과 평가지표의 객관성·타당성 부족',
    approach: '재외공관장 성과평가 제도 합리화 → 외교 업무 특수성 반영 지표 타당성 검토',
    result: '객관적 성과 측정 가능한 평가 체계 확립, 국가 외교 역량 극대화 기여',
  },
  {
    num: '03',
    client: 'LH주거복지정보',
    year: '2023',
    title: '조직 기능 고도화 및 경영성과 체계 구축',
    problem: '조직 비전과 하부 실행 과제 간 정렬(Alignment) 부재, 주거복지 서비스 기능 비효율',
    approach: '조직 기능 정밀 진단 → 비전-실행 과제 연계성 분석 → 핵심 기능 재편안 도출',
    result: '주거복지 서비스 강화를 위한 조직 기능 최적화 및 경영성과 체계 확립',
  },
  {
    num: '04',
    client: '한국공항보안',
    year: '2023',
    title: '경영진단',
    problem: '\'20년 위탁업무 개시 이후 끊임없이 노사이슈가 발생하고 있고, 이에 따른 경영 불안이 심화되고 있는 상황임',
    approach: '경영관리 체계 진단 및 개선 → 현장관리체계 진단 및 개선 → 조직문화 진단 및 갈등 개선 → 안정적인 항공보안서비스 제공 위한 경영관리 체계 진단 및 재구축',
    result: '항공보안파트너즈 → 한국공항보안 사명변경 및 중장기 전략체계 수립, 조직구조 개편, 본사 및 현장조직 적정인력산정, 조직문화 개선, 노사관계 개선, 조직 및 개인평가제도 개선, 급여체계 개선, 중장기 재무목표 및 관리방안 수립 등 전반적인 경영시스템 고도화 확립',
  },
  {
    num: '05',
    client: '경상남도사회서비스원',
    year: '2025',
    title: '현장 중심 직무 인사시스템 구축',
    problem: '돌봄 서비스 종사자의 직무 난이도·책임 수준이 보상에 반영되지 않아 직무 몰입도 저하',
    approach: '현장 중심 직무 인사 시스템 설계 → 직무 난이도·책임 수준별 보상 체계 정교화',
    result: '종사자 직무 몰입도 향상, 사회 서비스 질적 제고',
  },
  {
    num: '06',
    client: '서울시자원봉사센터',
    year: '2026',
    title: 'AI 기반 인사평가 시스템 구축',
    problem: '조직업적(전략KPI) 및 개인업적(고유PI) 평가를 한 담당자가 수기로 관리하여 업무부담 가중 및 효율성 저하',
    approach: '바이브코딩을 통한 웹 기반 조직·개인업적 평가 지표개발 → 실적보고서 작성 → 평가자 평가 → 이의신청 → 최종점수 및 등급 확정까지 실시간 모니터링 및 운영관리 구현',
    result: '성과관리담당자 및 지표담당자 업무 부담 경감으로 성과관리 운영 효율성 증대',
  },
];

function CaseStudySection() {
  const [active, setActive] = useState(0);
  const c = caseStudies[active];
  return (
    <section className="py-24 bg-surface px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold inline-block border-b-[3px] border-secondary pb-2">Case Studies</h2>
          <p className="text-on-surface-muted mt-6 text-[15px]">대표 프로젝트 수행 사례</p>
        </div>
        <div className="flex flex-wrap border-b border-outline mb-12 w-full max-w-[860px] mx-auto">
          {caseStudies.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`py-4 px-4 font-bold text-[14px] sm:text-[15px] border-b-2 transition-colors flex-1 text-center whitespace-nowrap ${
                active === idx ? 'border-secondary text-primary' : 'border-transparent text-on-surface-muted hover:text-on-surface'
              }`}
            >
              {cs.num}. {cs.client}
            </button>
          ))}
        </div>
        <div className="bg-surface-low border border-outline rounded p-8 md:p-12 max-w-[860px] mx-auto">
          <div className="mb-8 pb-6 border-b border-outline">
            <p className="text-secondary font-bold text-sm tracking-widest mb-2">{c.client} · {c.year}</p>
            <h3 className="text-xl md:text-2xl font-bold text-on-surface break-keep">{c.title}</h3>
          </div>
          <div className="space-y-5">
            {[
              { label: '문제', text: c.problem },
              { label: '접근', text: c.approach },
              { label: '결과', text: c.result },
            ].map((row, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-bold text-[13px] tracking-widest text-secondary border border-secondary/30 bg-surface px-2 py-0.5 rounded flex-shrink-0 mt-0.5">{row.label}</span>
                <p className="text-on-surface-muted text-[15px] leading-relaxed break-keep">{row.text}</p>
              </div>
            ))}
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
    try {
      const params = new URLSearchParams({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        contact: formData.phone,
        message: formData.message,
      });
      await new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = resolve;
        img.src = `https://script.google.com/macros/s/AKfycbykmXSj0YKsvUjC7QTJdKYyNbZWzw7J9jV-M_AhK5K1HFvocdhl6z73b5wAvmZ8cJnWxg/exec?${params}`;
      });
      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('전송 실패:', error);
      alert('전송에 실패했습니다. 관리자에게 문의해주세요.');
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
          <button onClick={() => setIsFormVisible(true)} className="bg-secondary text-white px-10 py-5 rounded font-bold shadow-lg hover:bg-[#004f9b] transition-colors text-lg">
            상담 문의하기
          </button>
        )}
        {isSuccess && <div className="bg-green-100 p-6 rounded text-green-700 font-semibold">문의가 성공적으로 전달되었습니다.</div>}
        {isFormVisible && !isSuccess && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-background p-8 rounded shadow-lg mt-8 text-left mx-auto border border-outline">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">성함</label>
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="성함을 입력해주세요" className="w-full px-4 py-3 border rounded focus:outline-none focus:border-secondary" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">회사명</label>
              <input required name="company" value={formData.company} onChange={handleChange} placeholder="회사명을 입력해주세요" className="w-full px-4 py-3 border rounded focus:outline-none focus:border-secondary" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">이메일 주소</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" className="w-full px-4 py-3 border rounded focus:outline-none focus:border-secondary" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">연락처</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="010-0000-0000" className="w-full px-4 py-3 border rounded focus:outline-none focus:border-secondary" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">문의 내용</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="상담받으실 내용을 상세히 적어주세요" className="w-full px-4 py-3 border rounded focus:outline-none focus:border-secondary" />
            </div>
            <div className="flex gap-4">
              <button type="submit" disabled={isSubmitting} className="bg-secondary text-white px-8 py-3 rounded font-bold hover:bg-[#004f9b] transition-colors disabled:bg-gray-400">
                {isSubmitting ? '전송 중...' : '문의하기 접수'}
              </button>
              <button type="button" onClick={() => setIsFormVisible(false)} className="border border-outline px-6 py-3 rounded text-on-surface-muted hover:bg-surface-low transition-colors">
                취소
              </button>
            </div>
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
