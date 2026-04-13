import { useState, useEffect, useRef } from 'react';
import AchievementsAwards from './AchievementsAwards';

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatted = count.toLocaleString();
  return <span ref={ref}>{formatted}{suffix}</span>;
}

const painPoints = [
  {
    num: '01',
    label: '成果ゼロなのに、\nお金だけ取られた',
    detail: '月額30万円以上を払い続けたのに、\nアポは1件もなし。\n「もう少し続ければ成果が出ます」\nと言われ続けた。',
    solution: 'テレモは月間4,700コールを保証。何件かけて、何件つながって、何件アポが取れたか。すべての数字が見えるから、「続ける価値があるか」を自分で判断できます。',
    conclusion: 'だから、続けるかどうかを"感覚"ではなく判断できます',
    extras: [
      'コール数→接続数→商談数まで全て可視化',
      '無駄なコストがどこで発生しているか明確',
      '続けるべきか、やめるべきか即判断できる',
    ],
    checks: [
      'コール数・接続数・アポ数を毎日共有',
      '実行量が見えるから、成果の判断が可能',
      '「本当にやっているのか」の不安がゼロに',
    ],
    img: '/img/pain-01.jpg',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #2d1a08 50%, #1a1208 100%)',
  },
  {
    num: '02',
    label: '何をしてるか、\nまったくわからない',
    detail: 'レポートは月1回の簡単なPDFだけ。\nどこに何件かけたのか、\n何を話したのか、\nすべてがブラックボックス。',
    solution: 'テレモは全コールのログと録音を100%開示。いつ・誰に・何を話したか、リアルタイムで確認できます。「何やってるかわからない」は、もう起きません。',
    conclusion: 'だから、「何をしているか」が手に取るようにわかります',
    extras: [
      'いつ・誰に・何を話したかがすべて残る',
      '営業の質を自分の目で確認できる',
      '外注先の動きが100%透明になる',
    ],
    checks: [
      '全コールの録音データをそのまま共有',
      'コール先・通話時間・結果を一覧で確認',
      'ブラックボックスを完全に排除',
    ],
    img: '/img/pain-02.jpg',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0d1528 50%, #0a0a1a 100%)',
  },
  {
    num: '03',
    label: '報告がざっくりすぎて\n信用できない',
    detail: '「今月は〇件コールしました」\nだけの報告。\n接続率も通話内容も不明で、\n本当にやっているのか疑問だった。',
    solution: 'テレモはコール時刻・相手先・通話時間・結果をすべて記録。接続率・アポ率もリアルタイムで共有。数字で語るから、信頼できます。',
    conclusion: 'だから、報告を"信じる"必要がなくなります',
    extras: [
      '数字がすべてを語るから、信頼の根拠がある',
      '感覚ではなくデータで判断できる',
      '報告の曖昧さに悩むことがなくなる',
    ],
    checks: [
      '時刻・相手先・通話時間・結果を全記録',
      '接続率・アポ率を自動集計して共有',
      '曖昧な報告が一切なくなる仕組み',
    ],
    img: '/img/pain-03.jpg',
    gradient: 'linear-gradient(135deg, #1a1410 0%, #281c10 50%, #1a1410 100%)',
  },
  {
    num: '04',
    label: '辞めたいのに、\n辞められない',
    detail: '最低契約期間6ヶ月。\n成果が出なくても解約できず、\n無駄なコストを\n払い続けるしかなかった。',
    solution: 'テレモは最低契約期間なし。初期費用もなし。合わなければいつでも解約OK。リスクゼロで始められます。',
    conclusion: 'だから、始めるリスクがゼロになります',
    extras: [
      '初期費用なしで明日から始められる',
      '成果が出なければすぐ止められる',
      '「試す」ことにリスクがない構造',
    ],
    checks: [
      '初期費用0円で導入のハードルなし',
      '最低契約期間なし、いつでも解約可能',
      '成果が出なければ止められる安心感',
    ],
    img: '/img/pain-04.jpg',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #280d0d 50%, #1a0a0a 100%)',
  },
];


