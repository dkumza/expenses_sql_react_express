import "./App.css";
import { Balance } from "./components/Balance";
import { ExpProvider } from "./components/ExpContext";
import { Head } from "./components/Head";
import { Main } from "./components/Main";
import { New } from "./components/New";

function App() {
   return (
      <ExpProvider>
         <div className="main-wrap container mx-auto  min-h-screen relative md:w-[560px] flex flex-col items-center">
            <Head />
            <Balance />
            <New />
            <Main />
         </div>
      </ExpProvider>
   );
}

export default App;
