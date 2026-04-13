const points = [
  { title: '現状の営業体制の診断', desc: '今のコール数・接続率・アポ率が適正かどうかをプロが判断します。' },
  { title: 'テレモで改善できるかの見極め', desc: '貴社の商材やターゲットに合うかどうか、正直にお伝えします。' },
  { title: '具体的な提案と見積もり', desc: 'ターゲットリスト・スクリプト・KPIの設計案をその場でご提示します。' },
];

export default function ConsultationCTA() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#1a1a1a] relative overflow-hidden">
      {/* オレンジグロー */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{ background: 'radial-gradient(ellipse at 80% 30%, #f55f00 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* 左: コピー */}
          <div>
            <p className="fade-in text-[13px] text-[#f55f00] tracking-[0.2em] font-bold mb-4">
              無料相談
            </p>
            <h2 className="fade-in text-[28px] sm:text-[36px] lg:text-[42px] font-black text-white leading-[1.3] mb-5">
              まずは10〜15分だけ、
              <br />
              話しませんか？
            </h2>
            <p className="fade-in text-[15px] sm:text-[17px] text-white/70 leading-[1.8] mb-8">
              売り込みは一切しません。
              <br />
              貴社の現状をお聞きして、テレモが合うかどうかを正直にお伝えします。
              <br />
              合わなければ、それでOKです。
            </p>
            <div className="fade-in flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center bg-[#f55f00] text-white text-[16px] sm:text-[18px] font-bold h-[60px] sm:h-[68px] px-10 sm:px-14 rounded-[96px] no-underline hover:bg-[#ca4700] transition-colors"
              >
                無料相談を予約する
              </a>
              <a
                href="#document-request"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white text-[14px] sm:text-[16px] font-bold h-[60px] sm:h-[68px] px-8 sm:px-12 rounded-[96px] no-underline hover:bg-white/10 transition-colors"
              >
                まずは資料だけ見る
              </a>
            </div>
          </div>

          {/* 右: 無料相談で聞けること */}
          <div className="fade-in">
            <div className="bg-white/[0.06] border border-white/10 rounded-none p-6 sm:p-8">
              <p className="text-[14px] sm:text-[15px] text-white font-bold mb-6">
                無料相談で聞けること
              </p>
              <div className="space-y-0">
                {points.map((p, i) => (
                  <div key={i} className={`flex gap-4 items-start py-4 ${i < points.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <span className="text-[14px] font-black text-[#f55f00] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-[15px] sm:text-[16px] text-white font-bold mb-1">{p.title}</p>
                      <p className="text-[13px] sm:text-[14px] text-white/50 leading-[1.7]">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex flex-wrap gap-4 text-[13px] text-white/50">
                  <span>所要時間：10〜15分</span>
                  <span>費用：無料</span>
                  <span>売り込み：なし</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
