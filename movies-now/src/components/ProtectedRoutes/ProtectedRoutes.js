import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoutes = () => {
    const user = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes;