import Banner from "@/components/Banner/Banner";
import Form1 from "@/components/forms/Form1";
import { Container, Section } from "@/components/sectionComponants";
import OfferSlider from "@/components/sliders/OfferSlider";
import Image from "next/image";
import Experience from "./components/Experience";
import NearBy from "./components/NearBy";
import OnlinePlatforms from "./components/OnlinePlatforms";
import Rooms from "./components/Rooms";
import Testimonial from "./components/Testimonial";
import Welcome from "./components/Welcome";
import { pageData } from "./pageData";

export default function Home() {
  return (
    <div>
      <Banner {...pageData?.bannerData} />
      <Section defaultPadding={false} className="pt-16 pb-0">
        <div className="relative w-full aspect-[4/.4]">
          <Image
            src={"/line.png"}
            alt="wave"
            fill
            className="object-cover"
          />
        </div>
      </Section>
      <div
        className="md:top-14 md:relative z-30 max-md:py-4
       max-md:my-8 max-md:bg-dark2"
      >
        <Container className="p-3! bg-white box-shadow-2">
          <div className="box-shadow-2 md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </Container>
      </div>
      <Welcome {...pageData.welcomeData} />
      <OnlinePlatforms {...pageData?.onlinePlatforms} />
      <Rooms {...pageData.roomsData} />
      <Experience {...pageData?.experienceData} />
      {/* <ContactUs {...pageData?.contactUsData} /> */}
      <NearBy {...pageData?.nearByData} />
      <OfferSlider
        offersTitle={pageData?.SliderText}
        direction="ltr"
        wrapperClass="demo"
      />
      <Testimonial {...pageData?.testimonial} />
    </div>
  );
}
