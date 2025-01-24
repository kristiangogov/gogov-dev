import "./App.css";
import {
  FaviconSwitcher,
  Header,
  Hero,
  LinksComponent,
  Blog,
  BlogPost,
} from "./components/";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/contentfulSlice";
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
            <div className="content margin flex-center">
              <FaviconSwitcher />
              <Hero />
            </div>
          }
        />
        <Route
          path="/links"
          element={
            <div className="content margin flex-center">
              <LinksComponent />
            </div>
          }
        />
        <Route
          path="/blog"
          element={
            <div className="content margin flex-center">
              <Blog />
            </div>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <div className="content margin flex-center">
              <BlogPost />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
