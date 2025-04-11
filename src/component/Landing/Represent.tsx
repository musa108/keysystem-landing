import darts from "@/../public/image/darts.png";
import microscope from "@/../public/image/microscope.png";
import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";
export default function Representation() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-16 gap-6 text-white px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          What we Represent
        </h1>
        <h3 className="text-sm sm:text-base lg:text-lg w-full sm:w-[400px] text-center">
          Our relentless pursuit of excellence is the driving force behind our
          success
        </h3>
        <p className="text-xs sm:text-sm lg:text-base w-full sm:w-[720px] text-center">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward. Watch the video to see
          how we are innovating to keep businesses on top of their games.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 my-8">
          <div className="bg-gradient-to-tr from-[#030517] text-white p-4 rounded-sm space-y-4 flex-1 max-w-sm sm:max-w-none">
            <Image
              src={darts}
              alt="darts"
              width={200}
              height={200}
              className="m-auto"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-center">
              Our Vision
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-center">
              To be the trusted partner for businesses seeking to leverage
              technology to improve decision-making, unlock new opportunities,
              and achieve transformative growth
            </p>
          </div>
          <div className="bg-gradient-to-tr from-[#030517] text-white p-4 rounded-sm space-y-4 flex-1 max-w-sm sm:max-w-none">
            <Image
              src={microscope}
              alt="microscope"
              width={155}
              height={155}
              className="m-auto"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-center">
              Our Mission
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-center">
              We bridge the gap between technology and business, delivering
              customized ICT solutions that drive efficiency, growth, and
              competitive advantage.
            </p>
          </div>
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
