import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Dashboard/header";
import SingIn from "./components/SignIn/sign_in_form";
import Home from "./components/Dashboard/Dashboard components/Home";
import Jobs from "./components/Dashboard/Dashboard components/Jobs";

function App() {
  return (
    <div >
      <div class="welcome">
        <p>
          Welcome @userName | <a href="#">FAQ</a> | <a href="#">LogOut</a>
        </p>
      </div>
      <Header />
      <SingIn />

      <Home/>
  <Jobs/>
    </div>
  );
}

export default App;
