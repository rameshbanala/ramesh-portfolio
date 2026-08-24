const Card = ({ children, className = "", hover = true, as: Component = "div", ...props }) => (
  <Component
    className={`rounded-2xl border border-line bg-ink-800/60 backdrop-blur-sm ${
      hover ? "transition-colors duration-300 hover:border-accent-500/40" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </Component>
);

export default Card;
