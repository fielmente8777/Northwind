import LazyLoadedMap from "./LazyLoadedMap";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";

const Map = ({
  src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30171.673173874697!2d72.842557!3d19.04354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fe6a8248bd%3A0xd3475f69733b382b!2sL%26T%20Realty%20Island%20Cove%20Sales%20Office%2C%20Mahim!5e0!3m2!1sen!2sin!4v1712670624488!5m2!1sen!2sin",
}: {
  src: string;
}) => {
  return (
    <SectionWithContainer >
      <div className="relative h-[460px] !py-0 border-2 border-[#29422C]">
        <LazyLoadedMap src={src} />
      </div>
      {/* <div className="flex flex-col items-center justify-center mt-4">
        <Button
          label="Get Directions"
          href="https://maps.app.goo.gl/3JkEJeHHYXydK9Nq8"
          newTabe
          className="w-fit"
        />
      </div> */}
    </SectionWithContainer>
  );
};

export default Map;
