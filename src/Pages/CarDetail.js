import'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import MenuAtas from '../Components/NavBar';
import axios from "axios"

const CarDetail = () => {
    const [carData, setCardata] = useState({})

    useEffect (() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res)
            setCardata(res.data)
        })
        .catch((err)=> console.log(err.message))
    }, [])

    return (
    <div>
        <MenuAtas />
        {!!carData.length ? carData.map((item)=> {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <button>PIJIT INI</button>
                </div>
            )
        }) : null}
        <h1>
            Ini Car Detail
        </h1>
    </div>
    )
}

export default CarDetail ;