import { contact } from "@/utils/constent";
import { CallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

export const navUpper = [
  {
    label: "Bir, Himachal Pradesh",
    href: contact.addressLink,
    icon: <FillLocationIcon />,
  },
  // {
  //   label: contact.email,
  //   href: "mailto:" + contact.email,
  //   icon: <FillMailIcon />,
  // },
  {
    label: contact.phone[0],
    href: "tel:" + contact.phone[0],
    icon: <CallIcon />,
  },
];
