import "./App.css";
import { FaviconSwitcher, Header, Hero, LinksComponent, Navbar } from "./components/";
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
<>
  <Header />
  <Navbar />
  <nav>
    <Link to="/">Home</Link>
    <Link to="/links">Links</Link>
  </nav>
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
    <Route path="/links" element={<LinksComponent />} />
  </Routes>
</>
  );
}

export default App;
