import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
function App() {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
