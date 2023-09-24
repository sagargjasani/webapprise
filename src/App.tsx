import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { useActions } from "./hooks/useActions";
import Fav from "./components/Pages/Fav";
function App() {
  const { loadData } = useActions();
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(({ data }) => {
      loadData(data.products);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
