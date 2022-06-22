import { MenuIcon } from '@heroicons/react/solid'

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false)


  return (
    <>
      <div className="flex justify-between  bg-black text-white p-4 ">

        {/* Large screen Menu items on the LEFT */}

        <div className='flex'>
          <div className={"mx-4 " + (router.pathname == "/" ? "border-b-2 border-red-500" : "")}>
            <Link href="/">One</Link>
          </div>

          <div className={"hidden md:flex mx-4 " + (router.pathname == "/two" ? "border-b-2 border-red-500" : "")}>
            <Link href="/two">Two</Link>
          </div>

          <div className={"hidden md:flex mx-4 " + (router.pathname == "/three" ? "border-b-2 border-red-500" : "")}>
            <Link href="/three">Three</Link>
          </div>

        </div>

        {/* Mobile menu button  */}
        <div className="md:hidden absolute right-0 flex flex-col justify-items-end bg-black o ">
          <div  className=' flex justify-end pr-2 ' >
            <MenuIcon onClick={() => { setShowMobileMenu(!showMobileMenu) }} className="h-5 w-5  text-white  " />
          </div>
          <div className={"   md:hidden " + (showMobileMenu ? "" : "hidden")}>
            <ul className=" flex bg-black px-6 py-2 justify-text-end rounded flex-col">
              <li onClick={() => { setShowMobileMenu(!showMobileMenu) }} className={"flex justify-end "    + (router.pathname == "/two" ? "text-red-500" : "")     }><Link href="/two">Two</Link></li>
              <li onClick={() => { setShowMobileMenu(!showMobileMenu) }} className={"flex justify-end " + (router.pathname == "/three" ? "text-red-500" : "")}><Link href="/three">Three</Link></li>

            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Nav;
