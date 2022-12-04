import'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../Components/Landing';
import Landing2 from '../Components/Landing2';
import MenuAtas from '../Components/NavBar';
import Testimonial from '../Components/Testimonial';
import WhyUs from '../Components/WhyUs';
import BlueBox from '../Components/BlueBox';
import Footer from '../Components/Footer';
import Faq from '../Components/Faq';
import "./Pages.css"

const HomePage = (props) => {
    return (
    <div className='homepage1'>
        <MenuAtas />
        <Landing isBtnShow={true}/>
        <span></span>
        <Landing2 />
        <span></span>
        <WhyUs />
        <span></span>
        <Testimonial/>
        <span></span>
        <BlueBox/>
        <span></span>
        <Faq/>
        <span></span>
        <Footer/>
        <span></span>
    </div>
    )
}
export default HomePage ;