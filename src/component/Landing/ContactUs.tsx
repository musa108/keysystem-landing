import sponsors from "@/../public/image/sponsors.png";
import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";
export default function ContactUs() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center gap-10 text-white mt-22 text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold w-full md:w-[545px]">
          Compliance Certifications/Standards We Specialize In
        </h1>
        <p className="w-full max-w-[450px]">
          Elevate Your Organization`s Security Posture with Our
          Compliance/Standards Consulting Services
        </p>
        <button className="bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 text-white rounded-full border border-[#4169E1]">
          Contact us
        </button>
        <div className="w-full flex justify-center">
          <Image
            src={sponsors}
            alt="sponsors"
            width={1020}
            height={600}
            className="w-full max-w-[1020px] h-auto"
          />
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
