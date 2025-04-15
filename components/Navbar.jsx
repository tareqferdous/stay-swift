import { auth } from "@/auth";
import Link from "next/link";
import { TbAirBalloon } from "react-icons/tb";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
          <TbAirBalloon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl md:text-2xl uppercase font-bold">Tripi</h1>
      </Link>

      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {session?.user ? (
              <div>
                <span className="mx-1"> {session?.user?.name} </span>
                <span> | </span>
                <Logout />
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
