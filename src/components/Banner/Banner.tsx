// import Image from "next/image";

import Image from "next/image";
import Form from "../Form";
import Location from "../Location";

interface BannerProps {
  title: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({ src }) => {
  return (
    <section className="max-w-[1600px] mx-auto lg:mb-10">
      <div className="relative py-10 lg:py-20 w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${src})` }}>
        <div className="absolute inset-0 bg-black/60"></div>



        <div className="flex max-md:flex-col max-sm:gap-10 relative z-10 lg:justify-between lg:items-center max-width">
          <Image src={"/alLogo.png"} width={100} height={100} alt="" className="lg:absolute lg:-top-14 left-0" />
          <div className="z-10 flex flex-col gap-3 justify-center items-center max-w-[674px]">
            <p className="text-lg font-semibold text-white max-sm:text-center uppercase">introducing a new lifestyle destination</p>
            <h1 className="text-[56px] lg:text-5xl font-semibold text-white text-center bauman-font">L&T Realty’s Island Cove, MAHIM</h1>
          </div>
          <div className="hidden lg:block z-10">
            <Form />

          </div>
        </div>
      </div>

      <div className="lg:hidden py-[32px] px-[16px]">
        <Form />
      </div>
      <Location />

    </section >
  );
};

export default Banner;