// CASE別の装飾SVG (左パネルの背景に表示) - 編集デザイン風アイコン
const painIcons = {
  // 01: 下落グラフ + 流れ落ちるお金
  '01': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi1-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#c94700" />
        </linearGradient>
      </defs>
      {/* 紙幣 */}
      <g transform="rotate(-12 60 70)">
        <rect x="30" y="40" width="80" height="44" rx="3" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="rgba(255,255,255,0.04)" />
        <circle cx="70" cy="62" r="11" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        <text x="70" y="66" textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.55)" fontWeight="800">¥</text>
        <line x1="38" y1="48" x2="50" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="38" y1="76" x2="50" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="92" y1="48" x2="104" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="92" y1="76" x2="104" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </g>
      {/* 飛んでいくコイン */}
      <g>
        <circle cx="155" cy="55" r="11" fill="url(#pi1-orange)" opacity="0.95" />
        <text x="155" y="60" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="900">¥</text>
        <path d="M165 50 Q175 35 188 35" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </g>
      <g opacity="0.7">
        <circle cx="195" cy="38" r="7" fill="#f55f00" />
        <text x="195" y="42" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="900">¥</text>
      </g>
      <g opacity="0.5">
        <circle cx="218" cy="22" r="5" fill="#f55f00" />
      </g>

      {/* 下落グラフ */}
      <g transform="translate(20 130)">
        {/* 軸 */}
        <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
        {/* 棒グラフ (右に行くほど低い = 成果減少) */}
        <rect x="14" y="14" width="20" height="66" fill="rgba(255,255,255,0.2)" />
        <rect x="50" y="32" width="20" height="48" fill="rgba(255,255,255,0.18)" />
        <rect x="86" y="46" width="20" height="34" fill="rgba(255,255,255,0.16)" />
        <rect x="122" y="58" width="20" height="22" fill="rgba(255,255,255,0.14)" />
        <rect x="158" y="70" width="20" height="10" fill="url(#pi1-orange)" />
        {/* 下向き矢印（オレンジ） */}
        <path d="M14 4 L172 70" stroke="url(#pi1-orange)" strokeWidth="3" strokeLinecap="round" />
        <path d="M165 60 L172 70 L160 70" fill="url(#pi1-orange)" />
      </g>
    </svg>
  ),

  // 02: ブラックボックス (鍵付き) + 中身が見えない目
  '02': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi2-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#c94700" />
        </linearGradient>
      </defs>
      {/* 大きな箱 */}
      <g>
        <path d="M55 80 L185 80 L185 200 L55 200 Z"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.04)" strokeLinejoin="round" />
        {/* 箱の蓋 */}
        <path d="M40 65 L200 65 L185 80 L55 80 Z"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.06)" strokeLinejoin="round" />
        {/* 蓋の南京錠 */}
        <g transform="translate(108 50)">
          <rect x="0" y="6" width="24" height="20" rx="3" fill="url(#pi2-orange)" />
          <path d="M5 6 L5 0 Q5 -8 12 -8 Q19 -8 19 0 L19 6"
            stroke="url(#pi2-orange)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2" fill="#fff" />
        </g>
      </g>

      {/* 中央に閉じた目 (見えない) */}
      <g transform="translate(120 140)">
        <path d="M-32 0 Q0 -18 32 0 Q0 18 -32 0 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none" />
        {/* 斜線で閉じた目を表現 */}
        <line x1="-32" y1="0" x2="32" y2="0" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        {/* 斜め禁止線 */}
        <line x1="-40" y1="-12" x2="40" y2="12" stroke="url(#pi2-orange)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ?マーク (箱の右下) */}
      <g transform="translate(160 175)">
        <circle cx="0" cy="0" r="14" fill="url(#pi2-orange)" />
        <text x="0" y="5" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="900">?</text>
      </g>

      {/* 散らばる小さな?（ノイズ感） */}
      <text x="38" y="115" fontSize="14" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
      <text x="200" y="105" fontSize="11" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
      <text x="32" y="195" fontSize="10" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
    </svg>
  ),

  // 03: ざっくりレポート（数字ぼやけ・グラフ簡素）
  '03': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi3-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#c94700" />
        </linearGradient>
        <filter id="pi3-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      {/* 後ろの書類 (ずらして重ね) */}
      <g transform="rotate(-4 120 120)">
        <path d="M50 30 L155 30 L185 60 L185 200 L50 200 Z"
          stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="rgba(255,255,255,0.03)" strokeLinejoin="round" />
      </g>
      {/* メイン書類 */}
      <g>
        <path d="M58 38 L160 38 L190 68 L190 210 L58 210 Z"
          stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="rgba(255,255,255,0.05)" strokeLinejoin="round" />
        <path d="M160 38 L160 68 L190 68" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="none" />

        {/* タイトル "REPORT" */}
        <text x="74" y="65" fontSize="11" fill="rgba(255,255,255,0.4)" fontWeight="900" letterSpacing="2">REPORT</text>

        {/* ぼやけた数字 */}
        <g filter="url(#pi3-blur)" opacity="0.6">
          <text x="74" y="100" fontSize="32" fill="#fff" fontWeight="900">12,●●●</text>
        </g>
        <text x="74" y="120" fontSize="9" fill="rgba(255,255,255,0.35)">月間コール数</text>

        {/* 簡素な棒グラフ (3本のみ) */}
        <g transform="translate(74 140)">
          <rect x="0" y="20" width="22" height="40" fill="rgba(255,255,255,0.2)" />
          <rect x="32" y="10" width="22" height="50" fill="rgba(255,255,255,0.2)" />
          <rect x="64" y="28" width="22" height="32" fill="url(#pi3-orange)" />
          <line x1="-4" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </g>

        {/* 末尾のチェックなし（不完全感） */}
        <line x1="74" y1="190" x2="160" y2="190" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
      </g>

      {/* 虫眼鏡 (右下) */}
      <g transform="translate(165 165)">
        <circle cx="0" cy="0" r="22" fill="rgba(17,17,17,1)" />
        <circle cx="0" cy="0" r="22" stroke="url(#pi3-orange)" strokeWidth="3" fill="none" />
        <text x="0" y="6" textAnchor="middle" fontSize="20" fill="url(#pi3-orange)" fontWeight="900">?</text>
        <line x1="16" y1="16" x2="32" y2="32" stroke="url(#pi3-orange)" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 04: 鎖と契約書 (縛り)
  '04': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi4-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#c94700" />
        </linearGradient>
        <linearGradient id="pi4-chain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>
      {/* 契約書 (背景) */}
      <g transform="rotate(-6 120 130)">
        <rect x="55" y="55" width="130" height="160" rx="3"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.05)" />
        <text x="120" y="85" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="900" letterSpacing="2">CONTRACT</text>
        {/* 罫線 */}
        <line x1="70" y1="100" x2="170" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="113" x2="160" y2="113" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="126" x2="155" y2="126" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="139" x2="170" y2="139" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="152" x2="140" y2="152" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {/* "6ヶ月" 印 */}
        <g transform="translate(150 185)">
          <circle r="20" stroke="url(#pi4-orange)" strokeWidth="2.5" fill="none" />
          <text x="0" y="-2" textAnchor="middle" fontSize="9" fill="url(#pi4-orange)" fontWeight="900">最低</text>
          <text x="0" y="10" textAnchor="middle" fontSize="11" fill="url(#pi4-orange)" fontWeight="900">6ヶ月</text>
        </g>
      </g>

      {/* 鎖 (左上から右下にかけて巻き付く) */}
      <g>
        {/* チェーンリンク */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = -25 + i * 8;
          const cx = 30 + i * 32;
          const cy = 25 + i * 18;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="11"
              ry="7"
              stroke={i === 5 ? 'url(#pi4-orange)' : 'url(#pi4-chain)'}
              strokeWidth="3"
              fill="none"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
      </g>

      {/* 大きな南京錠 (右下) */}
      <g transform="translate(178 168)">
        <rect x="-22" y="-12" width="44" height="36" rx="5" fill="url(#pi4-orange)" />
        <path d="M-15 -12 L-15 -25 Q-15 -38 0 -38 Q15 -38 15 -25 L15 -12"
          stroke="url(#pi4-orange)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="3" r="3.5" fill="#fff" />
        <line x1="0" y1="6" x2="0" y2="14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  ),
};

