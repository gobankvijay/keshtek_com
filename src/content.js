export const contact = {
  email: 'enquiries@keshtek.com',
  linkedin: 'https://www.linkedin.com/in/keshtek',
};

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Who we help' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
];

export const expertiseAreas = [
  'Card Issuing',
  'Payment Gateways',
  'BaaS Platforms',
  'Sponsor Bank Programs',
  'Money Movement',
  'PCI DSS & SOC 2',
];

export const services = [
  {
    icon: 'layers',
    title: 'Fintech platform build',
    body: 'Architecture and delivery of core systems: double-entry ledgers, account and card management, onboarding, disputes, and money movement. Delivered on the model that fits you: cloud, on-premises, or hybrid.',
    points: ['Ledger & account design', 'Payments orchestration', 'Reconciliation & reporting', 'Cloud, on-premises, or hybrid deployment'],
  },
  {
    icon: 'bank',
    title: 'BaaS partner integration',
    body: 'Select, negotiate with, and integrate sponsor banks, BaaS providers, and card processors. We know the questions banks ask before they ask them.',
    points: ['Partner selection & due diligence', 'API integration & cutover', 'Program management readiness'],
  },
  {
    icon: 'card',
    title: 'PCI DSS advisory',
    body: 'Scope reduction, gap assessments, and remediation roadmaps for PCI DSS v4.0. We help you minimize cardholder data exposure and prepare for your QSA.',
    points: ['Scoping & segmentation', 'Tokenization strategy', 'SAQ / ROC readiness'],
  },
  {
    icon: 'shield',
    title: 'SOC attestation readiness',
    body: 'Get to SOC 2 Type I and Type II with controls your engineers can actually live with. Policies, evidence automation, and auditor coordination.',
    points: ['Control design & gap analysis', 'Evidence & monitoring', 'Auditor liaison'],
  },
  {
    icon: 'chart',
    title: 'Scalable apps & platforms',
    body: 'Cloud-native architecture built for high availability, idempotency, and peak volume. Designed to pass bank audits and survive launch day.',
    points: ['Cloud & data architecture', 'Reliability & observability', 'Performance & cost tuning'],
  },
  {
    icon: 'person',
    title: 'Fractional CTO & product',
    body: 'Senior technology and product leadership on demand. Roadmaps, build vs. buy decisions, vendor evaluation, hiring, and board-ready technical strategy.',
    points: ['Technical due diligence', 'Roadmap & team design', 'Investor & board support'],
  },
];

export const audiences = [
  {
    title: 'Startups',
    intro: 'Go from idea to a live, bank-approved program without learning every lesson the hard way.',
    points: [
      'Choose the right BaaS model and sponsor bank for your use case',
      'Stand up an MVP architecture that scales past your first 100k users',
      'Design compliance in from day one instead of retrofitting it',
      'Present a credible technical story to banks and investors',
    ],
  },
  {
    title: 'Enterprises',
    intro: 'Launch embedded finance or modernize payments without putting the core business at risk.',
    points: [
      'Evaluate BaaS, issuing, and payments partners objectively',
      'Integrate embedded finance into existing products and data',
      'Reduce PCI scope and strengthen SOC 2 control environments',
      'Augment internal teams with experienced fintech leadership',
    ],
  },
];

export const steps = [
  { title: 'Discover', body: 'We map your product goals, regulatory posture, partners, and current architecture to find the real constraints.' },
  { title: 'Design', body: 'A pragmatic blueprint: architecture, partner strategy, control framework, and a phased roadmap with owners.' },
  { title: 'Build', body: 'Hands-on delivery alongside your team, or leadership of it. We write code, review designs, and unblock integrations.' },
  { title: 'Certify & scale', body: 'Audit readiness, launch support, and operational handoff so the platform keeps running well after we step back.' },
];

export const expertise = [
  {
    title: 'Card Issuing',
    body: 'Debit, prepaid, and credit programs end to end: processor integration, card lifecycle, tokenization, digital wallets, authorizations, and disputes.',
  },
  {
    title: 'Payment Gateways',
    body: 'Acceptance and payout infrastructure across cards, ACH, RTP, and wires, with routing, idempotency, and reconciliation built in.',
  },
  {
    title: 'Large-scale BaaS platforms',
    body: 'Banking-as-a-Service platforms built for fintech unicorns and large banks, serving millions of accounts at production scale.',
  },
  {
    title: 'Compliance programs',
    body: 'PCI DSS, SOC 2, HITRUST, HIPAA, and SOX control environments designed and operated alongside engineering teams.',
  },
];
