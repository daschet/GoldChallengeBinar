import'bootstrap/dist/css/bootstrap.min.css';
import "./Compo.css"
import Image1 from "./Assets/Service.png"

const Landing2 = () => {
    return (
    <div className='Base'>
        <div className='binar2'>
                <div className='binar2A'>
                    <img src={Image1}/>
                </div>
                <div className='binar2B'>
                    <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <h5>Sewa mobil di (Lokasimu) 
                        bersama Binar Car Rental jaminan harga lebih 
                        murah dibandingkan yang lain, kondisi mobil baru, 
                        serta kualitas pelayanan terbaik untuk perjalanan wisata, 
                        bisnis, wedding, meeting, dll.</h5>
                    <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                    <li>Layanan Airport Transfer / Drop In Out</li>
                </div>
            </div> 
        </div>
    )
}

export default Landing2 ;