import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarToggle,
  TextInput,
  Avatar,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme);
  return (
    <>
      <Navbar className="border-b-2">
        {/* Logo Section with the Home Link */}
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Tech
          </span>
          <span>Dossier</span>
        </Link>

        {/* Search Section */}
        <form>
          <TextInput
            type="text"
            placeholder="Search...."
            // righticon={AiOutlineSearch}
            className="hidden lg:inline rounded-xl"
          />
        </form>

        {/* Search Section for Small Device */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        {/* Drak Mode Enable Section */}
        <div className="flex gap-2 md:order-2">
          <button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </button>

          {/* Sign In Button */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToPink" outline>
                Sign In
              </Button>
              {/* <Button gradientDuoTone='purpletoBlue'>
                Sign In
            </Button> */}
            </Link>
          )}

          {/* Side Bar Icons */}
          <NavbarToggle />
        </div>

        {/* Menus */}
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/services"} as={"div"}>
            <Link to="/services">Services</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact-us"} as={"div"}>
            <Link to="/contact-us">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
