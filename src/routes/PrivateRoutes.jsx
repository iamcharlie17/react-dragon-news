import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const location = useLocation()
    console.log("private" , location)

    const {user, loading } =useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;