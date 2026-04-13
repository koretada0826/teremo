import { useState, useEffect } from 'react';

export default function ScrollCounter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-out"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="bg-black py-3 px-5">
        <div className="max-w-[1240px] mx-auto flex items-center justify-center gap-8 sm:gap-16">
          {[
            { num: '4,700', unit: 'コール/月' },
            { num: '100%', unit: 'ログ開示' },
            { num: '14万円', unit: '/月' },
          ].map((item, i) => (
            <div key={i} className="flex items-baseline gap-1.5">
              <span
                className="text-[18px] sm:text-[22px] font-black text-[#f55f00] leading-none"
                style={{ fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif' }}
              >
                {item.num}
              </span>
              <span className="text-[10px] sm:text-[12px] text-white/70 font-bold">
                {item.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
