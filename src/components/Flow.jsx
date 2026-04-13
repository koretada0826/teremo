import { useEffect, useRef, useState } from 'react';

const flowSteps = [
  {
    num: 'STEP 01',
    title: '無料相談（10〜15分）',
    desc: '現状の営業体制や課題をヒアリング。テレモが合うかどうか正直にお伝えします。',
  },
  {
    num: 'STEP 02',
    title: 'ご提案・お見積り',
    desc: 'ターゲットリスト・スクリプト・KPIを設計。ご納得いただけた場合のみ契約へ。',
  },
  {
    num: 'STEP 03',
    title: 'コール開始',
    desc: '契約後最短5営業日でコール開始。専任チームが月間4,700コールを実行します。',
  },
  {
    num: 'STEP 04',
    title: 'レポート・改善',
    desc: '全コールログをリアルタイム共有。データをもとにスクリプトやリストを継続改善。',
  },
];

export default function Flow() {
  const [activeSteps, setActiveSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.stepIndex);
            setActiveSteps((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index].sort((a, b) => a - b);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -5% 0px' }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="flow" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3 text-center">
          ご利用の流れ
        </p>
        <h2 className="fade-in text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em] mb-10 text-center">
          最短5営業日でコール開始
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* PC: horizontal timeline line */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-[2px] bg-[#e5e5e5]">
            <div
              className="absolute top-0 left-0 h-full bg-[#f55f00] transition-all duration-700 ease-out"
              style={{
                width:
                  activeSteps.length === 0
                    ? '0%'
                    : `${((Math.max(...activeSteps)) / (flowSteps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Mobile: vertical timeline line */}
          <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[15px] w-[2px] bg-[#e5e5e5]">
            <div
              className="absolute top-0 left-0 w-full bg-[#f55f00] transition-all duration-700 ease-out"
              style={{
                height:
                  activeSteps.length === 0
                    ? '0%'
                    : `${((Math.max(...activeSteps)) / (flowSteps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4">
            {flowSteps.map((s, i) => {
              const isActive = activeSteps.includes(i);
              return (
                <div
                  key={i}
                  ref={(el) => (stepRefs.current[i] = el)}
                  data-step-index={i}
                  className="relative pl-10 lg:pl-0 py-5 lg:py-0"
                >
                  {/* Dot */}
                  <div
                    className={`
                      absolute lg:relative
                      left-[7px] lg:left-auto top-[28px] lg:top-auto
                      w-[18px] h-[18px] rounded-full border-[3px]
                      lg:mx-auto lg:mb-5
                      transition-all duration-500 ease-out
                      ${isActive
                        ? 'bg-[#f55f00] border-[#f55f00] scale-110'
                        : 'bg-white border-[#ccc] scale-100'
                      }
                    `}
                  />

                  {/* Card */}
                  <div
                    className={`
                      bg-[#f7f7f7] rounded-[16px] p-6
                      transition-all duration-500 ease-out
                      ${isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-40 translate-y-2'
                      }
                    `}
                  >
                    <p className="text-[11px] text-[#f55f00] font-bold tracking-[0.1em] mb-3">
                      {s.num}
                    </p>
                    <p className="text-[16px] font-bold text-black mb-2 leading-[1.4]">
                      {s.title}
                    </p>
                    <p className="text-[12px] text-[#4d4d4d] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fade-in text-center mt-10">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
