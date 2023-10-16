import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import { Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";


const NavbarSidebarLayout  = () =>  {
   const { role} = useRole();
   console.log(role, 'ini auth role');
  

    return role !== null ? (
      <>
        <Navbar />
        <div className="relative w-full  bg-gray-100">
          <Sidebar />
          <MainContent  ><Outlet/></MainContent>
        </div>
      </>
    ): (
         <MainContent  ><Outlet/></MainContent>
    )
  };

const MainContent = (props) =>  {
 // console.log(props, 'ini props');
   const {auth} = useRole();
   let {children} = props;

  return (
  
   <div className="px-4 mt-0 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
        <main className={`${auth !== true? 'h-screen min-h-screen ' : 'h-full ' } bg-gray-100 sm:ml-20 md:ml-64 p-2 relative  overflow-x-auto  dark:bg-gray-900 `}>
     {children} 

       {auth && (
        <div className="relative bottom-0 mt-20">
            <MainContentFooter />
        </div>
          
      )}  
    </main>

   </div>
  
  );
};

const MainContentFooter = () =>  {
  return (
    <>
      <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
        &copy; 2019-2022 Flowbite.com. All rights reserved.
      </p>
    </>
  );
};

export default NavbarSidebarLayout;
