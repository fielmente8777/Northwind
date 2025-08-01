"use client"
import { Footer, Navbar, SectionWithContainer } from "@/components";
import Banner from "@/components/Banner";
import SwiperCarousel from "@/components/SwiperCarousel";
import { NextButton, PrevButton } from "@/icons/icons";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/Form";
import Rooms from "./components/Rooms";

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "#FACC15" : "none"}
    viewBox="0 0 24 24"
    stroke={filled ? "#FACC15" : "#D1D5DB"}
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.708.708 0 011.04 0l2.486 4.984a.708.708 0 00.533.386l5.494.798a.708.708 0 01.392 1.208l-3.973 3.872a.708.708 0 00-.204.627l.938 5.473a.708.708 0 01-1.028.747L12 18.347l-4.917 2.585a.708.708 0 01-1.028-.747l.938-5.473a.708.708 0 00-.204-.627L2.816 10.875a.708.708 0 01.392-1.208l5.494-.798a.708.708 0 00.533-.386l2.486-4.984z"
    />
  </svg>
);

interface Testimonial {
  stars: number;
  quote: string;
}



const testimonials: Testimonial[] = [
  {
    stars: 4,
    quote: "Stayed at North Wind 57 and honestly, it's a vibe. The domes are super comfy and you wake up to unreal views of the hills. It's peaceful but still close to all the action if you're into paragliding or exploring Bir. Also, shoutout to the staff—super friendly and helpful. Definitely coming back!",
  },
  {
    stars: 5,
    quote: "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it's perfect if you're into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    stars: 4,
    quote: "Can't say enough good things about this place! North Wind 57 nails the whole luxury-in-nature thing. The geodesic domes are cozy yet modern, and the view? Absolutely breathtaking. Loved how everything was clean, stylish, and thoughtfully done. Perfect blend of chill and adventure.",
  },
  {
    stars: 4,
    quote: "What a gem! North Wind 57 makes glamping feel like a dream. You're literally surrounded by nature but still have all the comforts. The sunsets from the dome's deck were unreal. Super close to the paragliding takeoff, which made things really convenient. Would 100% recommend.",
  },
  {
    stars: 5,
    quote: "North Wind 57 is next-level relaxing. Waking up in those domes with the mountains right in front of you is something else. The location's prime, especially if you're planning to paraglide or just explore the cafes around Bir. The food's amazing too—total highlight!",
  },
];


const ShowDesc = ({ stars, quote }: Testimonial) => {
  return (
    <div className="flex flex-col items-center gap-[40px] px-4">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < stars} />
        ))}
      </div>
      <p className="barlow font-normal text-[#6D6D6D] text-center max-w-[864px] mx-auto align-middle">
        {quote}
      </p>
    </div>
  );
};

interface Activity {
  title: string;
  image: string;
}

// Mock activity data
const activities: Activity[] = [
  {
    title: "Paragliding",
    image: "/paragliding.png",
  },
  {
    title: "Trekking",
    image: "/trekking.png",
  },
  {
    title: "Star Gazing",
    image: "/stargazing.png",
  },
  {
    title: "Bird Watching",
    image: "/birdwatching.png",
  },
];

const Rendered = ({ image, title }: Activity) => {
  return (
    <div className="relative w-full md:max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] h-[400px] rounded-[6px] overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover"
      />
      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <h2 className="text-white text-[32px] font-normal gilda">{title}</h2>
      </div>
    </div>
  );
};


