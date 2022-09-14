
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Register from './Register';
import Resetpassword from './Resetpassword';
import Resetpage from './Resetpage';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/reset" element={<Resetpassword/>}></Route>
      <Route path="/resetpage" element={<Resetpage/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;