// SVG laurel wreath - premium realistic leaves
const Laurel = () => {
  // 左側の枝: 下から上に向かって葉を配置 (root x,y: 枝の起点)
  const leftLeaves = [
    { cx: 55, cy: 172, rx: 7, ry: 14, rot: -30 },
    { cx: 50, cy: 156, rx: 7.5, ry: 15, rot: -38 },
    { cx: 46, cy: 140, rx: 8, ry: 16, rot: -46 },
    { cx: 44, cy: 122, rx: 8, ry: 16, rot: -56 },
    { cx: 44, cy: 104, rx: 8, ry: 15, rot: -66 },
    { cx: 47, cy: 88,  rx: 7.5, ry: 14, rot: -76 },
    { cx: 53, cy: 74,  rx: 7, ry: 13, rot: -88 },
    { cx: 62, cy: 64,  rx: 6.5, ry: 12, rot: -100 },
  ];
  const rightLeaves = leftLeaves.map((l) => ({ ...l, cx: 200 - l.cx, rot: -l.rot }));

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2d97a" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8a6f2b" />
        </linearGradient>
        <linearGradient id="goldGradDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#6b5320" />
        </linearGradient>
      </defs>

      {/* 左の枝(茎) */}
      <path
        d="M62 170 Q45 130, 55 75"
        stroke="url(#goldGradDark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* 右の枝(茎) */}
      <path
        d="M138 170 Q155 130, 145 75"
        stroke="url(#goldGradDark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 左の葉 */}
      {leftLeaves.map((l, i) => (
        <g key={`l${i}`} transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}>
          <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="url(#goldGrad)" />
          <ellipse
            cx={l.cx}
            cy={l.cy}
            rx={l.rx * 0.45}
            ry={l.ry * 0.8}
            fill="rgba(255,240,180,0.35)"
            transform={`translate(-${l.rx * 0.25} 0)`}
          />
        </g>
      ))}

      {/* 右の葉 */}
      {rightLeaves.map((l, i) => (
        <g key={`r${i}`} transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}>
          <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="url(#goldGrad)" />
          <ellipse
            cx={l.cx}
            cy={l.cy}
            rx={l.rx * 0.45}
            ry={l.ry * 0.8}
            fill="rgba(255,240,180,0.35)"
            transform={`translate(${l.rx * 0.25} 0)`}
          />
        </g>
      ))}

      {/* 下部リボン結び */}
      <path
        d="M88 175 Q100 168, 112 175"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="172" r="3" fill="url(#goldGrad)" />
    </svg>
  );
};

