import Banner from "@/components/Banner/Banner";
import Form1 from "@/components/forms/Form1";
import { Container } from "@/components/sectionComponants";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import NearBy from "./components/NearBy";
import Testimonial from "./components/Testimonial";
import Welcome from "./components/Welcome";
import { pageData } from "./pageData";
import OnlinePlatforms from "./components/OnlinePlatforms";
import Rooms from "./components/Rooms";

export default function Home() {
  return (
    <div>
      <Banner {...pageData?.bannerData} />
      <div className="md:-top-16 md:relative z-30 max-md:py-[16px] max-md:my-8 max-md:bg-dark2">
        <Container className="p-3! bg-light md:rounded-2xl">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </Container>
      </div>
      <Welcome {...pageData.welcomeData} />
      <OnlinePlatforms {...pageData?.onlinePlatforms} />
      <Rooms {...pageData.roomsData} />
      <Experience {...pageData?.experienceData} />
      <ContactUs {...pageData?.contactUsData} />
      <NearBy {...pageData?.nearByData} />
      <Testimonial {...pageData?.testimonial} />

      <div className="md:top-16 md:relative z-30 max-md:py-[16px] max-md:my-8 max-md:bg-dark2 md:block hidden">
        <Container className="p-3! bg-light md:rounded-2xl">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </Container>
      </div>
    </div>
  );
}
