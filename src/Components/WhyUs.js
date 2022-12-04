import'bootstrap/dist/css/bootstrap.min.css';
import "./Compo.css"
import Icon1 from "./Assets/Icon1.png"
import Icon2 from "./Assets/Icon2.png"
import Icon3 from "./Assets/Icon3.png"
import Icon4 from "./Assets/Icon4.png"

const WhyUs = () => {
    return (
    <div>
        <div className='binar3base'>
            <div className='binar3container'>
                <h1>Why Us?</h1>
                <h5>Mengapa harus pilih Binar Car Rental?</h5>
                <div className='binar3card'>
                    <div className='binar3card1'>
                        <img src={Icon1}/>
                        <h4>Mobil Lengkap</h4>
                        <h5>Tersedia banyak pilihan mobil, 
                            kondisi masih baru, bersih dan terawat</h5>
                    </div>
                    <div className='binar3card2'>
                        <img src={Icon2}/>
                        <h4>Harga Murah</h4>
                        <h5>Harga murah dan bersaing, 
                            bisa bandingkan harga kami dengan rental mobil lain</h5>
                    </div>
                    <div className='binar3card3'>
                        <img src={Icon3}/>
                        <h4>Layanan 24 Jam</h4>
                        <h5>Siap melayani kebutuhan Anda selama 24 jam nonstop. 
                            Kami juga tersedia di akhir minggu</h5>
                    </div>
                    <div className='binar3card3'>
                        <img src={Icon4}/>
                        <h4>Sopir Profesional</h4>
                        <h5>Sopir yang profesional, berpengalaman, jujur, 
                            ramah dan selalu tepat waktu</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WhyUs ;