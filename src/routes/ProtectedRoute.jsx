/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute =({loggedIn})=> {

    if (!loggedIn){
     return   <Navigate  to={'/login'} replace/>
    }else{
        return <Outlet/>;
    }

}
export default ProtectedRoute