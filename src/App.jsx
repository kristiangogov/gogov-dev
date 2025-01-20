import "./App.css";
import { FaviconSwitcher, Header, Hero, LinksComponent, Blog, BlogPost } from "./components/";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchData } from './features/contentfulSlice';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
}, []);
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
        <Route
          path="/blog/:slug"
          element=<BlogPost/>
        />
      </Routes>
    </>
  );
}

export default App;
