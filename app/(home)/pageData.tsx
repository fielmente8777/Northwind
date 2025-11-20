import {
  BookingRatingIcon,
  ExpediaRatingIcon,
  HotelRatingIcon,
  TripAdvisorRatingIcon,
} from "@/icons/icons";
import { contact } from "@/utils/constent";
import { AirPortIcon, BusIcon, TrainIcon } from "@/utils/icons";

export const pageData = {
  bannerData: {
    title: "NORTHWIND 57",
    subTitle: "ADVENTURE WRAPPED IN LUXURY AND COMFORT",
    description:
      "Crafted with authenticity, Northern Nawab brings the timeless flavors of Awadh, Delhi, and Punjab to life.",
    src: "/images/Homebanner.jpg",
  },

  welcomeData: {
    title: "WELCOME TO NORTHWIND 57",
    subTitle: "Luxury Meets Adventure in Bir!",
    description:
      "We offer a unique blend of luxury and adventure in the heart of Bir, Himachal Pradesh. Our glamping campsite provides a perfect escape from the hustle and bustle of daily life, allowing you to immerse yourself in the serene beauty of the Himalayas. Wake up to breathtaking views of the mighty mountains, enjoy trekking and paragliding, and unwind with live music sessions around a bonfire under the starlit sky. Whether you seek adventure or tranquility, Northwind guarantees an unforgettable experience",

    location: {
      label: "Bir, Himachal Pradesh",
      href: "",
    },
    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
    image: {
      src: "/images/Adventure.png",
      alt: "Adventure Image",
    },
  },

  roomsData: {
    title: "LUXURY GLAMP STAYS",
    subTitle: "Northwind57- Bir",

    items: [
      {
        title: "NORTHWIND 57",
        subTitle: "Premium Glamps",
        description:
          "Experience the perfect blend of nature and comfort with our Premium Glamps. With luxurious interiors, comfy beds, and extensive activities to explore in the nearby areas, these glamps promise an unforgettable retreat. Wake up to stunning views, unwind in cozy outdoor seating, and enjoy the best of both worlds – the serenity of nature and the convenience of modern amenities. Our glamps offer the ideal escape for those seeking tranquility, adventure, and comfort. Perfect for couples, families, or groups. This stay will be an experience you'll cherish forever.",

        price: "PRICE STARTING @ ₹8999/-",
        link: {
          label: "Book Now",
          href: `tel:${contact.phone[0]}`,
        },
        images: [
          "/images/rooms/Premium-room1.jpg",
          "/images/rooms/Premium-room1.jpg",
        ],
      },

      {
        title: "NORTHWIND 57",
        subTitle: "Superior Glamps",
        description:
          "Surrounded by nature, our Superior Glamp sites offer stunning mountain views and luxury amenities like high-speed connectivity, an entertainment screen, and state-of-the-art sanitation facilities. Enjoy contemporary design, cozy outdoor sitting areas, plush bedding, and thoughtfully curated interiors that blend comfort with adventure. With private fire pits, ample storage, and all-weather protection, these glamps ensure a truly relaxing and memorable stay amidst the mountains. This stay promises memories you'll treasure for a lifetime.",

        price: "PRICE STARTING @ ₹8999/-",
        link: {
          label: "Book Now",
          href: `tel:${contact.phone[0]}`,
        },
        images: [
          "/images/rooms/Superior-room1.png",
          "/images/rooms/Superior-room1.png",
        ],
      },
    ],
  },

  experienceData: {
    title: "Experience the Best of Bir!",
    description:
      "Soar high above the valleys, explore scenic trails, and indulge in the perfect balance of thrill and relaxation. At Northwind57, every moment in Bir is crafted to inspire and rejuvenate your spirit.",

    button: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },

    images: [
      // {
      //   title: "PARAGLIDING",
      //   src: "/images/experienceImage1.jpg",
      // },
      // {
      //   title: "track",
      //   src: "/images/experienceImage2.jpg",
      // },
      {
        title: "Trekking",
        src: "/images/experienceImage3.jpg",
      },
      {
        title: "PARAGLIDING",
        src: "/images/experienceImage4.jpg",
      },
      {
        title: "Bird Watching",
        src: "/images/experienceImage5.jpg",
      },
      {
        title: "Star Gazing",
        src: "/images/experienceImage6.jpg",
      },
    ],
  },

  onlinePlatforms: {
    title: "HIGHEST RATINGS ON ONLINE PLATFORMS",
    cards: [
      {
        icon: <TripAdvisorRatingIcon />,
        src: "/images/TripAdvisor-logo.png",
        partnerName: "TripAdvisor",
        ratings: "4.5/5",
      },
      {
        icon: <HotelRatingIcon />,

        src: "/images/makemytrip-logo.png",
        partnerName: "Booking.com",
        ratings: "9.7/10",
      },
      {
        icon: <BookingRatingIcon />,
        src: "/images/Booking.Com-logo.png",
        partnerName: "Hotels.com",
        ratings: "9.5/10",
      },
      {
        icon: <ExpediaRatingIcon />,
        src: "/images/cleartrip-logo.png",
        partnerName: "Expedia",
        ratings: "9.6/10",
      },
    ],
  },

  nearByData: {
    title: "Nearby Attractions",
    subTitle: "Places To Visit In Bir",

    cards: [
      {
        src: "/images/Nearbyimage1.jpg",
        title: "Lorem Ipsum",
      },
      {
        src: "/images/Nearbyimage2.jpg",
        title: "Lorem Ipsum",
      },
      {
        src: "/images/Nearbyimage3.jpg",
        title: "Lorem Ipsum",
      },
      // {
      //   src: "/images/Nearbyimage1.jpg",
      //   title: "Lorem Ipsum",
      // },
    ],

    button: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },

  contactUsData: {
    title: "Seamlessly Connected to Every Destination",
    src: "/im25.webp",
    items: [
      {
        icons: <BusIcon />,
        title: "Bus Station",
        distance: "00 Kilometers",
      },
      {
        icons: <TrainIcon />,
        title: "Train Station",
        distance: "00 Kilometers",
      },
      {
        icons: <AirPortIcon />,
        title: "Airport",
        distance: "00 Kilometers",
      },
    ],
    link: {
      text: "BOOK NOW",
      href: contact.WhatsappCta,
    },
  },

  testimonial: {
    subTitle: "Appreciation From Our Guests",
    testimonials: [
      {
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
    ],
    images: [
      "/images/testimonial1.jpg",
      "/images/testimonial2.jpg",
      "/images/testimonial3.jpg",
      "/images/testimonial4.jpg",
      "/images/testimonial5.jpg",
      "/images/testimonial6.jpg",
      "/images/testimonial7.jpg",
    ],
    link: { label: "BOOK NOW", url: `tel:${contact.phone[0]}` },
  },
};
