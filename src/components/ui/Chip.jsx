const Chip = ({ children, tone = "default", className = "" }) => {
  const tones = {
    default:
      "bg-ink-800 text-paper-dim border-line",
    accent:
      "bg-accent-500/10 text-accent-300 border-accent-500/25",
    live: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
