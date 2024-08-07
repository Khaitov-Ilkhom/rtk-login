import {useRoutes} from "react-router-dom";
import {lazy} from "react";
import {SuspenseElement as Suspense} from "../utils/Index.jsx";

const Home = lazy(() => import("./home/Home.jsx"))
const Auth = lazy(() => import("./auth/Auth.jsx"))
const Login = lazy(() => import("./auth/login/Login.jsx"))
const Dashboard = lazy(() => import("./dashboard/Dashboard.jsx"))
const Register = lazy(() => import("./auth/register/Register.jsx"))
const Protected = lazy(() => import("./protected/Protected.jsx"))
const Profile = lazy(() => import("./dashboard/profile/Profile.jsx"))
const Products = lazy(() => import("./dashboard/products/Products.jsx"))
const Users = lazy(() => import("./dashboard/users/Users.jsx"))
const Carts = lazy(() => import("./dashboard/carts/Carts.jsx"))
const Notification = lazy(() => import("./dashboard/notification/Notification.jsx"))
const LikedProducts = lazy(() => import("./dashboard/liked-products/LikedProducts.jsx"))


const RoutController = () => {

  return useRoutes([
    {
      path: "",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "auth",
      element: <Suspense><Auth/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><Login/></Suspense>
        },
        {
          path: "register",
          element: <Suspense><Register/></Suspense>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Suspense><Dashboard/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><Protected/></Suspense>,
          children: [
            {
              path: "",
              element: <Suspense><Products/></Suspense>,
            },
            {
              path: "profile",
              element: <Suspense><Profile/></Suspense>,
            },
            {
              path: "liked-products",
              element: <Suspense><LikedProducts/></Suspense>
            },
            {
              path: "users",
              element: <Suspense><Users/></Suspense>
            },
            {
              path: "carts",
              element: <Suspense><Carts/></Suspense>
            },
            {
              path: "notification",
              element: <Suspense><Notification/></Suspense>
            }
          ]
        }
      ]
    }
  ])
}
export default RoutController
