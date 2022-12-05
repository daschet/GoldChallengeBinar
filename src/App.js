import './App.css';
import HomePage from './Pages/HomePage';
import SearchCar from './Pages/SearchCar';
import CarDetail from './Pages/CarDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<HomePage/>} />
        <Route path = "/carimobil" element ={<SearchCar/>} />
        <Route path = "/detailmobil/:id" element ={<CarDetail/>} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
