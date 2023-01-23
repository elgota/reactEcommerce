import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
