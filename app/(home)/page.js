import Search from "@/components/search/Search";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video
        src="/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="container absolute z-[100] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="col-span-7">
          <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.2rem] text-white font-bold uppercase">
            Hotel for memorable moments <br />
            rich in emotions
          </h1>

          <p className="my-2 text-gray-200 text-center">
            We have 459 rooms spread throuout Indonesia with room standards
            equivalent to 5 star hotels.
          </p>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Search />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
