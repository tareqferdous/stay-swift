"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByPriceRange = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedPrice, setSelectedPrice] = useState(
    searchParams.get("price")?.split("|") || []
  );

  const priceRanges = [
    { label: "$1000 - $1600", min: 1000, max: 1600 },
    { label: "$1600 - $2000", min: 1600, max: 2000 },
    { label: "$2000 - $2500", min: 2000, max: 2500 },
    { label: "$2500 - $3000", min: 2500, max: 3000 },
    { label: "$3000 - $3500", min: 3000, max: 3500 },
  ];

  const handlePriceChange = (range) => {
    const priceRange = `${range.min}-${range.max}`;
    let updatedPrices = selectedPrice.includes(priceRange)
      ? selectedPrice.filter((p) => p !== priceRange)
      : [...selectedPrice, priceRange];

    setSelectedPrice(updatedPrices);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedPrice.length > 0) {
      params.set("price", selectedPrice.join("|"));
    } else {
      params.delete("price");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [selectedPrice]);

  return (
    <div>
      <h3 className="font-bold text-lg">Price Range</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        {priceRanges.map((range) => (
          <label key={range.label} htmlFor="range1">
            <input
              onChange={() => handlePriceChange(range)}
              type="checkbox"
              name="range1"
            />{" "}
            {range.label}
          </label>
        ))}
      </form>
    </div>
  );
};

export default FilterByPriceRange;
