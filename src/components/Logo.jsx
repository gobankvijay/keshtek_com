export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Keshtek home">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M10 8v16M10 16l9-8M13.5 13l6 11"
          stroke="#0b1220"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Keshtek</span>
    </a>
  );
}
