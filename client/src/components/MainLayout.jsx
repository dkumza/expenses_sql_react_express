import { useContext } from 'react';
import { Head } from './Head';
import { LogInPage } from './LogInPage';
import { Main } from './Main';
import { New } from './New';
import { ExpContext } from './ExpContext';

export const MainLayout = () => {
   const { logged, setLogged } = useContext(ExpContext);
   return (
      <div className="main-wrap container mx-auto  min-h-screen relative flex flex-col items-center">
         {logged ? (
            <>
               <Head />
               <New />
               <Main />
            </>
         ) : (
            <LogInPage logged={logged} setLogged={setLogged} />
         )}
      </div>
   );
};
