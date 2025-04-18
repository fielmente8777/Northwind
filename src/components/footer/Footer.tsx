import Image from "next/image";
import Link from "next/link";
import { SectionWithContainer } from "../sectionComponents";

const Logo = "/logo.png";

const Footer = () => {
  return (
    <footer className="max_screen bg-secondary text-white">
      <SectionWithContainer>
        <div className="flex flex-col justify-center items-center gap-5 barlow">
          <div className="relative max-w-64 w-full mx-auto aspect-[6/2]">
            <Image src={Logo} alt="Logo" fill className="object-contain" />
          </div>
          <Link href={"https://maps.app.goo.gl/FmK81SGe8qTeEXa4A"} target="_blank" className="text-center hover:text-primary" >
            Location: Mouza Bir Khasra No 464 ,Bir, near Zostel, Baijnath,
            Himachal Pradesh 176077
          </Link>

          <Link href={"tel:+918091172065"} target="_blank" className="hover:text-primary">Call: +918091172065</Link>
          <Link href={"mailto:northwind0057@gmail.com"} target="_blank" className="hover:text-primary">Email: northwind0057@gmail.com</Link>
         
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-primary !py-4">
        <div className="flex md:flex-row flex-col justify-center gap-2 text-text-dark barlow">
          <div className="flex justify-center gap-2">
            <p className="text-center">© North Wind</p>
            <p className="text-center">• All rights reserved</p>
           
          </div>

          <ul className="flex justify-center gap-2">
            <li className="">
              <Link
                href="https://eazotel.com"
                target="_blank"
                className=" hover:text-secondary description1"
              >
                • Designed & developed by eazotel
              </Link>
            </li>
          </ul>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