const stats = [
  { label: 'リピート率',     numberVal: 97, numberSuffix: '', unit: '%', note: '※継続ご契約いただいた企業の割合' },
  { label: '最高アポイント率', numberVal: 15, numberSuffix: '', unit: '%', note: '※業界平均の約3倍の獲得率' },
  { label: '決裁者商談率',   numberVal: 88, numberSuffix: '', unit: '%', note: '※創出商談のうち決裁者同席の割合' },
];

export default function Experienced() {
  return (
    <section id="experienced" className="pt-8 sm:pt-12 pb-10 sm:pb-14 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">

        {/* ===== Hero-style intro block (like reference) ===== */}
        <div className="fade-in text-center mb-2">
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-black text-[#f55f00] leading-[1.3] mb-3">
            テレモは
          </p>
          <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-black leading-[1.6]">
            <span className="inline-block bg-[#f55f00] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mr-1">スクリプト設計</span>
            から
            <span className="inline-block bg-[#f55f00] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mx-1">4,700コール実行</span>
            まで行う
          </p>
          <p className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mt-2">
            「営業代行サービス」
          </p>
        </div>

        {/* ===== Achievements (gold laurel) ===== */}
        <AchievementsAwards />

        {/* ===== Pain points - reference style ===== */}
        <div className="mb-16 sm:mb-20">
          {/* Big centered heading */}
          <div className="fade-in text-center mb-6">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3] tracking-[0.02em]">
              こんな経験、<span className="text-[#f55f00]">ありませんか？</span>
            </h2>
          </div>
          <p className="fade-in text-center text-[16px] sm:text-[18px] text-[#4d4d4d] leading-[2] max-w-[700px] mx-auto mb-10">
            営業代行を使ったことがある方なら、一度は感じたことがあるはず。
            <br />
            テレモは、これらすべてを解決するために設計されました。
          </p>


          {/* Case File スタイル - 編集デザイン */}
          <div className="space-y-10 sm:space-y-14">
            {painPoints.map((p, i) => (
              <article
                key={i}
                className="fade-in relative bg-white border-2 border-black"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* === マストヘッド === */}
                <header className="relative bg-black text-white flex items-stretch">
                  {/* 番号バッジ */}
                  <div className="flex items-center justify-center px-5 sm:px-7 border-r border-white/10">
                    <div className="text-center">
                      <p className="text-[9px] sm:text-[10px] font-black text-[#f55f00] tracking-[0.3em] leading-none">CASE</p>
                      <p
                        className="text-[36px] sm:text-[44px] font-black leading-none mt-1"
                        style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                      >
                        {p.num}
                      </p>
                    </div>
                  </div>

                  {/* タイトル */}
                  <div className="flex-1 flex items-center px-5 sm:px-7 py-5">
                    <h3
                      className="text-[20px] sm:text-[26px] lg:text-[30px] font-black leading-[1.3]"
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {p.label}
                    </h3>
                  </div>

                  {/* 警告アイコン */}
                  <div className="hidden sm:flex items-center pr-6">
                    <div className="flex items-center gap-2 bg-[#f55f00] rounded-full px-4 py-1.5">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2 L19 17 H1 Z" fill="#fff" />
                        <rect x="9" y="8" width="2" height="5" fill="#f55f00" />
                        <circle cx="10" cy="15" r="1" fill="#f55f00" />
                      </svg>
                      <span className="text-[11px] font-black text-white tracking-[0.1em]">要注意</span>
                    </div>
                  </div>
                </header>

                {/* === 薄いグラデーションライン === */}
                <div
                  className="h-[3px]"
                  style={{
                    background: 'linear-gradient(90deg, #f55f00, #f55f00 40%, #333 40%, #333)',
                  }}
                />

                {/* === 本文: 引用 + 解 === */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">

                  {/* 左: 引用ブロック */}
                  <div className="relative bg-[#fafaf7] p-6 sm:p-8 lg:p-10 lg:border-r border-b lg:border-b-0 border-[#e5e0d4] overflow-hidden">
                    {/* 大きなクォーテーション */}
                    <span
                      className="absolute -top-4 left-3 sm:left-5 text-[140px] sm:text-[180px] leading-none text-[#f55f00]/10 select-none pointer-events-none"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      “
                    </span>

                    {/* 装飾SVG (背景右下) */}
                    <div className="pointer-events-none absolute -right-6 -bottom-6 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] opacity-[0.18]">
                      {painIcons[p.num]}
                    </div>

                    <div className="relative pl-2 sm:pl-4">
                      <p
                        className="text-[16px] sm:text-[18px] lg:text-[19px] text-black leading-[2.05] font-medium"
                        style={{
                          fontFamily: '"Noto Serif JP", serif',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {p.detail}
                      </p>

                      {/* 出所 */}
                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-black" />
                        <span className="text-[11px] sm:text-[12px] font-bold text-black tracking-[0.2em]">
                          実際にいただいた声より
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 右: テレモの解 */}
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    {/* 見出しバー */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-[#f55f00] text-white text-[10px] sm:text-[11px] font-black tracking-[0.25em] px-3 py-[5px]">
                        TELEMO ANSWER
                      </span>
                      <span className="flex-1 h-[1px] bg-black" />
                      <span className="text-[10px] font-black text-black tracking-[0.2em]">No.{p.num}</span>
                    </div>

                    {/* 大見出し: 結論 */}
                    <p
                      className="text-[18px] sm:text-[22px] lg:text-[24px] font-black text-black leading-[1.45] mb-4"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {p.conclusion}
                    </p>

                    {/* 本文 */}
                    <p className="text-[14px] sm:text-[15px] text-[#3a3a3a] leading-[1.95] mb-6 pb-6 border-b border-dashed border-[#d8d8d8]">
                      {p.solution}
                    </p>

                    {/* 仕組み (3点) - 編集レイアウト */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5">
                      {p.checks.map((check, j) => (
                        <div key={j} className="relative pt-3 border-t-2 border-black">
                          <span
                            className="absolute -top-[10px] left-0 bg-white text-[10px] font-black text-[#f55f00] tracking-[0.2em] pr-2"
                            style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                          >
                            POINT.{String(j + 1).padStart(2, '0')}
                          </span>
                          <p className="text-[12px] sm:text-[13px] font-bold text-black leading-[1.6]">
                            {check}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {p.extras.map((ex, j) => (
                        <span
                          key={j}
                          className="inline-block text-[11px] text-[#5a5a5a] bg-[#f7f5f0] border border-[#e8e3d6] px-2.5 py-1"
                        >
                          # {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* === フッター === */}
                <footer className="flex items-center justify-between bg-black text-white px-5 sm:px-7 py-2.5">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60">EXPERIENCED</span>
                  <span className="text-[10px] font-black tracking-[0.25em] text-[#f55f00]">
                    {String(i + 1).padStart(2, '0')} / {String(painPoints.length).padStart(2, '0')}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Punchline */}
        <div className="fade-in text-center mb-14 pt-8 sm:pt-12">
          <h3 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-black leading-[1.3] tracking-[0.02em]">
            全部、よくある話です。
          </h3>
          <p className="text-[16px] sm:text-[18px] text-[#4d4d4d] mt-4">だから私たちは、すべてを逆に設計しました。</p>
        </div>

      </div>
    </section>
  );
}
