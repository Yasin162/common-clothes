import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./Clothes";
import Home from "./Home";
import NavBar from "./NavBar";
import Clothing from "./Clothing";
import Carts from "./Carts";
import RequestItem from "./RequestItem";
import Cart from "./Cart";

function App() {
  return (
    <div class="app-div">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/clothes" element={<Clothes />} />
          <Route path="/clothes/:id" element={<Clothing />} />
          <Route exact path="/carts" element={<Carts />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route exact path="/request" element={<RequestItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
