import { useState } from 'react';
import { LogInPage } from './LogInPage';
import { SignInPage } from './SigInPage';

export default function MainPage() {
   const [logIn, setLogIn] = useState(true);
   return (
      <div>
         {logIn ? (
            <LogInPage logIn={logIn} setLogIn={setLogIn} />
         ) : (
            <SignInPage logIn={logIn} setLogIn={setLogIn} />
         )}
      </div>
   );
}
