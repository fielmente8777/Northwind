import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import {
  FillFacebook,
  FillInstagram,
  OutLinePhone,
} from "@/icons/icons";

export const imageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/alhathaifalp/";

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "home",
    href: "#",
  },
  {
    id: 2,
    label: "About",
    href: "#about",
  },
  {
    id: 3,
    label: "Features",
    href: "#features",
  },
  {
    id: 4,
    label: "Our Featured Dishes",
    href: "#our_featured_dishes",
  },
  {
    id: 5,
    label: "Reviews",
    href: "#reviews",
  },
  {
    id: 6,
    label: "Gallery",
    href: "#gallery",
  },
  {
    id: 7,
    label: "Contact Us",
    href: "#contact_us",
  },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/yakumi.india?igsh=Y2h2NDAwYzh2YWU4&utm_source=qr",
  },
  {
    id: 2,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/yakumi.india?igsh=Y2h2NDAwYzh2YWU4&utm_source=qr",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "About",
        href: "#about",
      },
      {
        id: 2,
        label: "Features",
        href: "#features",
      },
      {
        id: 3,
        label: "Our Featured Dishes",
        href: "#our_featured_dishes",
      },
      {
        id: 4,
        label: "Reviews",
        href: "#reviews",
      },
      {
        id: 5,
        label: "Gallery",
        href: "#gallery",
      },
      {
        id: 6,
        label: "Contact Us",
        href: "#contact_us",
      },
    ],
  },
  {
    id: 2,
    title: "get in touch",
    links: [
      // {
      //   id: 1,
      //   icon: <OutLineLocation />,
      //   title: "address",
      //   label: "Al Hathaifa Group Office No. 31, Majan Tower, Building No. 2522, Al Ghubrah, Muscat, Sultanate of Oman",
      //   href: "https://maps.app.goo.gl/9di9cekSU5ygmrhc6",
      // },
      {
        id: 3,
        icon: <OutLinePhone />,
        title: "Contact: ",
        label: " +968 7860 9692",
        href: "tel:+96878609692",
      },
      // {
      //   id: 2,
      //   icon: <OutlineMail />,
      //   title: "email",
      //   label: "operations@al-hathaifa.com",
      //   href: "mailto:operations@al-hathaifa.com",
      // },
    ],
  },
  {
    id: 3,
    title: "opening hours",
    links: [
      {
        id: 1,
        title: "Dine-in",
        label: "Mon to Sun",
        href: "12PM – 11PM",
      },
      {
        id: 2,
        title: "Online",
        label: "Mon to Sun",
        href: "12PM – 12AM",
      },
    ],
  },
];
