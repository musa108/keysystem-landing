import Image from "next/image";
import hero_image from "@/../public/image/Hero--image.png";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function Hero() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-16 px-4 md:px-8">
        <button className="text-white text-xs bg-[#2E6D9C] py-2 px-6 md:px-10 rounded-full border-white border">
          Welcome to KeySystem
        </button>
        <div className="text-center w-full max-w-[660px] mt-6 space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold">
            IT Consulting for Forward-thinking Businesses
          </h1>
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-normal text-white">
            Driving Digital Transformation, One Solution at a Time
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-6 md:px-8 text-white rounded-full border border-[#4169E1]">
            Get Started
          </button>
          <button className="bg-[#000080] py-3 px-6 md:px-8 text-white rounded-full">
            Learn More
          </button>
        </div>
        <div className="w-full mt-20">
          <Image
            src={hero_image}
            alt="hero--image"
            width={965}
            height={475}
            className="m-auto max-w-full h-auto"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-20">
          <Image
            src={"/image/sterling.png"}
            alt="sterling-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/crusader.png"}
            alt="crusader-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/nafc.png"}
            alt="nafc-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/nbf.png"}
            alt="nbf-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/mpb.png"}
            alt="mpb-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/stanbic--bank.png"}
            alt="stanbic-bank-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
          <Image
            src={"/image/bank--mus.png"}
            alt="bank-mus-image"
            width={180}
            height={20}
            className="h-12 md:h-16"
          />
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
