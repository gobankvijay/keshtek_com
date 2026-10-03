import { contact, expertise } from '../content.js';

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="container experience">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Operators, not just advisors.</h2>
          <p>
            Keshtek is a team of industry experts, led by a fintech engineering executive who has
            built and run card issuing, payment gateway, and Banking-as-a-Service platforms for fintech
            unicorns and large-scale banks.
          </p>
          <p>
            That operating background means our recommendations come from systems we have
            shipped, audited, and supported in production for millions of consumers.
          </p>
          <a href={contact.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">
            View LinkedIn profile &rarr;
          </a>
        </div>
        <ul className="timeline">
          {expertise.map((e) => (
            <li key={e.title}>
              <strong>{e.title}</strong>
              <span>{e.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
