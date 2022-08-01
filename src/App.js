import './App.css';
import  React  from "react";
import Login from './components/Login/Login'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (


    <Router>
    
    <div className="App">

      <Routes>

      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />}/>

      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />



      </Routes>
      
    </div>

    </Router>
  );
}

export default App;
