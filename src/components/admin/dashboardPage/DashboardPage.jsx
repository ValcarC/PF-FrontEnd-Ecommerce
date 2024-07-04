import React from 'react';
import logo from "../../../assets/images/VEGA.svg";
import { AiFillFile, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="grid grid-rows-6 h-screen">
      <div className="row-span-1 bg-gray-800 text-white flex items-center justify-between p-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-1 p-2">
            <img
              src={logo}
              alt="logo ReactiveMind"
              className="w-[52px] h-[52px] transform hover:rotate-90 transition-transform duration-300 ease-in-out"
            />
            <div className="text-[24px] font-light text-[#06B6D4] tracking-wider mb-1">
              VEGA
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-5 grid grid-cols-12">
        <div className="col-span-2 bg-gray-700 text-white flex flex-col p-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-600 p-2 rounded">
            <AiFillFile className="text-xl" />
            <span>Plantillas</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-600 p-2 rounded">
            <AiOutlineUser className="text-xl" />
            <span>Usuarios</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-600 p-2 rounded mt-auto">
            <AiOutlineLogout className="text-xl" />
            <span>Cerrar Sesión</span>
          </div>
        </div>
        <div className="col-span-10 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
