import React, {Component} from "react";
import './App.css';
import MenuKontak from ".//Page/MenuKontak";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";

const Header = ()=>{
  return(
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
}

const Footer = () =>{
  return(
    <div>
      <h4>Ini Halaman Untuk Footer</h4>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <MenuKontak />
        <MenuProduct />
        <MenuTentangKami />
        <MenuUtama />
        <Footer />
      </div>
    );
  }
}

export default App;
