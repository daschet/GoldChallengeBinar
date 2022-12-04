import'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import MenuAtas from '../Components/NavBar';
import Filter from '../Components/Filter';
import axios from "axios"
import "./Pages.css"
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const CarDetail = () => {
    const [carData, setCardata] = useState({})

    useEffect (() => {
        axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res) => {
            console.log(res)
            setCardata(res.data.cars)
        })
        .catch((err)=> console.log(err.message))
    }, [])

    return (
    <div>
        <MenuAtas/>
        <div className='flavor'>
        </div>
        <Filter/>
        <div className='detailWrap'>
            <div className='wallOfText'>
                <h5>Tentang Paket</h5>
                <ul>Include</ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li> Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                <ul>Exclude</ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                <ul>Include</ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
            </div>
            <div>
                <img src=''/>
                <h5></h5>
                <p></p>
                <div>
                    <h5></h5>
                    <h5></h5>
                </div>
            </div>
            </div>
        {/* {Object.entries(car).length ? (
            <div>
                <img src={car.image}/>
                <h1>{car.name}</h1>
                <p>{car.price}</p>
            </div>
         ) : (
            null
        )}
        <span></span>
        <Footer/> */}
        </div> 

        
    
    )
}


export default CarDetail ;