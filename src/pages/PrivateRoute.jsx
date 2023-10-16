import { Navigate, Outlet, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole"

export default function PrivateRoute(props) {
    const {auth, role, user} = useRole();
    const { allowedRoles } = props;
    const location = useLocation();
     console.log('private route props', props);
     console.log('ini auth di private route', auth);
     console.log('ini role di private route', role);
    console.log('ini user di private route', user);

   if(allowedRoles !== ""){
        return auth ? (
            allowedRoles === role ? (
                <Outlet/>
            ) : (
                <Navigate to="/unauthorized"  state={{ from : location }} replace /> 
            )
        )  : (
            <Navigate to="/login" state={{ from:location }} replace />
        )
   }else{
     return auth ? <Outlet/> :   <Navigate to="/login" state={{ from:location }} replace />
   }


}