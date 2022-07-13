import "./App.css";
import Input from "./componens/Input";
import NavBar from "./componens/NavBar/index";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componens/NotFound";
import Cart from "../src/containers/Cart/index";
import ShopProvider from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="container">
          <div className="container-nav">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="container-input">
            <Input />
          </div>
          <div className="container-item"></div>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
