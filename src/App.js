import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import VistaSecun from "./Pages/VistaSecun";
import { Cupcakes } from "./Pages/Cupcakes";
import { Pastels } from "./Pages/Pastel";
import { Paletas } from "./Pages/PaletaPastel";
import { useState } from "react";
import ListProducts from "./Pages/ListProducts";

function App() {
  /*Estado para los productos que se agregan al carrito*/
  const [allProducts, setAllProducts] = useState([]);
  /*Total */
  const [total, setTotal] = useState(0);
  /*contador de productos */
  const [countProducts, setCountProducts] = useState(0);

  console.log("add", allProducts, total);

  return (
    <div className="App">
      <Header allProducts={allProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VistaSecun" element={<VistaSecun />} />
        
        <Route
          path="/Cupcakes"
          element={
            <Cupcakes
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/Pastels"
          element={
            <Pastels
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/Paletas"
          element={
            <Paletas
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/ListProducts"
          element={
            <ListProducts
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
      </Routes>

      <Footer texto1="Derechos reservados-Nico´s Cupcakes" texto2="2022" />
    </div>
  );
}

export default App;
