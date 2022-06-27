import "./App.css";
import Input from "./componens/Input";
import NavBar from "./componens/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="container">
      <div className="container-nav">
        <NavBar />
      </div>
      <div className="container-input">
        <Input />
      </div>
      <div className="container-item">
        <ItemListContainer greeting="Hola pueblo">
          <h1>Probando los children</h1>
          <h2>probando si funciona con todo</h2>
          <h3>parece que si</h3>
        </ItemListContainer>
      </div>
    </div>
  );
}

export default App;
