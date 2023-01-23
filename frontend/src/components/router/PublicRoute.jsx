import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
