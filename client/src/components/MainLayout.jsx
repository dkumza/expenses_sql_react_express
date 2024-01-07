import { useContext } from 'react';
import { Head } from './Head';
import { Main } from './Main';
import { New } from './New';
import { ExpContext } from './ExpContext';

import MainPage from './AuthPages/MainPage';
import { Balance } from './Balance';

export const MainLayout = () => {
   const { logged, setLogged } = useContext(ExpContext);
   return (
      <div className="main-wrap container mx-auto  min-h-screen relative flex flex-col items-center">
         {logged ? (
            <>
               <Head />
               <Balance />
               <New />
               <Main />
            </>
         ) : (
            <MainPage />
         )}
      </div>
   );
};
