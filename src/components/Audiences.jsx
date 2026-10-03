import Section from './Section.jsx';
import { audiences } from '../content.js';

export default function Audiences() {
  return (
    <Section id="clients" variant="alt" eyebrow="Who we help" title="Built for both sides of fintech.">
      <div className="split">
        {audiences.map((a) => (
          <div className="split-col" key={a.title}>
            <h3>{a.title}</h3>
            <p className="split-intro">{a.intro}</p>
            <ul className="checks">
              {a.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
