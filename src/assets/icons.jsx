const Corona = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2"
    {...props}
  >
    <circle cx="8" cy="18" r="4" />
    <circle cx="56" cy="18" r="4" />
    <circle cx="32" cy="18" r="4" />
    <circle cx="16" cy="24" r="4" />
    <circle cx="48" cy="24" r="4" />
    <circle cx="32" cy="10" r="4" />
    <path d="M8 22L16 28L24 24L32 30L40 24L48 28L56 22" />
    <path d="M9 35.3L11.2 33.7 8 44h48l-3.2-10.3L53.8 33.7 56 35.3C56.9 36 57.4 37 57.4 38.3V48H6.6v-9c0-1.3.5-2.3 1.4-3z" />
  </svg>
);

const Estrella = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2"
    {...props}
  >
    <polygon points="32 4 39 24 60 24 42 36 48 56 32 44 16 56 22 36 4 24 25 24" />
  </svg>
);

const Corazon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2"
    {...props}
  >
    <path d="M32 58s-26-15.7-26-32 12-18 18-12 8 12 8 12 2-6 8-12 18-6 18 12-26 32-26 32z" />
  </svg>
);

const ThreeDotsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="#ffffff"
    {...props}
  >
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

export { Corona, Estrella, Corazon, ThreeDotsIcon};