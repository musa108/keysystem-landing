import arrow from "@/../public/image/arrow.png";
import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function Offerings() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-28 text-center text-white gap-8 px-4">
        <h1 className="text-3xl md:text-4xl">Our Offerings</h1>
        <p className="w-full max-w-lg">
          Leverage KeySystem’s cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </p>
        <button className="bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 text-white rounded-full">
          Learn more
        </button>
        <div className="flex flex-col items-center gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="bg-[#0A3440E3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Core banking service
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#0A0E40E3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Digital Banking & financial inclusion
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#400A3AE3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Online/mobile lending solution
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#0A3440E3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Staff augmentation solutions
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#40330AE3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Internal audit solutions
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#4A8C2BE3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Data Warehouse
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#0A3440E3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Business Intelligence
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#3CA3BAE3] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              KeySystem software testing
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
            <button className="bg-[#6012CEB8] h-20 w-full max-w-xs p-3 text-white rounded-full flex flex-col items-center text-sm">
              Cybersecurity Solutions
              <Image src={arrow} alt="arrow" width={10} height={10} />
            </button>
          </div>
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
