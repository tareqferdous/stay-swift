import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo, checkin, checkout }) => {
  return (
    <div className="flex gap-6 border border-gray/20 shadow-lg rounded-2xl p-5">
      <Image
        src={hotelInfo?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px] rounded-lg"
        alt={hotelInfo?.name}
        width={240}
        height={165}
      />
      <HotelSummaryInfo
        fromListPage={true}
        info={hotelInfo}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default HotelCard;
