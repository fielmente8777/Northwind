import { JSX } from "react";

export interface navLinkProps {
  id: number;
  label: string;
  href: string;
}

export interface socialLinkProps {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface footerLinkProps {
  id: number;
  title: string;

  links: {
    id: number;
    icon?: JSX.Element;
    title?: string;
    label: string;
    href: string;
  }[];
}

export interface AboutUsDataProps {
  title: string;
  title1: string;
  subtitle: string;
  desc: string;
  desc1: string;
  src: string;
  label: string;
  href: string;
  index?: number;
}

export interface FeaturesDataProps {
  title: string;
  desc: string;
  cards: {
    id: number;
    title: string;
    subtitle: string;
    icon: JSX.Element;
  }[];
}

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

export interface OurFeaturesDataProps {
  title: string;
  desc: string;
  images: {
    id: number;
    src: string;
    title: string;
  }[];
}

export interface TestimonialsDataProps {
  id: number;
  name: string;
  text: string;
}

export interface GalleryDataProps {
  title: string;
  images: string[];
}
