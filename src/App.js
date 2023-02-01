import "./App.css";
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/Cart";
import { WishContextProvider } from "./context/Wish";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProductPreview from "./components/ProductPreview";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";

function App() {
  const [category, setCategory] = useState("");
  const selectedCategory = (value) => {
    setCategory(value);
  };
  const [selectedProduct,setSelectedProduct] = useState(null);
  
  const selectProduct= (value) =>{
        setSelectedProduct(value)
        // window.location.reload()
      console.log(selectedProduct)
  }
  return (
    <BrowserRouter>
      <CartContextProvider>
        <WishContextProvider>
          <Navbar selectedCategory={selectedCategory} />
          
          <Routes>
            
            <Route
              path="/"
              element={
                <>
                  <SlideBar />
                  <Products selectProduct={selectProduct} />
                </>
              }
            ></Route>
            <Route
              exact
              path="/Category"
              element={
                <>
                  <SlideBar />
                  <Categories category={category} selectProduct = {selectProduct} />
                </>
              }
            ></Route>
            <Route exact path="/ContactUs" element={ <ContactUs/>}/>
            <Route 
              exact path='/ProductPreview' 
              element={<ProductPreview product = {selectedProduct} selectProduct={selectProduct} />}
            />
            <Route exact path = "/AboutUs" element = {<AboutUs/>}/> 
            <Route exact path = "/SignIn" element = {<SignIn/>}/>
          
          </Routes>
          <Footer />
        </WishContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
