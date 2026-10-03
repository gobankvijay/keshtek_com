import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { services } from '../content.js';

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="From architecture to audit, one partner."
      intro="Fintech sits where software, banking, and regulation meet. We work across all three so your team can ship with confidence."
    >
      <div className="cards">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <div className="card-icon"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul>
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
