import "./App.css";
import { FaviconSwitcher, Header, Hero, LinksComponent, Blog } from "./components/";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <FaviconSwitcher />
              <div className="all">
                <Hero />
              </div>
            </div>
          }
        />
        <Route
          path="/links"
          element={
            <div className="content">
              <div className="all">
                <LinksComponent />
              </div>
            </div>
          }
        />
        <Route
          path="/blog"
          element={
            <div className="content">
              <div className="all">
                <Blog />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
