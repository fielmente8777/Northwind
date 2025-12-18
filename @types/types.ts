import { JSX } from "react";

export interface AboutSectionProps {
  title?: string;
  subTitle?: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  src: string;
  images: string[];
}

export interface RoomsProps {
  bg?: string;
  title: string;
  subTitle: string;
  cards: {
    textColor?: string;
    title: string;
    noOfBadRooms: string;
    description?: string;
    listOfIcons: {
      icons: JSX.Element;
      title: string;
    }[];
    link?: {
      label: string;
      url: string;
    };
    images: string[];
  }[];
  link?: {
    label: string;
    url: string;
  };
}

export interface FacilitiesProps {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    description?: string;
    src: string;
  }[];
  link: {
    label: string;
    url: string;
  };
}

export interface CafeAndRestaurantsProps {
  title: string;
  subTitle: string;
  description: string;
  images: string[];
  link: {
    label: string;
    url: string;
  };
}

export interface TestimonialsProps {
  title: string;
  reviewPartners: {
    name: string;
    logo: string;
    rating: string;
  }[];
  cards: {
    src: string;
    title: string;
    description: string;
  }[];
}

export interface BanquetsProps {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    description: string;
    src: string;
  }[];
  link: {
    label: string;
    url: string;
  };
}

export interface OurPackagesPropsTypes {
  title: string;
  description: string;
  cards: {
    packageType: string;
    days: string;
    description: string;
    src: string;
    link: {
      href: string;
      label: string;
    };
  }[];
}
