import { socialLinks } from "../data/social";

const Footer = () => (
  <footer className="border-t border-line py-8">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} Ramesh Banala
      </p>
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.label === "Email" ? undefined : "_blank"}
              rel={social.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              className="rounded-md p-2 text-muted transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
