import { contactLinks } from '../data/contact';

const ContactSection = () => (
  <section aria-label="Contact">
    <div className="flex items-center gap-4 mt-10 mb-6">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem]">user@host:</span>
      <span className="text-[1.4rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        contact
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <ul className="list-none p-0 m-0 grid gap-2.5">
      {contactLinks.map((link) => (
        <li key={link.label} className="flex items-center gap-2 text-[rgba(144,238,144,0.9)]">
          <span className="lowercase text-[#00ff41] min-w-[90px]">{link.label}</span>
          <span className="text-[rgba(0,255,65,0.6)]">:</span>
          <a
            className="text-[rgba(144,238,144,0.85)] hover:text-[#00ff41] hover:underline"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.value}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default ContactSection;
