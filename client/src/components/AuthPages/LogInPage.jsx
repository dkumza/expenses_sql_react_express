import { useContext, useState } from 'react';

import logo from '../../assets/login-img.svg';
import axios from 'axios';
import { ExpContext } from '../ExpContext';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';

const BASE_URL = 'http://localhost:3003/api';

export const LogInPage = ({ logIn, setLogIn }) => {
   const { logged, setLogged } = useContext(ExpContext);
   const [email, setEmail] = useState('');
   const [psw, setPsw] = useState('');

   const handleLogIn = (e) => {
      e.preventDefault();

      const user = {
         email,
         password: psw,
      };

      axios
         .post(`${BASE_URL}/auth/log`, user)
         .then((res) => {
            if (res.status === 200) {
               setEmail('');
               setPsw('');
               setLogged(true);
            }
         })
         .catch((err) => {
            const { status, data } = err.response;
            alert(data.msg);
            console.warn('ERROR: ', err);
         });
   };
   return (
      <div className="md:w-[1024] flex items-center justify-center align-middle gap-4 min-h-screen">
         <div className="left w-2/3">
            <img className="min-h-full min-w-full" src={logo} alt="" />
         </div>
         <div className="w-1/3  flex flex-col h-full relative justify-center items-center">
            <h1 className="absolute -top-28 text-4xl font-light text-gray-700">
               Log In
            </h1>
            <form
               className="flex gap-4 flex-col w-full h-full"
               onSubmit={handleLogIn}
            >
               <Input
                  data={email}
                  setData={setEmail}
                  type="email"
                  label="Enter email"
               />
               <Input
                  data={psw}
                  setData={setPsw}
                  type="password"
                  label="Enter password"
               />
               <Button
                  style={'w-full from-sky-500 to-sky-700 text-white'}
                  label={'Log In'}
               />
               <div
                  className="text-sky-700 text-right hover:underline cursor-pointer"
                  onClick={() => setLogIn(false)}
               >
                  Create account
               </div>
            </form>
         </div>
      </div>
   );
};
