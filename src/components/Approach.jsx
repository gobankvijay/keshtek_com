import Section from './Section.jsx';
import { steps } from '../content.js';

export default function Approach() {
  return (
    <Section id="approach" eyebrow="How we work" title="A clear path from question to launch.">
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
