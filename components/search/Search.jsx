"use client";

import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const twoDaysLater = new Date();
  twoDaysLater.setDate(twoDaysLater.getDate() + 2);

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin || new Date(),
    checkout: checkout || twoDaysLater,
  });

  const [allowSearch, setAllowSearch] = useState(true);

  const handleDestination = (event) => {
    setSearchTerm({
      ...searchTerm,
      destination: event.target.value,
    });
  };

  const handleDateChange = (key, date) => {
    const state = {
      ...searchTerm,
      [key]: format(date, "yyyy-MM-dd"),
    };
    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    setSearchTerm(state);
  };

  const doSearch = (event) => {
    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm?.destination || "all");
    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                onChange={handleDestination}
                defaultValue={searchTerm?.destination}
                name="destination"
                id="destination"
                className="border border-gray-300 rounded p-2"
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div className="w-full ">
            <span>Check in</span>
            <h4 className="mt-2">
              <DatePicker
                className="w-full p-2 border border-gray-300 rounded"
                wrapperClassName="w-full"
                placeholderText="MM/dd/yyyy"
                selected={searchTerm?.checkin}
                minDate={new Date()}
                onChange={(date) => handleDateChange("checkin", date)}
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <DatePicker
                className="w-full p-2 border border-gray-300 rounded"
                wrapperClassName="w-full"
                placeholderText="MM/dd/yyyy"
                selected={searchTerm?.checkout}
                minDate={searchTerm?.checkin || new Date()}
                onChange={(date) => handleDateChange("checkout", date)}
              />
            </h4>
          </div>
        </div>
      </div>

      <button onClick={doSearch} disabled={!allowSearch} className="search-btn">
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
