const FilterByStarCategory = () => {
  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="fiveStar">
          <input type="checkbox" name="5" id="fiveStar" />5 Star
        </label>

        <label htmlFor="fourStar">
          <input type="checkbox" name="4" id="fourStar" />4 Star
        </label>

        <label htmlFor="threeStar">
          <input type="checkbox" name="3" id="threeStar" />3 Star
        </label>

        <label htmlFor="twoStar">
          <input type="checkbox" name="2" id="twoStar" />2 Star
        </label>

        <label htmlFor="oneStar">
          <input type="checkbox" name="1" id="oneStar" />1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByStarCategory;
