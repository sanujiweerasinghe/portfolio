import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { personal } from "../../data/profile";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: personal.github, icon: FiGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FiLinkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="section-container flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <a href="#home" className="text-lg font-bold tracking-tight">
            <span className="text-gradient">{personal.name}</span>
          </a>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{personal.tagline}</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>{personal.location}</li>
              <li>
                <a href={`mailto:${personal.email}`} className="transition-colors hover:text-accent-600 dark:hover:text-accent-400">
                  {personal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-container flex flex-col items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800 py-6 sm:flex-row">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
        >
          Back to top <FiArrowUp className="h-3 w-3" />
        </a>
      </div>
    </footer>
  );
}
