import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { navData } from '@/data/navber';
import Link from "next/link";
import HoverMenu from "./HoverMenu";
import { useRouter } from "next/router";
import { BsFillBellFill } from "react-icons/bs";
import BtnSetting from "./BtnSetting";

export default function TheNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter(); // add this line

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navData.map((navItem, index) => (
        <React.Fragment key={index}>
          {navItem?.headMenu.length === 0 ? (
            <Typography
              as="li"
              variant="small"
              color="blue"
              className={`p-1 text-lg font-medium font-font01  hover:text-blue-400 ${router?.pathname === navItem?.pathLink ? "text-blue-400" : "text-black"}`}
            >
              <Link href={navItem?.pathLink} className="flex items-center">
                {navItem?.name?.TH}
              </Link>
            </Typography>
          ) : (
            <HoverMenu>
              <MenuHandler>
                <Typography
                  as="li"
                  variant="small"
                  color="blue"
                  className={`p-1 text-lg font-medium font-font01 hover:text-blue-400 ${router?.pathname === navItem?.pathLink ? "text-blue-400" : "text-black"}`}
                >
                  <Link href={navItem?.pathLink} className="flex items-center">
                    {navItem?.name?.TH}
                  </Link>
                </Typography>
              </MenuHandler>
              <MenuList >
                {navItem?.headMenu.map((subItem, subIndex) => (
                  <li key={subIndex}
                    role="menuitem"
                    className={`block w-full cursor-pointer font-font01 font-medium select-none rounded-md px-3 pt-[9px] py-2 text-center transition-all hover:border-none hover:bg-blue-400 hover:text-white focus-visible:outline-none focus:border-none focus:bg-blue-400 focus:text-white active:border-none active:bg-blue-400 active:text-white ${router?.pathname === subItem?.pathLink ? "text-white bg-blue-400" : ""}`}
                  >
                    <Link href={subItem?.pathLink}>
                      {subItem.name?.TH}
                    </Link>
                  </li>
                ))}
              </MenuList>
            </HoverMenu>
          )}
        </React.Fragment>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between container mx-auto">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold font-font01"
          >
            <img src="./images/new-logo.png" className=" h-14 mx-auto" alt="" />
            <span className="text-blue-400">Me Prompt Tecnology</span>
          </Typography>
          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            <BtnSetting />
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Nav */}
        <Collapse open={openNav}>
          {navList}
          <BtnSetting />
        </Collapse>
      </Navbar>
    </>
  );
}