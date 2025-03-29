import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ showNav, handleShowNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}
      >
        <Link href="">
          <p className=" text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Home
          </p>
        </Link>

        <Link href="">
          <p className=" text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Home
          </p>
        </Link>

        <Link href="">
          <p className=" text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Home
          </p>
        </Link>

        <Link href="">
          <p className=" text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Home
          </p>
        </Link>

        {/* Close Button */}
        <CgClose
          onClick={handleShowNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
