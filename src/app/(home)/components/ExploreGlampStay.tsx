import { SectionWithContainer, TwoColSection2 } from "@/components";

const ExploreGlampData = [
  {
    title: "Premium Glamps",
    desc: "Experience the perfect blend of nature and comfort with our Premium Glamps. With luxurious interiors, comfy beds, and extensive activities to explore in the nearby areas, these glamps promise an unforgettable retreat. Wake up to stunning views, unwind in cozy outdoor seating, and enjoy the best of both worlds – the serenity of nature and the convenience of modern amenities. Our glamps offer the ideal escape for those seeking tranquility, adventure, and comfort. Perfect for couples, families, or groups. This stay will be an experience you'll cherish forever.",
    price: "Price starting @ ₹7999/-",
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
        src: "/Northwind/glamp-1.png",
        alt: "Northwind-image",
      },
    ],
  },

  {
    title: "Premium Glamps",
    desc: "Experience the perfect blend of nature and comfort with our Premium Glamps. With luxurious interiors, comfy beds, and extensive activities to explore in the nearby areas, these glamps promise an unforgettable retreat. Wake up to stunning views, unwind in cozy outdoor seating, and enjoy the best of both worlds – the serenity of nature and the convenience of modern amenities. Our glamps offer the ideal escape for those seeking tranquility, adventure, and comfort. Perfect for couples, families, or groups. This stay will be an experience you'll cherish forever.",
    price: "Price starting @ ₹7999/-",
    button: {
      label: "BOOK NOW",
      href: "/",
    },
    images: [
      {
        src: "/Northwind/glamp-2.png",
        alt: "Northwind-image",
      },
      {
        src: "/Northwind/glamp-2.png",
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
