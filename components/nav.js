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
            <Link href="/">Home</Link>
          </div>

          <div className={"hidden md:flex mx-4 " + (router.pathname == "/two" ? "border-b-2 border-red-500" : "")}>
            <Link href="/two">Two</Link>
          </div>

          <div className={"hidden md:flex mx-4 " + (router.pathname == "/three" ? "border-b-2 border-red-500" : "")}>
            <Link href="/three">Three</Link>
          </div>

        </div>

        {/* Mobile menu button  */}
        <div className="md:hidden flex items-center">
          <MenuIcon onClick={() => { setShowMobileMenu(!showMobileMenu) }} className="h-5 w-5 text-white" />
        </div>


        {/* Mobile menu items  */}

        <div className={"md:hidden " + (showMobileMenu ? "" : "hidden")}>
          <ul className="">
            <li onClick={() => { setShowMobileMenu(!showMobileMenu) }} className="active"><Link href="/two" activeClassName="text-white bg-green-500 font-semibold" className="block text-sm px-2  pt-8 pb-4 ">Two</Link></li>
            <li onClick={() => { setShowMobileMenu(!showMobileMenu) }} className="active"><Link href="/three" activeClassName="text-white bg-green-500 font-semibold" className="block text-sm px-2 py-4 ">Three</Link></li>

          </ul>
        </div>



      </div>













    </>
  );
};

export default Nav;
