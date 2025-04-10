import { homePageData } from "@/data/pagedata";
import {
  Banner,
  ContactUsSection,
  FormSection,
  LinkButton,
  SectionWithContainer,
  TwoColSection,
  TwoColSection2,
} from "@/components";
import TrustedBrand from "./components/TrustedBrand";
import FeaturedServices from "./components/FeaturedServices";
import IndustriesServe from "./components/IndustriesServe";
import CheckInOut from "./components/Check-in-out";
import ExploreGlampStay from "./components/ExploreGlampStay";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannnerData} />
      <div className="max-w-[1100px] mx-auto -mt-10 z-50 relative">
        <CheckInOut />
      </div>

      <SectionWithContainer>
        <div className="space-y-4 max-w-[1076px] mx-auto">
          <h2 className="text-center font-medium barlow text-sm text-text-dark">
            WELCOME TO ROMANCY
          </h2>
          <h3 className="text-center text-5xl text-text-dark">At Northwind</h3>
          <p className="text-text-light text-center">
            We offer a unique blend of luxury and adventure in the heart of Bir,
            Himachal Pradesh. Our glamping campsite provides a perfect escape
            from the hustle and bustle of daily life, allowing you to immerse
            yourself in the serene beauty of the Himalayas. Wake up to
            breathtaking views of the mighty mountains, enjoy trekking and
            paragliding, and unwind with live music sessions around a bonfire
            under the starlit sky. Whether you seek adventure or tranquility,
            Northwind guarantees an unforgettable experience
          </p>

          <LinkButton href="/" className="flex justify-center">
            <button className="bg-primary px-4 py-2 text-sm text-white barlow rounded-md">
              BOOK YOUR STAY
            </button>
          </LinkButton>
        </div>
      </SectionWithContainer>

      <ExploreGlampStay />
      {/* <TrustedBrand {...homePageData.trustedTopBrands} />
      <FormSection desc={homePageData.bannnerData.description} />
      <FeaturedServices {...homePageData.featuredServices} />
      <TwoColSection {...homePageData.experience} btnCss />
      <IndustriesServe {...homePageData.industries} />
      <TwoColSection2 {...homePageData.featuredClient} />
      <ContactUsSection {...homePageData.contactUs} /> */}
    </main>
  );
}
