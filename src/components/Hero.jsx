import PlatformDiagram from './PlatformDiagram.jsx';

const tags = ['BaaS & sponsor banks', 'Cards & payments', 'PCI DSS', 'SOC 2'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Fintech technology &amp; product consulting</p>
          <h1>Build fintech that banks trust and customers love.</h1>
          <p className="lede">
            Keshtek helps startups and enterprises design, build, and certify money-movement
            platforms. We bring hands-on experience shipping Banking-as-a-Service programs at
            scale, from the first sponsor-bank conversation to PCI DSS and SOC 2 sign-off.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn">Talk to us</a>
            <a href="#services" className="btn btn-ghost">Explore services</a>
          </div>
          <ul className="hero-tags" aria-label="Core focus areas">
            {tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <PlatformDiagram />
      </div>
    </section>
  );
}
