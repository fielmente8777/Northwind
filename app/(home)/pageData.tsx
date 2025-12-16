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
    src: "/bnr-img.png",
    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
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
      src: "/images/testimonial2.jpg",
      // src: "/images/Adventure.png",
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
      // {
      //   title: "PARAGLIDING",
      //   src: "/images/experienceImage4.jpg",
      // },
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
        src: "/images/Tripadvisor-Logo.png",
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
        src: "/deer-park.png",
        title: "Deer Park Institute",
      },
      {
        src: "/chokling-monastery.png",
        title: "Chokling Monastery",
      },
      {
        src: "/baijnath-temple.png",
        
        title: "Baijnath Temple",
      },
      {
        src: "/tea-garden.png",
        title: "Tea Garden",
      },
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
  SliderText: [
    `BOOK DIRECTLY WITH US AND ENJOY COMPLIMENTARY BREAKFAST AND UP TO 50% OFF ON FOOD.`,
  ],
  testimonial: {
    subTitle: "Appreciation From Our Guests",
    testimonials: [
      {
        title: "Lorem Ipsum",
        description:
          "North Wind 57 in Bir Billing offers a truly one-of-a-kind glamping experience, blending comfort with stunning natural surroundings. The dome rooms are cozy and beautifully designed, perfect for a unique mountain retreat. Shilank’s thoughtful hospitality stands out, ensuring every guest feels right at home. With a lovely restaurant and serene lawn space, it’s an unforgettable escape for both relaxation and adventure.",
      },
      {
        title: "Lorem Ipsum",
        description:
          "Ideal place to plan your stay during your visit to bir billing - a adventure escape in himachal.Clean rooms, affordable tasty food,hospitality and humble staff is a addition to it. It's a haven for bird watchers and butterfly lovers.We just stayed 1 night and was memorable.",
      },
      {
        title: "Lorem Ipsum",
        description:
          "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
      },
      {
        title: "Lorem Ipsum",
        description:
          "North Wind 57 stands out among the best mountain hotels in Bir for its breathtaking mountain views, cozy ambiance, and excellent service. Located in Bir, Himachal Pradesh, this hotel offers easy access to popular attractions like paragliding in Bir Billing, making it an ideal choice for both nature lovers and adventure enthusiasts. The rooms are comfortable, well-equipped, and provide panoramic vistas, while the on-site restaurant serves delicious local cuisine. If you’re searching for a top-rated hotel in Bir, North Wind 57 is the perfect blend of comfort, scenic beauty, and convenience, making it one of the best Bir Billing hotels for a memorable mountain escape.",
      },
      {
        title: "Lorem Ipsum",
        description:
          "The location is just the right perfect, away from the main road but also a 3-4 minute walk leads you to the best eateries. Very quiet. Their common room provides views of scenic sunsets. My wife and I travelled with no itinerary, but Shilank was kind enough to welcome us, and spend time and provide us with cues on spots to visit and eat. All of them were great or exceeded our expectations.",
      },

      {
        title: "Lorem Ipsum",
        description:
          "North Wind 57 in Bir Billing is a gem for nature lovers and adventure seekers alike. The geodesic dome rooms provide a unique, cozy experience with breathtaking mountain views. Shilank’s warm hospitality makes the stay feel even more special, always attentive to guests’ needs. The on-site restaurant and small lawn area add to the peaceful charm, making it an ideal spot near the paragliding action.",
      },
    ],
    images: "/images/testimonial3.jpg",

    link: { label: "BOOK NOW", url: `tel:${contact.phone[0]}` },
  },
};
