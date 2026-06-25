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
      
      {/* 👑 1. 무조건 글자가 보이고 천천히 가로로 흐르는 배너 띠 (배경: 네이비 / 글자: 흰색) */}
      <div className="w-full bg-[#0a2540] py-2.5 overflow-hidden border-b border-white/10">
        <marquee className="text-white text-xs md:text-sm font-semibold tracking-wide" scrollamount="4" behavior="scroll" direction="left">
          <span className="mx-12">🎯 조직 및 인적자원관리 전략 분야 25년 베테랑</span>
          <span className="mx-12">|</span>
          <span className="mx-12">💼 총 150여 건 이상의 대형 프로젝트 성공적 완수 (공공 108건 / 민간 42건)</span>
          <span className="mx-12">|</span>
          <span className="mx-12">📚 네모파트너즈(Nemo Partners) 이사 역임 및 전문 서적 저술</span>
          <span className="mx-12">|</span>
          <span className="mx-12">🎯 조직 및 인적자원관리 전략 분야 25년 베테랑</span>
          <span className="mx-12">|</span>
          <span className="mx-12">💼 총 150여 건 이상의 대형 프로젝트 성공적 완수 (공공 108건 / 민간 42건)</span>
          <span className="mx-12">|</span>
          <span className="mx-12">📚 네모파트너즈(Nemo Partners) 이사 역임 및 전문 서적 저술</span>
        </marquee>
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
              <p className="text-on-surface-muted text-sm leading-relaxed break-keep">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessModelSection() {
  return (
    <section className="py-20 bg-surface px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-4">비즈니스 모델</h2>
        <p className="text-center text-on-surface-muted mb-12 max-w-2xl mx-auto text-sm md:text-base break-keep">
          조직의 라이프사이클 전반에 걸친 정밀 진단부터 실행 대안 설계, 제도 안착까지 통합적인 가치를 창출합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01. 진단 및 분석", title: "Diagnostic", desc: "조직 분석 및 직무 정밀 진단을 통해 비효율의 근본 원인을 식별합니다." },
            { step: "02. 전략 및 구조 설계", title: "Strategy & Design", desc: "중장기 비전과 정렬된 거버넌스 및 최적의 조직 구조를 도출합니다." },
            { step: "03. HR 인프라 고도화", title: "HR Infrastructure", desc: "직무·역량 중심의 평가, 보상, 경력개발 체계를 정교하게 설계합니다." },
            { step: "04. 변화관리 및 모니터링", title: "Change Management", desc: "새로운 제도의 안정적 현장 안착을 위한 가이드 및 교육을 지원합니다." }
          ].map((item, i) => (
            <div key={i} className="bg-background p-6 rounded-xl border border-outline/40 shadow-sm relative">
              <span className="text-xs font-bold text-secondary tracking-wider block mb-1">{item.step}</span>
              <h3 className="text-lg font-bold text-on-surface mb-1">{item.title}</h3>
              <p className="text-xs font-medium text-primary mb-3 uppercase tracking-wider">{item.title}</p>
              <p className="text-sm text-on-surface-muted leading-relaxed break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailedServicesSection() {
  const services = [
    {
      title: "조직 설계 및 정원 산정",
      items: ["중장기 경영전략 연계 조직구조 재설계", "직무 분석 기반 적정인력(Manpower Sizing) 산정", "공공기관 거버넌스 및 조직 정밀 진단", "프로세스 혁신(BPR) 연계 조직 설계"]
    },
    {
      title: "인사(HR) 시스템 구축",
      items: ["직무중심 인사제도(직무분석/직무평가) 수립", "역량 모델링 및 평가 시스템 고도화", "성과 기반의 보수(Total Rewards) 체계 설계", "임금피크제 및 구조조정 인사 전략 자문"]
    },
    {
      title: "성과관리 및 경영평가",
      items: ["KPI/BSC 기반의 전사 성과관리 체계 구축", "공공기관 내부 경영평가 지표 고도화 자문", "경영실적 보고서 작성 및 실사 대응 컨설팅", "평가 결과 연계 성과급 환류 시스템 설계"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background px-4 md:px-6 border-t border-outline">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-12">주요 서비스 구역</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-surface-low rounded-xl border border-outline/50 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-outline">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-on-surface-muted flex items-start gap-2 leading-relaxed break-keep">
                    <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 👑 2. 0부터 또르륵 올라가는 '숫자로 보는 신뢰' 카운트업 구역
function StatsClientsSection() {
  const [projectCount, setProjectCount] = useState(0);
  const [retentionRate, setRetentionRate] = useState(0);

  useEffect(() => {
    let projectStart = 0;
    const projectTarget = 150;
    const projectTimer = setInterval(() => {
      projectStart += 3;
      if (projectStart >= projectTarget) {
        setProjectCount(projectTarget);
        clearInterval(projectTimer);
      } else {
        setProjectCount(projectStart);
      }
    }, 20);

    let rateStart = 0;
    const rateTarget = 92;
    const rateTimer = setInterval(() => {
      rateStart += 2;
      if (rateStart >= rateTarget) {
        setRetentionRate(rateTarget);
        clearInterval(rateTimer);
      } else {
        setRetentionRate(rateStart);
      }
    }, 20);

    return () => {
      clearInterval(projectTimer);
      clearInterval(rateTimer);
    };
  }, []);

  return (
    <section id="stats" className="py-20 bg-surface border-t border-outline">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-2">숫자로 보는 신뢰</h2>
          <p className="text-on-surface-muted text-sm md:text-base">
            25년간 쌓아온 검증된 트랙 레코드와 파트너십의 결과입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          <div className="bg-surface-low p-8 rounded-xl border border-outline/40 shadow-sm transform transition hover:scale-105 duration-300">
            <p className="text-on-surface-muted font-medium text-base mb-2">누적 프로젝트 수행건수</p>
            <p className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
              {projectCount}<span className="text-3xl md:text-4xl text-secondary ml-1">+</span>
            </p>
            <p className="text-xs text-on-surface-muted mt-3">공공 부문 108건 및 민간 부문 42건 합산 기준</p>
          </div>

          <div className="bg-surface-low p-8 rounded-xl border border-outline/40 shadow-sm transform transition hover:scale-105 duration-300">
            <p className="text-on-surface-muted font-medium text-base mb-2">기존 고객 재계약률</p>
            <p className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
              {retentionRate}<span className="text-3xl md:text-4xl text-secondary ml-1">%</span>
            </p>
            <p className="text-xs text-on-surface-muted mt-3">지속적인 신뢰와 전략적 파트너십의 지표</p>
          </div>
        </div>

      </div>
    </section>
  );
}

// 👑 3. 모바일 화면 최적화 대표소개 구역
function ProfileSection() {
  return (
    <section id="profile" className="py-24 bg-background px-4 md:px-6 border-t border-outline">
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
                  네모파트너즈(Nemo Partners) 이사 직위 역임을 포함하여, 국내 경영 컨설팅 산업의 성장기부터 현재에 이르기까지 약 25년에 달하는 심도 있는 실무 경력과 사업적 통찰력을 보유하고 있습니다. 단순한 이론적 자문 수준을 넘어, 급변하는 경영 환경 속에서 조직의 중장기 비전과 실제 인사 실행 전략을 정밀하게 정렬시키는 핵심 의사결정 파트너로서 독보적인 입지를 확고히 해왔습니다.
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
                <h3 className="font-bold text-on-surface text-xl mb-4 text-primary">
                  심화 전문 영역 (Core Competencies)
                </h3>
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

function CTASection() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert("문의 전송에 실패했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface-low px-4 md:px-6 border-t border-outline">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-on-surface mb-4">온라인 무료 상담 문의</h2>
        <p className="text-on-surface-muted mb-8 text-sm md:text-base break-keep">
          조직 진단, 정원 산정, 인사제도 수립 등 당면한 HR 이슈에 대해 25년 베테랑 컨설턴트가 직접 초기 방향성을 무료로 자문해 드립니다.
        </p>

        {!isFormVisible ? (
          <button onClick={() => setIsFormVisible(true)} className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-on-primary shadow-lg transition hover:bg-primary-hover transform hover:scale-105 duration-200">
            상담 신청서 작성하기
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-background p-6 md:p-8 rounded-xl border border-outline shadow-xl text-left space-y-5 animate-fade-in">
            {isSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="mx-auto text-secondary" size={48} />
                <h3 className="text-xl font-bold text-on-surface">문의가 성공적으로 접수되었습니다.</h3>
                <p className="text-sm text-on-surface-muted break-keep">확인 후 대표 컨설턴트가 영업일 기준 48시간 이내에 직접 연락드리겠습니다.</p>
                <button type="button" onClick={() => setIsSuccess(false)} className="text-sm text-primary font-semibold underline mt-4">새 문의 작성하기</button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-muted mb-1">성함 *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full rounded-lg border border-outline/60 bg-surface-low px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-muted mb-1">회사명 / 기관명 *</label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full rounded-lg border border-outline/60 bg-surface-low px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-muted mb-1">이메일 주소 *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full rounded-lg border border-outline/60 bg-surface-low px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-muted mb-1">연락처 *</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full rounded-lg border border-outline/60 bg-surface-low px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-muted mb-1">문의 내용 (주요 HR 이슈 및 고민 사항) *</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full rounded-lg border border-outline/60 bg-surface-low px-3 py-2 text-sm focus:border-primary focus:outline-none resize-none"></textarea>
                </div>
                <div className="flex gap-3 justify-end pt-2">
                  <button type="button" onClick={() => setIsFormVisible(false)} className="px-4 py-2 text-sm font-medium text-on-surface-muted border border-outline rounded-lg hover:bg-surface-low">취소</button>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-2 text-sm font-medium text-on-primary bg-primary rounded-lg hover:bg-primary-hover disabled:opacity-50">{isSubmitting ? "전송 중..." : "상담 신청하기"}</button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-12 px-4 md:px-6 border-t border-outline/20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-on-primary/80">
        <div className="space-y-2">
          <p className="font-bold text-base text-on-primary">엘레브앤컴퍼니 (Elev앤Company)</p>
          <p>대표컨설턴트 : 전인식 | 이메일 : cis1273@gmail.com</p>
          <p className="text-xs text-on-primary/60">© 2026 Elev앤Company. All rights reserved.</p>
        </div>
        <div className="flex gap-4 text-xs">
          <a href="#services" className="hover:underline">주요서비스</a>
          <a href="#profile" className="hover:underline">대표소개</a>
          <a href="#contact" className="hover:underline">문의하기</a>
        </div>
      </div>
    </footer>
  );
}
