import { useState } from 'react';
import logo from '../../assets/login-img.svg';
import axios from 'axios';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';

const BASE_URL = 'http://localhost:3000/api';

export const SignInPage = ({ logIn, setLogIn }) => {
   const [email, setEmail] = useState('');
   const [psw, setPsw] = useState('');
   const [valPsw, setValPsw] = useState('');

   const handleNewUser = (e) => {
      e.preventDefault();

      if (psw !== valPsw) return alert('Passwords do not match');

      const newUser = {
         email,
         password: psw,
      };
      axios
         .post(`${BASE_URL}/auth/reg`, newUser)
         .then((res) => {
            if (res.status === 200) {
               alert('User created successfully');
               setLogIn(true);
               setEmail('');
               setPsw('');
               setValPsw('');
            }
         })
         .catch((err) => {
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
               Create account
            </h1>
            <form
               className="flex gap-4 flex-col w-full h-full"
               onSubmit={handleNewUser}
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
                  label="Create password"
               />
               <Input
                  data={valPsw}
                  setData={setValPsw}
                  type="password"
                  label="Repeat password"
               />
               <Button
                  style={'w-full from-green-500 to-lime-500 text-white'}
                  label={'Sign In'}
               />

               <div
                  className="text-lime-500 text-right hover:underline cursor-pointer"
                  onClick={() => setLogIn(true)}
               >
                  I have account
               </div>
            </form>
         </div>
      </div>
   );
};
