import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-around bg-nav p-4">
      <div className="">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon hover:text-red-400" />
        </Link>
        </div>
        <div>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon hover:text-red-400" />
        </Link>
        </div>
      
      <div>
        <p className=" text-default-text">test@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;