const item = [
  {
    heading: "Premium Glamps",
    description:
      "Experience the perfect blend of nature and comfort with our Premium Glamps. With luxurious interiors, comfy beds, and extensive activities to explore in the nearby areas, these glamps promise an unforgettable retreat. Wake up to stunning views, unwind in cozy outdoor seating, and enjoy the best of both worlds – the serenity of nature and the convenience of modern amenities. Our glamps offer the ideal escape for those seeking tranquility, adventure, and comfort. Perfect for couples, families, or groups. This stay will be an experience you'll cherish forever.",
    cost: 7999,
    id: 1,
    imageUrls: ["/premium/p1.webp", "/premium/p2.webp", "/premium/p3.webp", "/premium/p4.webp", "/premium/p5.webp"],
    position: "left"
  },
  {
    heading: "Superior Glamps",
    description:
      "Surrounded by nature, our Superior Glamp sites offer stunning mountain views and luxury amenities like high speed connectivity, entertainment screen and  state of the art sanitation services. Enjoy contemporary design and outdoor sitting areas for a truly comfortable stay.",
    cost: 7999,
    id: 2,
    imageUrls: ["/IMG_20250712_072623.jpg", "/superior/s2.webp", "/superior/s3.webp", "/superior/s4.webp", "/superior/s5.webp"],
    position: "right"
  },
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner imageUrl="/IMG_20250712_072619.jpg" center={true}>
        <div>
          <span className="barlow font-normal text-[32px] text-[#FFFFFF] max-md:text-[18px]">Your Glamping Adventure Awaits</span>
          <h1 className="gilda font-normal text-[56px] text-[#FFFFFF] max-md:text-[28px]">Escape to Northwind: Where Luxury Meets Great Outdoors</h1>
        </div>
      </Banner>
      <SectionWithContainer>
        <div className="flex flex-col gap-5 md:gap-[32px] max-md:py-10 items-center">
          <div className="flex flex-col gap-3 md:gap-[16px] text-[#262626]">
            <span className="font-normal barlow text-[16px] leading-[24px] text-center">WELCOME TO ROMANCY</span>
            <h2 className="font-normal gilda text-[48px] text-center">At Northwind</h2>
          </div>
          <p className="text-center barlow font-normal  text-[#6D6D6D]">We offer a unique blend of luxury and adventure in the heart of Bir, Himachal Pradesh. Our glamping campsite provides a perfect escape from the hustle and bustle of daily life, allowing you to immerse yourself in the serene beauty of the Himalayas. Wake up to breathtaking views of the mighty mountains, enjoy trekking and paragliding, and unwind with live music sessions around a bonfire under the starlit sky. Whether you seek adventure or tranquility, Northwind guarantees an unforgettable experience</p>
          <Link target="_blank" rel="noreferrer" href={"https://wa.me/+918091172065?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates."} className="bg-[#D4B01C] px-[24px] py-[12px] text-white text-center items-center">BOOK YOUR STAY</Link>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-[#FFFBED]">
        <div className="flex flex-col gap-10 md:gap-[56px] max-md:py-4 ">
          <div className="flex flex-col gap-3 md:gap-[16px] text-[#262626]">
            <span className="font-normal barlow text-[16px] leading-[24px] text-center">EXPLORE OUR GLAMP STAYS</span>
            <h2 className="font-normal gilda text-[48px] text-center">Northwind57- Bir</h2>
          </div>
          <div className="flex flex-col gap-10 md:gap-[80px]">
            <Rooms item={item[0]} />
            <Rooms item={item[1]} />
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer>
        <div className="flex flex-col gap-10 md:gap-[56px] max-md:py-10">
          <div className="flex flex-col gap-3 md:gap-[16px] text-[#262626]">
            <span className="font-normal barlow text-[16px] leading-[24px] text-center">THINGS TO DO</span>
            <h2 className="font-normal gilda text-[48px] text-center">Experience the Best of Bir</h2>
          </div>
          <div className="relativ flex flex-col gap-[40px]">
            <SwiperCarousel<Activity>
              data={activities.length < 5 ? [...activities, ...activities] : activities}
              modules={[Navigation]}
              loop={true}
              spaceBetween={24}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
              }}
              className="w-full"
              swiperSlideClassName="!flex justify-center"
              renderSlide={(item: Activity) => (
                <Rendered {...item} />
              )}
            />
            <div className="flex mx-auto gap-[56px]">
              <button className="swiper-button-prev-custom">
                <span className="sr-only">previous button</span>
                <PrevButton colour={"#D4B01C"} />
              </button>
              <button className="swiper-button-next-custom">
                <span className="sr-only">next button</span>
                <NextButton colour={"#D4B01C"} />
              </button>
            </div>
          </div>
        </div>
      </SectionWithContainer>
      {/* <SectionWithContainer sectionClassName="!py-0">
       
        <div className="grid grid-cols-2 bg-black">
          <div>
            <Image src={"/contact.png"} alt="contact-image" className="object-" height={784} width={720} />

          </div>
          <div className="w-full items-center justify-items-center my-auto px-10">
            <ContactForm />
          </div>
        </div>


      </SectionWithContainer> */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1600px] mx-auto md:bg-black">
        <div className="h-[300px] md:h-[700px] relative ">
          <Image src={"/contact.png"} alt="contact-image" className="absolute z-10 w-full h-full object-cover " fill />

        </div>
        <div className="w-full items-center justify-items-center my-auto p-5 md:px-10 md:py-10 ">
          <ContactForm />
        </div>
      </div>
      <SectionWithContainer sectionClassName="bg-[#FFFBED]">
        <div className="flex flex-col gap-10 md:gap-[40px] max-w-[1224px] mx-auto py-10">
          <div className="flex flex-col gap-4 text-[#262626] text-center">
            <span className="font-normal text-[16px] leading-[24px] barlow">HEAR FROM OUR</span>
            <h2 className="font-normal text-[48px] gilda">Northwind Explorers</h2>
          </div>
          <div className=" flex items-center justify-center md:gap-20 w-full">
            <button className="prev">
              <span className="sr-only">previous button</span>
              <PrevButton />
            </button>
            <SwiperCarousel
              className="w-full"
              data={testimonials}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".pagination_3",
              }}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              renderSlide={(item) => <ShowDesc {...item} />}
            />
            <button className="next">
              <span className="sr-only">next button</span>
              <NextButton />
            </button>
          </div>
          <div className="pagination_3 flex items-center justify-center gap-2"></div>
        </div>
      </SectionWithContainer>
      <Footer />
    </div>
  );
}
