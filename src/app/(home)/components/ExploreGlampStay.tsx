import { SectionWithContainer, TwoColSection2 } from "@/components";

const ExploreGlampData = [
  {
    title: "Premium Glamps",
    desc: "Experience the perfect blend of nature and comfort with our Premium Glamps. With luxurious interiors, comfy beds, and extensive activities to explore in the nearby areas, these glamps promise an unforgettable retreat. Wake up to stunning views, unwind in cozy outdoor seating, and enjoy the best of both worlds – the serenity of nature and the convenience of modern amenities. Our glamps offer the ideal escape for those seeking tranquility, adventure, and comfort. Perfect for couples, families, or groups. This stay will be an experience you'll cherish forever.",
    price: "Price starting @ ₹8999/-",
    button: {
      label: "BOOK NOW",
      href: "/",
    },
    images: [
      {
        src: "/Northwind/glamp-1.png",
        alt: "Northwind-image",
      },
      {
        src: "/Northwind/pg.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/pr02.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/pr03.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/PXL_202.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/PXL_20241.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/PXL_2024122.jpg",
        alt: "Northwind-image",
      },
    ],
  },

  {
    title: "Superior Glamps",
    desc: "Surrounded by nature, our Superior Glamp sites offer stunning mountain views and luxury amenities like high speed connectivity, entertainment screen and  state of the art sanitation services. Enjoy contemporary design and outdoor sitting areas for a truly comfortable stay",
    price: "Price starting @ ₹7999/-",
    button: {
      label: "BOOK NOW",
      href: "/",
    },
    images: [
      {
        src: "/Northwind/sg.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/Northwind/sg2.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/sp02.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/sp03.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/sup.jpg",
        alt: "Northwind-image",
      },
      {
        src: "/IMG-202.jpg",
        alt: "Northwind-image",
      },
    ],
  },
];

const ExploreGlampStay = () => {
  return (
    <div className="bg-bg">
      <SectionWithContainer sectionClassName="!pb-0">
        <div className="max-w-[388px] mx-auto space-y-2">
          <h2 className="text-center barlow font-medium text-sm">
            EXPLORE OUR GLAMP STAYS
          </h2>
          <h3 className="text-center md:text-5xl text-2xl">Northwind57- Bir</h3>
        </div>
      </SectionWithContainer>

      <div>
        {ExploreGlampData?.map((data, index: number) => (
          <TwoColSection2 {...data} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExploreGlampStay;
