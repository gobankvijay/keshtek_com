export default function Section({ id, variant, eyebrow, title, intro, children }) {
  return (
    <section id={id} className={`section${variant ? ` section-${variant}` : ''}`}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
