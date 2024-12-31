import "./App.css";
import ComingSoon from "./components/ComingSoon";
import Counter from "./components/Counter";
import DarkTheme from "./components/DarkTheme";
import FaviconSwitcher from "./components/FaviconSwitcher";

function App() {
  return (
    <>
      <div className="all">
        {/* <DarkTheme /> */}
        <FaviconSwitcher />
        <ComingSoon />
        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
