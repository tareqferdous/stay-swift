import SortHotel from "@/components/sort/SortHotel";
import FilterByAmenities from "./FilterByAmenities";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByStarCategory from "./FilterByStarCategory";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 border border-gray/20 space-y-4 shadow-lg rounded-xl p-5">
        <SortHotel />

        <FilterByPriceRange />
        <FilterByStarCategory />
        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;
