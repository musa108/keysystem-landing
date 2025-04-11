import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function GettingStarted() {
  return (
    <FadeInWhenVisible>
      <main className=" flex flex-col items-center justify-center my-24 text-white  px-4 sm:px-8 lg:px-16">
        <div className="flex max-md:flex-col items-center max-md:py-4  bg-gradient-to-r from-[#030517] to-[#181B4D] rounded-xl">
          <div className="space-y-3">
            <h1 className="text-base md:text-lg sm:text-xl lg:text-2xl font-bold ">
              Ready to get started?
            </h1>
            <p className="text-xs">Shoot us a mail</p>
            <h2 className="max-w-[600px]">
              Join numerous corporations, organizations, and businesses as they
              scale their teams, tap into new market opportunities and build
              innovative products with KeySystem Technology
            </h2>
            <h3 className="max-w-[600px]">
              Join thousands of students who are ready to learn new skills or
              take their career to the next level by enrolling in one of our
              training programs today.
            </h3>
            <button className="bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-6 md:px-8 text-white rounded-full border border-[#4169E1]">
              Send us a mail now
            </button>
          </div>
          <Image
            src={"/image/half-circle.png"}
            alt="sterling-image"
            width={200}
            height={350}
            className="h-64 md:h-[350px] max-md:hidden"
          />
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
