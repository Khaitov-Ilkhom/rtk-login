import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const Protected = () => {
  const {token} = useSelector(state => state.auth)
  return token ? <Outlet/> : <Navigate to={'/auth'} />
}
export default Protected
