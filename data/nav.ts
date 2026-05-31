export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Roofing Repairs", href: "/roofing-repairs" },
      { label: "Siding Repairs", href: "/siding-repairs" },
      { label: "Roofing Tear-Offs & New Installs", href: "/roofing-tear-offs" },
      { label: "Windows & Skylights", href: "/windows-skylights" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Roofing Repairs", href: "/roofing-repairs/" },
  { label: "Siding Repairs", href: "/siding-repairs/" },
  { label: "Roofing Tear-Offs & New Installs", href: "/roofing-tear-offs/" },
  { label: "Windows & Skylights", href: "/windows-skylights/" },
];
