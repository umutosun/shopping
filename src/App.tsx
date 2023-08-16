import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart/Cart";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodcuts/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
