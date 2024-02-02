import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Slogan from "./components/slogan/Slogan";
import Cards from "./pages/Cards";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Slogan />
      <Cards />
    </Fragment>
  );
}

export default App;
