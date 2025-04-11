import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function Footer() {
  return (
    <FadeInWhenVisible>
      <footer className="flex max-md:flex-col px-5 md:px-20 text-[#CFCFCF] bg-[#030517] gap-3 md:gap-10 ">
        <div className="flex md:flex-col items-start md:justify-between gap-5 md:gap-15 md:my-10 my-5">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src={"/image/logo.png"}
                alt="Logo"
                width={200}
                height={50}
                className="h-8 w-32"
              />
            </Link>
            <p className="text-xs">
              2025 KeySystem Technology Limited. All rights reserved.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl">QUICK LINKS</h1>
            <p className="text-sm">About Us</p>
            <p className="text-sm"> Sitemap</p>
          </div>
          <div className="flex max-md:flex-col items-center gap-10">
            <FaInstagram />
            <FaX />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 my-10">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Services</h1>
            <ul className="space-y-2 text-sm">
              <li className="">Core refresh</li>
              <li className="">Application management services</li>
              <li className="">Evolution & enhancement services</li>
              <li className="">Solution Assurance & validation</li>
              <li className="">Digital Banking & financial inclusion</li>
              <li className="">Online/mobile lending solution</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl">Contact</h1>
            <h3 className="text-lg">Nigeria</h3>
            <p className="w-52 text-sm">
              55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria
              Island
            </p>
          </div>
          <div className="flex max-md:flex-col md:items-center justify-center gap-5 md:gap-10">
            <div className="space-y-2">
              <h1 className="text-lg">United Kingdom</h1>
              <p className="text-sm">Tel: +44 161 948 1444</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg">United Arab Emirates</h1>
              <p className="text-sm">Tel: +971 50 423 8817</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg">Canada</h1>
              <p className="text-sm">Tel: +1 647 977 1435</p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="">
              <h1 className="text-lg">Nigeria</h1>
              <p className="text-sm">Tel: +234 818 444 1404</p>
            </div>
            <div className="">
              <h1 className="text-lg">Email</h1>
              <p className="text-sm">enquiries@keysystemltd.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 my-10">
          <div className="">
            <ul className="space-y-2 text-sm">
              <li className="">Staff augmentation solutions</li>
              <li className="">Risk management & Internal audit solutions</li>
              <li className="">Data Warehouse & Business Intelligence (BI)</li>
              <li className="">Enterprise Document Management Solutions</li>
              <li className="">KeySystem software testing</li>
              <li className="">Cybersecurity Solutions</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg">United Kingdom</h3>
            <p className="w-52 text-sm">
              39 Kenyon Lane, Off Moston Lane,Moston, Manchester, United
              Kingdom, M40 9JG
            </p>
          </div>
        </div>
      </footer>
    </FadeInWhenVisible>
  );
}
