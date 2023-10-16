import { Route, Routes } from 'react-router-dom';
//import routes from "./routes"
import './App.css'
// import NotFound from './pages/public/NotFound';
// import DashboardPage from './pages/public/Dashboard';
// import SignInPage from "./pages/authentication/sign-in";
// import SignUpPage from "./pages/authentication/sign-up";
// import EcommerceProductsPage from "./pages/e-commerce/products";
// import UserListPage from "./pages/users/list";
import PublicRoutes from './router/public/PublicRoutes';
import EmployeeRoutes from './router/users/EmployeeRoutes';
import SupervisorRoutes from './router/users/SupervisorRoutes';
import HrRoutes from './router/users/HrRoutes';
import NavbarSidebarLayout from './layouts/navbar-sidebar';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/public/authentication/Login';
import PublicRoute from './pages/PublicRoute';


const isPublicRoutes = PublicRoutes();
const isEmployeeRoutes = EmployeeRoutes();
const isSupervisorRoutes = SupervisorRoutes();
const isHrRoutes = HrRoutes();

const ROLES = {
  'HR' : 1,
  'Employee' : 2,
  'Supervisor' : 3
}


export default function App() {
 // const isComingSoon = true;

  return (
    <Routes>
       <Route path="/login" element={<Login/>} />

      <Route element={<NavbarSidebarLayout/>} >

            {/* public route */}
              <Route element={<PublicRoute />}>
                  {isPublicRoutes?.map((data, index) => {
                    return  <Route key={index} path={data.path} element={data.components} />
                    })}
              </Route>

          {/* private routes */}

            <Route element={<PrivateRoute allowedRoles={ROLES?.HR} />}>
                {isHrRoutes?.map((data, index) => {
             return  <Route key={index} path={data.path} element={data.components} />
            })}
            </Route>

             <Route element={<PrivateRoute allowedRoles={ROLES.Employee} />}>
                {isEmployeeRoutes?.map((data, index) => {
                return  <Route key={index} path={data.path} element={data.components} />
                })}
             </Route>

              <Route element={<PrivateRoute allowedRoles={ROLES.Supervisor} />}>
                    {isSupervisorRoutes?.map((data, index) => {
                  return  <Route key={index} path={data.path} element={data.components} />
                  })}
              </Route>

      </Route>
     
    </Routes>
  )
}


