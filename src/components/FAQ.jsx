import { useState } from 'react';

const faqs = [
  {
    q: '本当に月間4,700コールされますか？',
    a: 'はい、4,700コールを保証しています。毎日のコール数はリアルタイムで共有されるため、進捗をいつでも確認できます。万が一、月間コール数が保証に満たなかった場合は翌月に繰り越し対応いたします。',
  },
  {
    q: 'どんな業種に対応していますか？',
    a: 'BtoB商材であれば基本的にすべての業種に対応可能です。IT・SaaS、人材、不動産、製造業、コンサルティングなど幅広い実績があります。初回のヒアリングで貴社の商材に合ったアプローチを設計します。',
  },
  {
    q: 'スクリプトは誰が作りますか？',
    a: '営業経験15年以上のメンバーが、貴社の商材・ターゲットに合わせてスクリプトを設計します。作成費用は月額料金に含まれており、運用データをもとに継続的に改善していきます。',
  },
  {
    q: '最低契約期間はありますか？',
    a: 'ありません。1ヶ月単位でのご契約が可能で、いつでも解約できます。「まず1ヶ月試してみたい」というご利用も歓迎しています。',
  },
  {
    q: '初期費用はかかりますか？',
    a: '初期費用は一切かかりません。スクリプト設計・ターゲットリスト作成・専任担当者の配置まで、すべて月額14万円に含まれています。',
  },
  {
    q: 'コールの品質はどう担保されていますか？',
    a: '全コールの録音データを共有しているため、品質をいつでも確認いただけます。また、専任の担当者がスクリプトの遵守状況をチェックし、定期的にフィードバックと改善を行っています。',
  },
  {
    q: 'どのくらいで成果が出ますか？',
    a: '業種やターゲットによりますが、多くの場合1〜2週間で最初のアポイントが発生しています。月間4,700コールの実行量があるため、短期間でPDCAを回すことが可能です。',
  },
  {
    q: '途中でスクリプトやターゲットの変更はできますか？',
    a: 'はい、いつでも変更可能です。コールデータの分析結果をもとに、スクリプトやターゲットリストの最適化を提案させていただきます。追加費用はかかりません。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[13px] sm:text-[14px] text-[#f55f00] tracking-[0.2em] font-bold mb-3 text-center">
          FAQ
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center">
          よくある<span className="text-[#f55f00]">ご質問</span>
        </h2>
        <p className="fade-in text-[15px] sm:text-[16px] text-[#4d4d4d] text-center mb-12">
          テレモについて、よくいただくご質問をまとめました。
        </p>

        <div className="max-w-[860px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-in border-b border-[#eee]"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none"
              >
                <div className="flex items-start gap-3 sm:gap-4 pr-4">
                  <span className="text-[15px] sm:text-[16px] font-black text-[#f55f00] mt-0.5 shrink-0">Q.</span>
                  <span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">{faq.q}</span>
                </div>
                <span
                  className="text-[20px] text-[#f55f00] shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0">
                  <span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
                  <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in text-center mt-12">
          <p className="text-[14px] text-[#999] mb-4">その他のご質問は、お気軽にお問い合わせください。</p>
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}
