import './App.css';
import { Balance } from './components/Balance';
import { ExpProvider } from './components/ExpContext';
import { Head } from './components/Head';
import { LogInPage } from './components/LogInPage';
import { Main } from './components/Main';
import { MainLayout } from './components/MainLayout';
import { New } from './components/New';

function App() {
   return (
      <ExpProvider>
         <div>
            <MainLayout />
         </div>
      </ExpProvider>
   );
}

export default App;
