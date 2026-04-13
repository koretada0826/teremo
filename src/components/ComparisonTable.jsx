const rows = [
  { item: '月額費用',   a: '30〜50万円',      b: '50〜80万円',      telemo: '14万円' },
  { item: 'コール数',   a: '非公開',          b: '月2,000コール〜', telemo: '4,700コール保証' },
  { item: 'ログ開示',   a: 'サマリーのみ',     b: '一部のみ',        telemo: '全コール100%開示' },
  { item: '初期費用',   a: '10〜20万円',      b: '20〜30万円',      telemo: '0円' },
  { item: '契約期間',   a: '3ヶ月縛り',       b: '6ヶ月縛り',       telemo: '縛りなし' },
  { item: 'レポート',   a: '月1回PDFのみ',    b: '月1回+面談',      telemo: 'リアルタイム共有' },
  { item: 'スクリプト', a: '別途10万円〜',     b: '別途20万円〜',    telemo: '無料で設計込み' },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[13px] sm:text-[14px] text-[#f55f00] tracking-[0.2em] font-bold mb-3 text-center">
          COMPARISON
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center">
          テレモと<span className="text-[#f55f00]">他社</span>の違い
        </h2>
        <p className="fade-in text-[15px] sm:text-[16px] text-[#4d4d4d] text-center mb-12">
          同じ「営業代行」でも、中身はまったく違います。
        </p>

        <div className="fade-in overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            {/* ヘッダー */}
            <thead>
              <tr>
                <th className="bg-[#fafafa] border border-[#e5e5e5] p-4 sm:p-5 text-[14px] sm:text-[16px] font-bold text-[#999] text-center w-[16%]">
                </th>
                <th className="bg-white border border-[#e5e5e5] p-4 sm:p-5 text-center w-[24%]">
                  <p className="text-[11px] text-[#bbb] tracking-[0.15em] font-bold mb-1">COMPANY</p>
                  <p className="text-[18px] sm:text-[22px] font-black text-[#666]">A社</p>
                </th>
                <th className="bg-white border border-[#e5e5e5] p-4 sm:p-5 text-center w-[24%]">
                  <p className="text-[11px] text-[#bbb] tracking-[0.15em] font-bold mb-1">COMPANY</p>
                  <p className="text-[18px] sm:text-[22px] font-black text-[#666]">B社</p>
                </th>
                <th className="bg-[#f55f00] border border-[#f55f00] p-4 sm:p-5 text-center w-[36%]">
                  <p className="bg-black text-white text-[10px] font-black tracking-[0.2em] px-4 py-1.5 inline-block mb-2">RECOMMEND</p>
                  <p className="text-[11px] text-white/70 tracking-[0.15em] font-bold mb-1">OUR SERVICE</p>
                  <p className="text-[20px] sm:text-[24px] font-black text-white comparison-telemo-pulse">テレモ</p>
                </th>
              </tr>
            </thead>

            {/* ボディ */}
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="bg-[#fafafa] border border-[#e5e5e5] p-4 sm:p-5 text-center">
                    <span className="text-[14px] sm:text-[16px] font-black text-black">{r.item}</span>
                  </td>
                  <td className="bg-white border border-[#e5e5e5] p-4 sm:p-5 text-center">
                    <span className="text-[13px] sm:text-[15px] text-[#999]">{r.a}</span>
                  </td>
                  <td className="bg-white border border-[#e5e5e5] p-4 sm:p-5 text-center">
                    <span className="text-[13px] sm:text-[15px] text-[#999]">{r.b}</span>
                  </td>
                  <td className="bg-[#fff8f2] border border-[#ffd9bd] p-4 sm:p-5 text-center">
                    <span className="text-[14px] sm:text-[16px] text-[#f55f00] font-black">{r.telemo}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] text-[#999] mt-3 text-center">※ 他社の数値は公開情報および業界平均から算出</p>

        <div className="fade-in text-center mt-10">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
