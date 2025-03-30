import SortHotel from "@/components/sort/SortHotel";
import { FaFilter } from "react-icons/fa";
import FilterByAmenities from "./FilterByAmenities";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByStarCategory from "./FilterByStarCategory";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 border border-gray/20 space-y-4 shadow-lg rounded-xl ">
        <div className="flex items-center space-x-2 border-b p-4">
          <FaFilter className="text-lg text-rose-500" />
          <span className="font-bold text-xl">Filter</span>
        </div>
        <div className="pt-0 px-5 pb-5">
          <SortHotel />
          <FilterByPriceRange />
          <FilterByStarCategory />
          <FilterByAmenities />
        </div>
      </div>
    </>
  );
};

export default Filter;
