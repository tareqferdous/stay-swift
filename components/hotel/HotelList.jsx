import { getAllHotels } from "@/database/queries";
import { RiHotelLine } from "react-icons/ri";
import HotelCard from "./HotelCard";

const HotelList = async ({
  destination,
  checkin,
  checkout,
  category,
  price,
}) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category,
    price
  );

  return (
    <div className="col-span-9">
      <div className="flex items-center space-x-2 pt-0 pb-4">
        <RiHotelLine className="text-2xl text-rose-500" />
        <span className="font-bold text-xl">
          {destination}:{" "}
          <span className="font-semibold">
            {allHotels.length}{" "}
            {`${allHotels.length > 1 ? "Properties" : "Property"} found`}
          </span>
        </span>
      </div>
      <div className="space-y-4">
        {allHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotelInfo={hotel}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
