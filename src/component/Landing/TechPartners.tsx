import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function TechPartners() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-24 gap-6 text-white  px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Our Partners
        </h1>
        <p className="">Creating a Synergy with global brands</p>
        <Image
          src={"/image/tech-logos.png"}
          alt="sterling-image"
          width={1020}
          height={20}
          className="h-12 md:h-20"
        />
      </main>
    </FadeInWhenVisible>
  );
}
