import'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import MenuAtas from '../Components/NavBar';
import Filter from '../Components/Filter';
import axios from "axios"
import "./Pages.css"
import { Link, useParams } from 'react-router-dom';
import Footer from '../Components/Footer';


const CarDetail = (props) => {
    const [carData, setCardata] = useState([])
    
    
    const {id} = useParams()

    useEffect (() => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res) => {
            console.log(res)
            setCardata(res.data)
        })
        .catch((err)=> console.log(err.message))
    }, [])

   
    return (
    <div className='base'>
        <MenuAtas/>
        <div className='flavor'>
        </div>
        <Filter/>
        <div className='wrapBase'>
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
            {Object.entries(carData).length ? (
            <div className='cardDetail'>
                <div className='gambar'>
                <img src={carData.image}/>
                </div>
                <div className='text1'>
                <h4>{carData.name}</h4>
                <p>{carData.category}</p>
                </div>
                <div className='text2'>
                <h5>Total</h5>
                <h5>Rp. {carData.price}</h5>
                </div>
            </div>
         ) : (
            null
        )}
            </div>
        <span></span>
        </div>
        </div>
        <Footer/>
    </div>
    )}
export default CarDetail ;