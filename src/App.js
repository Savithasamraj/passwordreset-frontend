
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Register from './Register';
import Resetpassword from './Resetpassword';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/reset" element={<Resetpassword/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;