export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Roofing Repairs",                 href: "/roofing-repairs/" },
  { label: "Siding Repairs",                  href: "/siding-repairs/" },
  { label: "Roofing Tear-Offs & New Installs", href: "/roofing-tear-offs/" },
  { label: "Windows & Skylights",             href: "/windows-skylights/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Roofing Repairs",
    image: "/images/service-roofing-repairs.jpg",
    href: "/roofing-repairs/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Siding Repairs",
    image: "/images/service-siding-repairs.jpg",
    href: "/siding-repairs/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Roofing Tear-Offs & New Installs",
    image: "/images/service-roofing-tear-offs.jpg",
    href: "/roofing-tear-offs/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Windows & Skylights",
    image: "/images/service-windows-skylights.jpg",
    href: "/windows-skylights/",
    width: 535,
    height: 643,
  },
];
