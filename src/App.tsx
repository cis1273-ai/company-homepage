import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Building2,
  FileText,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans min-h-screen text-on-surface bg-background">
      
      {/* 👑 1. 가로로 천천히 흐르는 얇은 띠 배너 구역 */}
      <div className="w-full bg-primary text-on-primary py-2 text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap border-b border-outline/20">
        <div className="inline-block animate-[marquee_30s_linear_infinite] pl-[100%] hover:[animation-play-state:paused] cursor-pointer">
          <span className="mx-8">🎯 조직 및 인적자원관리 전략 분야 25년 베테랑</span>
          <span className="mx-8">|</span>
          <span className="mx-8">💼 총 150여 건 이상의 대형 프로젝트 성공적 완수 (공공 108건 / 민간 42건)</span>
          <span className="mx-8">|</span>
          <span className="mx-8">📚 네모파트너즈(Nemo Partners) 이사 역임 및 전문 서적 저술</span>
          <span className="mx-8">|</span>
          <span className="mx-8">🎯 조직 및 인적자원관리 전략 분야 25년 베테랑</span>
          <span className="mx-8">|</span>
          <span className="mx-8">💼 총 150여 건 이상의 대형 프로젝트 성공적 완수 (공공 108건 / 민간 42건)</span>
          <span className="mx-8">|</span>
          <span className="mx-8">📚 네모파트너즈(Nemo Partners) 이사 역임 및 전문 서적 저술</span>
        </div>
      </div>

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

// ==========================================
// 여기서부터는 홈페이지를 구성하는 개별 구역들입니다.
// ==========================================

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline/40 bg-background/95 backdrop-blur px-4 md:px-6">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-black tracking-tight text-primary flex items-center gap-2">
            <Building2 className="text-secondary" size={24} />
            <span>엘레브앤컴퍼니 <span className="text-xs font-medium text-on-surface-muted block md:inline md:ml-1">HR 컨설팅</span></span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-on-surface-muted">
          <a href="#services" className="hover:text-primary transition">주요서비스</a>
          <a href="#stats" className="hover:text-primary transition">주요실적</a>
          <a href="#profile" className="hover:text-primary transition">대표소개</a>
          <a href="#contact" className="hover:text-primary transition">문의하기</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-24 md:py-32 px-4 md:px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary mb-6">
          Organization & HR Consulting Firm
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-[1.15]">
          조직의 잠재력을 깨우는 <br className="hidden sm:inline" />
          <span className="text-primary">인사·조직 전략 파트너</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-on-surface-muted leading-relaxed break-keep">
          25년의 전문성과 150여 건의 성공적인 프로젝트 수행 경험을 바탕으로, 공공기관과 민간기업의 지속 가능한 성장을 위한 맞춤형 HR 솔루션을 제공합니다.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-on-primary shadow transition hover:bg-primary-hover">
            무료 상담 신청하기
          </a>
          <a href="#services" className="inline-flex h-11 items-center justify-center rounded-lg border border-outline px-6 text-sm font-medium text-on-surface shadow-sm transition hover:bg-surface-low">
            서비스 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}

function GreetingSection() {
  return (
    <section className="py-20 bg-surface px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-8">CEO 메시지</h2>
        <div className="space-y-6 text-on-surface-muted text-base md:text-lg leading-relaxed break-keep font-normal">
          <p>
            안녕하십니까? 엘레브앤컴퍼니 대표컨설턴트 전인식입니다.
          </p>
          <p>
            오늘날의 경영 환경은 그 어느 때보다 예측 불가능하며 빠르게 변화하고 있습니다. 이러한 변화의 소용돌이 속에서 조직이 생존하고 나아가 지속 가능한 경쟁 우위를 확보하기 위한 유일한 열쇠는 바로 <strong>'사람(Human)'</strong>과 <strong>'조직(Organization)'</strong>에 있습니다.
          </p>
          <p>
            엘레브앤컴퍼니는 단순한 이론적 컨설팅이나 유행하는 제도의 맹목적 도입을 지양합니다. 고객사가 직면한 고유한 비즈니스 맥락과 조직 문화를 깊이 있게 분석하여, 현업에서 실제로 작동하고 구성원들이 공감할 수 있는 <strong>'실행 중심의 맞춤형 솔루션'</strong>을 설계합니다.
          </p>
          <p>
            지난 25년간 공공과 민간을 아우르는 150여 건의 대형 프로젝트를 통해 검증된 최고 수준의 전략적 통찰력과 정교한 방법론을 바탕으로, 귀사의 가장 든든한 성장의 동반자가 될 것을 약속드립니다. 감사합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const values = [
    { title: "전문성 (Professionalism)", desc: "25년간 축적된 심도 있는 지식과 공공·민간을 아우르는 풍부한 실무 경험을 바탕으로 최고 수준의 산출물을 보장합니다." },
    { title: "맞춤화 (Customization)", desc: "기성 솔루션을 복사해 붙여넣지 않습니다. 귀사 고유의 환경과 당면 과제에 완벽히 정렬된 독창적 대안을 제시합니다." },
    { title: "실행력 (Actionability)", desc: "보고서로만 존재하는 전략은 가치가 없습니다. 제도 도입 이후의 변화 관리와 실제 현업 적용 가능성을 최우선으로 고려합니다." }
  ];

  return (
    <section className="py-20 bg-background px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-12">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-6 bg-surface-low rounded-xl border border-outline/50 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-4">{i+1}</div>
              <h3 className="text-xl font-bold text-on-surface mb-2">{v.title}</h3>
              <p className
