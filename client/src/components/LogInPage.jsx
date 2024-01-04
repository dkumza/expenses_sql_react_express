import { useContext } from 'react';
import { ExpContext } from './ExpContext';

import logo from '../assets/login-img.svg';

export const LogInPage = () => {
   const { logged, setLogged } = useContext(ExpContext);

   if (logged) return;

   return (
      <div className="md:w-[1024] flex items-center justify-center align-middle gap-4 min-h-screen">
         <div className="left w-2/3">
            <img className="min-h-full min-w-full" src={logo} alt="" />
         </div>
         <div className="w-1/3  flex flex-col h-full relative justify-center items-center">
            <h1 className="absolute -top-28 text-4xl font-light text-gray-700">
               My WALLET
            </h1>
            <form className="flex gap-4 flex-col w-full h-full">
               <div className="relative h-10 w-full min-w-[100px] ">
                  <input
                     //  value={amount}
                     //  onChange={(e) => setAmount(e.target.value)}
                     required
                     type="email"
                     className="peer h-full w-full rounded-[7px] border-2 border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  ></input>
                  <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Enter Email
                  </label>
               </div>
               <div className="relative h-10 w-full min-w-[100px]">
                  <input
                     //  value={amount}
                     //  onChange={(e) => setAmount(e.target.value)}
                     required
                     type="email"
                     className="peer h-full w-full rounded-[7px] border-2 border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  ></input>
                  <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Enter Password
                  </label>
               </div>
               <button className="border px-8 py-2 rounded-md bg-gradient-to-l from-sky-500 to-sky-700  text-white font-semibold  hover:bg-gradient-to-b">
                  Sign In
               </button>
            </form>
         </div>
      </div>
   );
};
