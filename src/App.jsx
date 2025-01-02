import "./App.css";
import { ComingSoon, FaviconSwitcher, Header } from "./components/";

function App() {
  return (
    <>
      <Header />
      <div className="content">
      <FaviconSwitcher />
      <div className="all">
      <ComingSoon/>
      </div>
      </div>
    </>
  );
}

export default App;
