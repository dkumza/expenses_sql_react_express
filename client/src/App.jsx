import './App.css';

import { ExpProvider } from './components/ExpContext';
import { MainLayout } from './components/MainLayout';

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
