import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar} from './components';
import { Transactions} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {activeMenu} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className=" flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 rounded-full hover:drop-shadow-xl text-white"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className=" sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg ">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-main-dark-bg"><Sidebar/></div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className=" fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="sirT9ewed" />
              <Route path="/sirT9ewed" element="sirT9ewed" />
              {/* Details */}
              <Route path="/transactions" element= <Transactions/> />
              <Route path="/edit" element="edit" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
