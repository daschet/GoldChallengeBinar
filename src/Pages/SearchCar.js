import MenuAtas from "../Components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "../Components/Landing";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import CarCard from "../Components/CarCard";
import axios from "axios";
const SearchCar = (props) => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
      .then((res) => {
        setCar(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${carName}&category=${category}&isRented=${stat}&minPrice=${min}&maxPrice=${max}`
      )
      .then((res) => {
        setCar(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  
    }
  const [carName, setCarName] = useState(``);
  const handleChangeName = (e) => {
    setCarName(e.target.value);
  }

  const [category, setCategory] = useState(``);
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }
  const [stat, setStat] = useState(``);
  const handleStat = (e) => {
    setStat(e.target.value);
  }

  const [min, setMin] = useState(``);
  const handleMin = (e) => {
    setMin(e.target.value);
  }

  const [max, setMax] = useState(``);
  const handleMax = (e) => {
    setMax(e.target.value);
  }

  return (
    <div className="page">
      <MenuAtas />
      <span></span>
      <Landing isBtnShow={false} />
      <span></span>
      <Filter 
      nameFilter = {handleChangeName}
      categoryFilter = {handleChangeCategory}
      categoryStatus={handleStat}
      minPrice={handleMin}
      maxPrice={handleMax}
      handleSearch={handleFilter}

      />
      <span></span>
      <CarCard mobil={car} />
      <Footer />
    </div>
  );
};

export default SearchCar;
