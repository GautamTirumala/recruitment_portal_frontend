
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Dashboard/header';
import SingIn from './components/sign_in_form'
function App() {
  return (
    <div>
      <div class='welcome'>
      <p >Welcome @userName | <a href='#'>FAQ</a> | <a href='#'>LogOut</a></p>
      </div>
   <Header/>
  
  </div>
   
  );
}

export default App;
