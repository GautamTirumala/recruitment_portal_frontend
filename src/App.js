
import "./App.css";
import SignInForm from './components/SignIn/sign_in_form'
import Home from "./components/Dashboard/Dashboard components/Home";
import Jobs from "./components/Dashboard/Dashboard components/Jobs";
import Header from "./components/Dashboard/header";
import Register from "./components/Registration/Registration";
import Messages from "./components/Dashboard/Dashboard components/Messages";
import Submitted_candidates from "./components/Dashboard/Dashboard components/Submitted_Candidates";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/register"element={<Register/>}/>
    <Route exact path="/"element={<SignInForm/>}/>
    {/* <Route exact path="/"element={<Header/>}/> */}

    <Route exact path="/home"element={<Home/>}/>
    <Route exact path="/messages"element={<Messages/>}/>
    <Route exact path="/jobs"element={<Jobs/>}/>
    <Route exact path="/submitted_candidates"element={<Submitted_candidates/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
