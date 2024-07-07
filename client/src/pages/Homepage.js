import Navbar from '../components/Navbar';
import Quizes from '../components/Quizes';
import Footer from '../components/Footer'
import '../pages-styling/homepage.css'

function Homepage() {
    return (
        <>
            <Navbar/>
            <Quizes/>
            <Footer/>
        </>
    
    )
}

export default Homepage;