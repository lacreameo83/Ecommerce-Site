// import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { GlobalContext } from "../Context/GlobalContext";

const ProtectedRoute = ({ children }) => {
  //   let { islogin } = useContext(GlobalContext);
  const isUser = true;
  if (isUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
