import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute ({children, ...rest})  {
  const auth = true;
  console.log('hola from private route');

  // #way-1
  // return auth ? children : <Navigate to='/login' />

  // #way-2
  return auth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;