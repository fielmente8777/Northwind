import { contact } from "@/utils/constent";
import {
  FillCallIcon,
  FillFaceBookIcon,
  FillInstaIcon,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/utils/icons";

interface FooterData {
  logo: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/images/Northwind-logo.png",
  description:
    "Discover the perfect fusion of luxury, adventure, and Himalayan serenity at Northwind57, your ultimate escape in Bir.",
  link: {
    label: "Book Now",
    href: contact.WhatsappCta,
  },
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
        {
          icon: <FillLinkedinIcon />,
          label: "Linkedin",
          href: contact.socialMedia.instagram,
        },
      ],
    },
  ],
};

