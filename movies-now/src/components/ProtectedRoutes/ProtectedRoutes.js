import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
    const user = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;