import "./App.css";
import { ComingSoon, FaviconSwitcher, Header, Hero } from "./components/";

function App() {
  return (
    <>
      <Header />
      <div className="content">
      <FaviconSwitcher />
      <div className="all">
      <Hero/>
      </div>
      </div>
    </>
  );
}

export default App;
