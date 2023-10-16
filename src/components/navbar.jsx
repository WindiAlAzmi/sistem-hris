/* eslint-disable react/jsx-no-undef */
import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import useRole from "../hooks/useRole";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrDeleteSidebar } from "../store/generalSlice";

const ExampleNavbar = () => {
  const { user } = useRole();
  const dispatch = useDispatch();


  console.log(user, "ini user di navbar");

  const sidebarHandle = () => {
    console.log('runn sidebqar');
    dispatch(setOrDeleteSidebar())
  }

  return (
    <div className="w-full  bg-white dark:text-white  dark:bg-gray-700 fixed z-30 p-3">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Navbar.Brand href="/">
            <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              HRIS
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex items-center gap-3">
          <DarkThemeToggle />
          <button
            onClick={() => sidebarHandle()}
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.image} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.name}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/settings">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ExampleNavbar;
