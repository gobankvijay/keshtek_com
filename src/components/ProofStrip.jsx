import { expertiseAreas } from '../content.js';

export default function ProofStrip() {
  return (
    <section className="proof" aria-label="Areas of expertise">
      <div className="container proof-inner">
        <p>Deep expertise in</p>
        <ul>
          {expertiseAreas.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </section>
  );
}
