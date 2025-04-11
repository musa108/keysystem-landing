import Image from "next/image";
import FadeInWhenVisible from "../Animation/FadeIn";

export default function Partners() {
  return (
    <FadeInWhenVisible>
      <main className="flex flex-col items-center mt-16 gap-6 text-white px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          They Trust Us
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-lg">
          And so can you
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            <Image
              src={"/image/lapo.png"}
              alt="lapo-image"
              width={180}
              height={20}
              className="h-12 md:h-16"
            />
            <Image
              src={"/image/npf.png"}
              alt="npf-image"
              width={180}
              height={20}
              className="h-12 md:h-16"
            />
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
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
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
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
            <Image
              src={"/image/bank--mus.png"}
              alt="bank-mus-image"
              width={180}
              height={20}
              className="h-12 md:h-16"
            />
            <Image
              src={"/image/cbs.png"}
              alt="cbs-image"
              width={180}
              height={20}
              className="h-12 md:h-16"
            />
            <Image
              src={"/image/santander.png"}
              alt="santander-image"
              width={180}
              height={20}
              className="h-12 md:h-16"
            />
          </div>
        </div>
      </main>
    </FadeInWhenVisible>
  );
}
