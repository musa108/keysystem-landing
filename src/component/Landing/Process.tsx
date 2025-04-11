import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function Process() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-16 gap-6 text-white px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Our Process
        </h1>
        <p className="text-center">
          At KeySystem, we leave you with a lasting impression
        </p>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-4 bg-gradient-to-r from-[#04050B] to-[#181B4D] py-6 rounded-lg">
            <div className="flex flex-col items-start gap-4 text-center md:text-left">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Strategic Consultation
              </h1>
              <p className="max-w-xs md:max-w-sm">
                We kick off with a strategic consultation to understand your
                brand, goals, and audience
              </p>
            </div>
            <Image
              src={"/image/box.png"}
              alt="box"
              width={200}
              height={400}
              className="w-32 sm:w-48 md:w-56 lg:w-64"
            />
          </div>
          <div className="flex max-lg:flex-col gap-6 px-4 bg-gradient-to-r from-[#04050B] to-[#181B4D] py-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
              <div className="flex flex-col items-start gap-4 text-center md:text-left">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Collaboration
                </h1>
                <p className="max-w-xs md:max-w-64">
                  At KeySystem, we collaborate closely to ensure the end result
                  meets your expectations and makes you happy
                </p>
              </div>
              <Image
                src={"/image/handshake.png"}
                alt="handshake"
                width={200}
                height={400}
                className="w-32 sm:w-48 md:w-56 lg:w-64"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
              <div className="flex flex-col items-start gap-4 text-center md:text-left">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Delivery
                </h1>
                <p className="max-w-xs md:max-w-64">
                  Our delivery rate is 100%; our clients deserve nothing less.
                </p>
              </div>
              <Image
                src={"/image/checker.png"}
                alt="checker"
                width={200}
                height={400}
                className="w-32 sm:w-48 md:w-56 lg:w-64"
              />
            </div>
          </div>
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
