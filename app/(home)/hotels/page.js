import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/filter/Filter";
import Search from "@/components/search/Search";
import { Suspense } from "react";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <p className="text-xl font-semibold text-gray-700 animate-pulse">
        Getting hotels...
      </p>
    </div>
  );
}

const refineCategory = (category) => {
  const decodedCategory = decodeURI(category);
  if (decodedCategory === "undefined") {
    return "";
  }
  return decodedCategory;
};

const HotelListPage = ({
  searchParams: { destination, checkin, checkout, category, price },
}) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="relative w-full h-[120vh] sm:h-[65vh]">
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
            <div className="container items-center py-12 ">
              <Search
                fromList={true}
                destination={destination}
                checkin={checkin}
                checkout={checkout}
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container grid grid-cols-12 gap-4">
            <Filter />

            <HotelList
              destination={destination}
              checkin={checkin}
              checkout={checkout}
              category={refineCategory(category)}
              price={price}
            />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default HotelListPage;
