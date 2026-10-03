import { contact } from '../content.js';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about what you're building.</h2>
          <p>
            Tell us where you are: exploring a BaaS partner, preparing for an audit, or scaling a
            live program. We'll reply within one business day.
          </p>
        </div>
        <dl className="contact-list">
          <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
          <div>
            <dt>LinkedIn</dt>
            <dd><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">in/keshtek</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
