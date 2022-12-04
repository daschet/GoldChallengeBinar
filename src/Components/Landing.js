import'bootstrap/dist/css/bootstrap.min.css';
import "./Compo.css"
import Image1 from "./Assets/Mobil1.png"
import { Link } from 'react-router-dom';
const Landing = (props) => {
    return (
    <div>
        <div className='binar1'>
            <div className='binar1A'>
                <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                <h5>Selamat datang di Binar Car Rental. 
                    Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </h5>
                {
                    props.isBtnShow ? (
                    <Link to = {'/carimobil'}>
                    <button className='tombol1'>
                       <p>Mulai Sewa Mobil</p>
                    </button>
                    </Link>) : null
                }
                
            </div>
            <div className='binar1B'>
                <img src={Image1}/>
            </div>
        </div>
        
    </div>
    )
}

export default Landing ;