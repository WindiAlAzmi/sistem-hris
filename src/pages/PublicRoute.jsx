import { Navigate, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole"

export default function PublicRoute() {
    const {auth} = useRole();

   return auth? <Outlet/> :  <Navigate to="/login" />

}
