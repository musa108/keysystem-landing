import workers from "@/../public/image/workers.png";
import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";
export default function Services() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center gap-10 mt-32 text-white bg-[url('/image/line.png')] ">
        <h1 className=" text-2xl md:text-5xl font-bold text-center">
          Why we are your Trusted Consultant
        </h1>
        <p className="text-center">
          Empowering Businesses with Cutting-edge Technology
        </p>
        <h2 className="text-lg md:text-2xl max-w-[750px] font-light text-center">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </h2>
        <div className="mt-4 text-center space-y-6">
          <h3 className="text-lg md:text-xl">
            Watch the video to see how we are innovating to keep businesses on
            top of their games.
          </h3>
          <Image
            src={workers}
            alt="workers"
            width={985}
            height={535}
            className=""
          />
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
