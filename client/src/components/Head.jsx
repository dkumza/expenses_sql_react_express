import { useContext } from 'react';
import { ExpContext } from './ExpContext';

export const Head = () => {
   const { logged, setLogged } = useContext(ExpContext);
   return (
      <div className=" pt-8 pb-2 text-center text-4xl uppercase md:w-[560px] ">
         <div
            onClick={() => setLogged(false)}
            className=" text-right pb-4 hover:cursor-pointer hover:underline text-xs text-sky-600"
         >
            <i className="bi bi-door-open"></i> Log Out
         </div>
         <h1>expenses tracker</h1>
      </div>
   );
};
