import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../store";

// const RequireAuth: React.FC<{ allowedRole: string[] }> = ({ allowedRole }) => {
//   const location = useLocation();
//   const user = useSelector((state: RootState) => state.user);

//   return allowedRole.includes(user.role) ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/log-in" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;

function RequireAuth() {
  return <section>RequireAuth</section>;
}

export default RequireAuth;
