import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import NewCar from './Pages/NewCar';
import CarDetail from './Pages/CarDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<HomePage/>} />
        <Route path = "/detailmobil" element ={<CarDetail/>} />
        <Route path = "/mobilterbaru" element ={<NewCar/>} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
