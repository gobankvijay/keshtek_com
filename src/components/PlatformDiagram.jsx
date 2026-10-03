const chips = [
  { x: 88, label: 'Ledger' },
  { x: 180, label: 'Onboarding' },
  { x: 272, label: 'Risk' },
];

const partners = [
  { x: 30, title: 'Sponsor bank', sub: 'BaaS partner', from: 140, to: 100 },
  { x: 160, title: 'Card processor', sub: 'Issuing · Networks', from: 220, to: 220 },
  { x: 290, title: 'Payment rails', sub: 'ACH · RTP · Wires', from: 300, to: 340 },
];

export default function PlatformDiagram() {
  return (
    <figure
      className="hero-visual"
      aria-label="Diagram: your product connects through a platform core to sponsor banks, card processors, and payment rails, all inside a compliance layer."
    >
      <svg viewBox="0 0 440 400" role="img">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0L10 5L0 10z" className="dv-arrow" />
          </marker>
        </defs>

        <rect x="8" y="8" width="424" height="384" rx="18" className="dv-shield" />
        <text x="28" y="36" className="dv-label-sm">COMPLIANCE LAYER · PCI DSS · SOC 2 · KYC/AML</text>

        <rect x="130" y="58" width="180" height="56" rx="12" className="dv-node" />
        <text x="220" y="84" className="dv-title">Your product</text>
        <text x="220" y="102" className="dv-sub">Web · Mobile · APIs</text>

        <line x1="220" y1="114" x2="220" y2="152" className="dv-line" markerEnd="url(#arr)" />

        <rect x="70" y="156" width="300" height="96" rx="14" className="dv-core" />
        <text x="220" y="182" className="dv-title dv-title-inv">Platform core</text>
        {chips.map((c) => (
          <g key={c.label}>
            <rect x={c.x} y="196" width="80" height="40" rx="8" className="dv-chip" />
            <text x={c.x + 40} y="221" className="dv-chip-t">{c.label}</text>
          </g>
        ))}

        {partners.map((p) => (
          <g key={p.title}>
            <line x1={p.from} y1="252" x2={p.to} y2="292" className="dv-line" markerEnd="url(#arr)" />
            <rect x={p.x} y="296" width="120" height="64" rx="12" className="dv-node" />
            <text x={p.x + 60} y="324" className="dv-title">{p.title}</text>
            <text x={p.x + 60} y="342" className="dv-sub">{p.sub}</text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
