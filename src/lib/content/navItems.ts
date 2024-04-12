interface NavItem {
  name: string;
  url: string;
  logo?: SVGAElement;
}

export interface ImageItem {
  title: string;
  description: string;
  src: string;
  alt: string;
}

export const navData: Array<NavItem> = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about us",
    url: "/about",
  },
  {
    name: "prayer times",
    url: "/prayer-times",
  },
  {
    name: "services",
    url: "/services",
  },
  {
    name: "events",
    url: "/events",
  },
  {
    name: "donate",
    url: "/donate",
  },
  {
    name: "members",
    url: "/members",
  },
];

export const imageData: Array<ImageItem> = [
  {
    title: "CMS",
    description: "CMS wow mashaAllah",
    src: "/images/masjid.jpg",
    alt: "picture of masjid",
  },
  {
    title: "madina",
    description: "madina wow",
    src: "/images/madina.jpg",
    alt: "picture of masjid",
  },
  {
    title: "mecca",
    description: "clock tower wow",
    src: "/images/clockTower.jpg",
    alt: "picture of masjid",
  },
];

export const servicesData: Array<NavItem> = [
  {
    name: "hifz",
    url: "/hifz",
  },
  {
    name: "events",
    url: "/events",
  },
  {
    name: "prayer times",
    url: "/prayer-times",
  },
  {
    name: "donation",
    url: "/donation",
  },
  {
    name: "announcements",
    url: "/announcements",
  },
  {
    name: "more",
    url: "/more",
  },
];

export const footerData: Array<NavItem> = [
  {
    name: "about us",
    url: "/about",
  },
  {
    name: "services",
    url: "/services",
  },
  {
    name: "events",
    url: "/events",
  },
  {
    name: "donate",
    url: "/donate",
  },
  {
    name: "members",
    url: "/members",
  },
  {
    name: "contact",
    url: "/contact",
  },
];
