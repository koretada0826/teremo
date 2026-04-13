import { useState, useEffect, useRef } from 'react';

function PriceCountUp() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const target = 14;
          const duration = 1200;
          const steps = 28;
          let current = 0;
          const timer = setInterval(() => {
            current++;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}

export default function Pricing() {
  const checks = [
    '月間4,700コール保証',
    '全コールログ開示',
    '初期費用なし',
    '最低契約期間なし',
    '専任担当者配置',
    'スクリプト設計込み',
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="fade-in text-[13px] sm:text-[14px] text-[#f55f00] tracking-[0.2em] font-bold mb-3">料金プラン</p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-12">
          シンプルに、<span className="text-[#f55f00]">1プラン</span>だけ。
        </h2>

        <div className="fade-in bg-white border-2 border-[#e5e5e5] rounded-[24px] p-8 sm:p-12 lg:p-16 max-w-[960px] mx-auto">
          {/* === 価格パネル (シンプル/HP統一) === */}
          <div className="relative max-w-[760px] mx-auto mb-10 text-center">
            {/* SALES POINT風ラベル + ライン */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] sm:text-[12px] font-black text-[#f55f00] tracking-[0.3em]">
                PRICING
              </span>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-[#f55f00]/50 to-transparent" />
              <span className="text-[11px] sm:text-[12px] font-bold text-[#999] tracking-[0.2em]">
                月額固定／税別
              </span>
            </div>

            {/* 価格本体 - 中央配置 */}
            <div className="flex items-end justify-center gap-3 sm:gap-5 mb-2">
              <span
                className="text-[100px] sm:text-[130px] lg:text-[160px] font-black leading-[0.85] text-black tracking-tight relative"
                style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
              >
                <PriceCountUp />
              </span>
              <div className="flex flex-col items-start pb-3 sm:pb-4">
                <span
                  className="text-[34px] sm:text-[46px] lg:text-[54px] font-black leading-none text-[#f55f00]"
                  style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                >
                  万円
                </span>
                <span className="text-[12px] sm:text-[13px] font-bold text-[#999] tracking-[0.2em] mt-2">
                  /&nbsp;月
                </span>
              </div>
            </div>

            {/* お洒落な装飾線 */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#f55f00]" />
              <div className="w-[8px] h-[8px] rounded-full border-2 border-[#f55f00]" />
              <div className="h-[2px] w-[100px] bg-[#f55f00]" />
              <div className="w-[8px] h-[8px] rounded-full border-2 border-[#f55f00]" />
              <div className="h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#f55f00]" />
            </div>

            {/* 他社比較 - 価格の下に中央配置 */}
            <div className="hidden sm:flex items-center justify-center gap-4 mb-4">
              <p className="text-[16px] sm:text-[18px] font-bold text-[#bbb] line-through leading-none">
                他社平均 30〜80万円
              </p>
              <span className="text-[#f55f00] text-[16px] leading-none">→</span>
              <p className="text-[13px] font-black text-black tracking-[0.1em] leading-none">
                約&nbsp;<span className="text-[#f55f00] text-[18px]">1/4</span>&nbsp;のコスト
              </p>
            </div>

            {/* 下部アクセント（SALES POINTカード共通グラデーション線） */}
            <div className="h-[3px] bg-gradient-to-r from-[#f55f00] via-[#f55f00]/40 to-transparent mb-3" />

            {/* 補足注釈 */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <span className="text-[11px] sm:text-[12px] text-[#666]">
                <span className="text-[#f55f00] mr-1">/</span>4,700 コール込
              </span>
              <span className="text-[11px] sm:text-[12px] text-[#666]">
                <span className="text-[#f55f00] mr-1">/</span>初期費用 0 円
              </span>
              <span className="text-[11px] sm:text-[12px] text-[#666]">
                <span className="text-[#f55f00] mr-1">/</span>最低契約期間なし
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-[720px] mx-auto text-left mb-10">
            {checks.map((item, i) => (
              <div
                key={i}
                className="fade-in flex items-center gap-3 sm:gap-4 bg-[#fafafa] border border-[#eee] rounded-[12px] px-5 py-4 sm:py-5"
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f55f00] text-white text-[14px] sm:text-[16px] flex items-center justify-center shrink-0 font-black">
                  ✓
                </span>
                <span className="text-[16px] sm:text-[18px] text-black font-bold">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#fef1e7] rounded-[14px] px-6 py-5 sm:px-8 sm:py-6 mb-10 max-w-[720px] mx-auto">
            <p className="text-[15px] sm:text-[18px] text-[#f55f00] font-black leading-[1.5]">
              営業1人を雇う費用（月50〜80万円）の約1/4。
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#4d4d4d] mt-2 leading-[1.7]">
              採用・教育・管理コストも一切不要です。
            </p>
          </div>

          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
