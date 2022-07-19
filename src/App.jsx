import "./App.css";
import Input from "./componens/Input";
import NavBar from "./componens/NavBar/index";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componens/NotFound";
import Cart from "../src/containers/Cart/index";
import ShopProvider from "./context/ShopContext";
import CounterContainer from "./CounterContainer";
// import LoadingComponent from "./componens/LoadingComponent";
// import ReturnTemprano from "./componens/ReturnTemprano";
// import BinaryOperator from "./componens/BinaryOperator";
// import Title from "./componens/Title";
// import TitleClass from "./componens/TitleClass";
// import TitleStyleOpcionales from "./componens/TitleStyleOpcionales";

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
      <CounterContainer />
      {/* <LoadingComponent />
      <ReturnTemprano condition={false} /> */}
      {/* <BinaryOperator condition={true} />
      <Title type="importante" title={"no hay stock"} />
      <TitleClass type="importantes" title="el verde no es importante" />
      <TitleStyleOpcionales
        title="coderhouse"
        style={{ fontSize: 24, fontStyle: "italic"  }}
      /> */}
    </ShopProvider>
  );
}

export default App;
