import React from 'react'
import {Outlet} from "react-router-dom";

const Auth = () => {
  return (
      <div className="w-full h-screen flex justify-center items-center bg-[]#f7f7f7">
        <div className="shadow-form max-w-[450px] w-full bg-white p-[24px] rounded-2xl">
          <Outlet/>
        </div>
      </div>)
}
export default Auth
