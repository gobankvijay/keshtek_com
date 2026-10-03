import { contact } from '../content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Keshtek LLC. All rights reserved.</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      </div>
    </footer>
  );
}
