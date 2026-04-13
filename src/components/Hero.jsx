import { useState, useEffect, useRef } from 'react';

const headingStyle = {
  fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif',
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
};

const lines = [
  { text: '結果が出ない', color: 'text-black' },
  { text: '営業代行には', color: 'text-black' },
  { text: 'もうお金を払わなくて良い', color: 'text-[#f55f00]' },
];

function useTypewriter(lines, charDelay = 80, lineDelay = 400) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || done) return;

    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    if (charIndex < lines[lineIndex].text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), charDelay);
      return () => clearTimeout(timer);
    } else {
      // Line complete, pause then move to next
      if (lineIndex < lines.length - 1) {
        const timer = setTimeout(() => {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }, lineDelay);
        return () => clearTimeout(timer);
      } else {
        setDone(true);
      }
    }
  }, [lineIndex, charIndex, started, done, lines, charDelay, lineDelay]);

  const getLineText = (i) => {
    if (i < lineIndex) return lines[i].text;
    if (i === lineIndex) return lines[i].text.slice(0, charIndex);
    return '';
  };

  const isTypingLine = (i) => !done && i === lineIndex;

  return { getLineText, isTypingLine, done, start: () => setStarted(true), started };
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const typewriter = useTypewriter(lines, 70, 350);

  // Start typewriter when hero section becomes visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !typewriter.started) {
          // Small delay so user sees it start
          setTimeout(() => typewriter.start(), 600);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [typewriter.started]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pt-[140px] sm:pt-[180px] pb-10 sm:pb-14 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-following glow - hidden on mobile */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245,95,0,0.08), transparent 60%)`,
        }}
      />

      {/* Subtle dot pattern to fill white space */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top-right orange gradient glow */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(245,95,0,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 lg:gap-6 items-center">
          {/* Left column */}
          <div>
            {/* 信頼バッジ - 大きく目立たせる */}
            <p className="fade-in text-[18px] sm:text-[20px] text-[#f55f00] tracking-[0.08em] font-bold mb-6 sm:mb-8">
              営業経験15年以上のプロが設計
            </p>

            {/* メインコピー - タイプライター演出 */}
            <h1 className="fade-in mb-10 sm:mb-12 hero-heading">
              {lines.map((line, i) => (
                <span
                  key={i}
                  className={`hero-line ${line.color}`}
                  style={{ ...headingStyle, fontSize: 'clamp(28px, 5.5vw, 48px)' }}
                >
                  {typewriter.getLineText(i)}
                  {typewriter.isTypingLine(i) && (
                    <span
                      className="inline-block w-[3px] h-[0.9em] bg-current ml-[2px] align-middle"
                      style={{
                        animation: 'cursor-blink 0.7s steps(1) infinite',
                      }}
                    />
                  )}
                  {/* Keep empty lines taking space with invisible char */}
                  {!typewriter.getLineText(i) && '\u200B'}
                </span>
              ))}
            </h1>

            {/* CTAボタン */}
            <div className="fade-in flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#document-request"
                className="hero-cta-black inline-flex items-center justify-center bg-black text-white text-[17px] sm:text-[19px] font-bold h-[64px] sm:h-[74px] px-10 sm:px-16 rounded-[96px] no-underline tracking-[0.03em] min-w-[220px]"
              >
                資料請求
              </a>
              <a
                href="#contact-form"
                className="hero-cta-orange inline-flex items-center justify-center bg-[#f55f00] text-white text-[17px] sm:text-[19px] font-bold h-[64px] sm:h-[74px] px-10 sm:px-16 rounded-[96px] no-underline tracking-[0.03em] min-w-[220px]"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Right column - Dashboard visual */}
          <div className="fade-in relative hidden lg:block">
            <div className="absolute -top-8 -right-8 w-[108%] h-[108%] bg-[#f55f00] rounded-[24px] -rotate-2" />

            <div className="relative bg-white rounded-[16px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-7 z-10">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#eee]">
                <span className="text-[18px] font-black text-black tracking-[0.02em]">テレモ</span>
                <span className="text-[12px] text-[#999]">ダッシュボード</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-[#f7f7f7] rounded-[12px] p-3.5 text-center">
                  <p className="text-[24px] font-black text-black leading-none">4,700</p>
                  <p className="text-[10px] text-[#999] mt-1">コール数/月</p>
                </div>
                <div className="bg-[#f7f7f7] rounded-[12px] p-3.5 text-center">
                  <p className="text-[24px] font-black text-[#f55f00] leading-none">100%</p>
                  <p className="text-[10px] text-[#999] mt-1">ログ開示率</p>
                </div>
                <div className="bg-[#f7f7f7] rounded-[12px] p-3.5 text-center">
                  <p className="text-[24px] font-black text-black leading-none">14<span className="text-[13px]">万</span></p>
                  <p className="text-[10px] text-[#999] mt-1">月額費用</p>
                </div>
              </div>

              <div className="space-y-0">
                {[
                  { time: '09:15', status: '接続', statusBg: 'bg-[#f55f00]', statusText: 'text-white', name: '株式会社○○ 営業企画部', dur: '3:42' },
                  { time: '09:22', status: '不在', statusBg: 'bg-[#eee]', statusText: 'text-[#999]', name: '△△株式会社 総務部', dur: '0:15' },
                  { time: '09:28', status: '接続', statusBg: 'bg-[#f55f00]', statusText: 'text-white', name: '□□テクノロジー 経営企画', dur: '5:18' },
                  { time: '09:36', status: 'アポ', statusBg: 'bg-[#22c55e]', statusText: 'text-white', name: '◎◎商事 代表取締役', dur: '4:55' },
                ].map((row, i, arr) => (
                  <div key={i} className={`flex items-center gap-3 py-2.5 ${i < arr.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}>
                    <span className="text-[11px] text-[#999] w-[50px] shrink-0">{row.time}</span>
                    <span className={`text-[10px] ${row.statusBg} ${row.statusText} px-2 py-0.5 rounded-full font-bold shrink-0`}>{row.status}</span>
                    <span className="text-[12px] text-black font-medium truncate">{row.name}</span>
                    <span className="text-[11px] text-[#999] ml-auto shrink-0">{row.dur}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] px-5 py-3 z-20">
              <p className="text-[11px] text-[#999] mb-0.5">全コール録音を確認可能</p>
              <p className="text-[16px] font-black text-[#f55f00]">透明性 100%</p>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="fade-in lg:hidden mt-10 grid grid-cols-3 gap-3">
          <div className="bg-[#f7f7f7] rounded-[12px] p-4 text-center">
            <p className="text-[24px] font-black text-black leading-none">4,700</p>
            <p className="text-[10px] text-[#999] mt-1">コール/月</p>
          </div>
          <div className="bg-[#f7f7f7] rounded-[12px] p-4 text-center">
            <p className="text-[24px] font-black text-[#f55f00] leading-none">100%</p>
            <p className="text-[10px] text-[#999] mt-1">ログ開示</p>
          </div>
          <div className="bg-[#f7f7f7] rounded-[12px] p-4 text-center">
            <p className="text-[24px] font-black text-black leading-none">14<span className="text-[12px]">万</span></p>
            <p className="text-[10px] text-[#999] mt-1">月額固定</p>
          </div>
        </div>

        <div className="fade-in mt-8 flex flex-wrap gap-4 sm:gap-6">
          {['初期費用なし', '最低契約期間なし', '全ログ開示'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#f55f00] text-white text-[10px] flex items-center justify-center shrink-0">✓</span>
              <span className="text-[15px] sm:text-[16px] text-[#333] font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
