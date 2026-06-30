import Link from "next/link";
import Image from "next/image";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Pinterest from "./icons/pinterest";

export default function () {
  return (
    <section className="bg-[#000D1E] w-full py-6">
      <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-2">
        <Image
          src={"/images/legendary-logo-a.png"}
          width={256}
          height={234}
          quality={100}
          alt="Legendary Logo"
          className="h-[100px] w-auto"
        />
        {/* { <div className="flex flex-col gap-4 justify-start items-start text-custom">
          <p className="text-xl">Ongoing Projects</p>
          <Link className="text-sm" href={"/projects/legendary-platina"}>
            {" "}
            Legendary Platina &gt;&gt;{" "}
          </Link>
          <p className="text-sm">Flats in Gopalapuram</p>
        </div>} */}
        <div className="text-xs text-custom flex flex-col justify-start items-start lg:col-span-2 gap-3">
          <p className="text-base font-semibold">Corporate Office : </p>
          <p className="text-custom text-sm leading-loose">
            2nd Floor, Amble Side Building, No. 8, Khader Nawaz Khan Road,
            <br />
            Nungambakkam, Chennai – 600 006 <br />
            <Link className="underline pr-2" href={"tel:+91 7550065595"}>
              +91 7550065595
            </Link>
            |
            <Link className="underline px-2" href={"mailto:info@legendary.in"}>
              info@legendary.in
            </Link>
          </p>
        </div>
        <div className="flex flex-col text-custom gap-6 pt-6">
          <ul className="flex gap-2 items-start flex-col text-xs">
            <li className="animate-grow">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/about-us"}>ABOUT</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/projects"}>PROJECTS</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/"}>CONTACT</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/privacy-policy"}>PRIVACY POLICY</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/carrer"}>CAREEES</Link>
            </li>
          </ul>
          <div className="flex flex-row gap-4 items-center justify-start pt-2">
            <Link
              href={"https://www.facebook.com/LegendaryBuildr/"}
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              href={"https://www.instagram.com/legendary.builders/"}
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link href={"https://twitter.com/LegendaryBuildr"} target="_blank">
              <Twitter />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/legendary-buildr/"}
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link
              href={"https://www.pinterest.com/Legendarybuildr/"}
              target="_blank"
            >
              <Pinterest />
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col text-custom gap-6 pt-6">
          <ul className="flex gap-2 items-start flex-col text-xs">
            <li className="animate-grow">
              <Link href={"/projects/pride"}>Luxury 4 BHK Homes</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/projects/marvel"}>Luxury and Ultra Luxury Apartments in Chennai</Link>
            </li>
             <li className="animate-grow">
              <Link href={"/projects/pride"}>Ultra luxury apartments in KNK, Nungambakkam</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/projects/reva"}>Luxury apartments T Nagar</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/projects/square"}>Commercial properties</Link>
            </li>
            <li className="animate-grow">
              <Link href={"/projects/bliss"}>Ultra Luxury apartments T Nagar</Link>
            </li>
            <br></br>
          </ul>
        </div> */}
      </div>
      <div className="w-full text-center text-white text-xs py-1 bg-black">
        &copy; 2025 Legendary Builders
        <p className="text-white text-xs">
          {" "}
          Website Designed & Developed by{" "}
          <a href="https://360brandclub.com/" target="_blank">
            360 BC The Brand Club
          </a>
        </p>
      </div>
    </section>
  );
}
