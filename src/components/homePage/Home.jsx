import About from "./About";
import Amenities from "./Amenities";
import Blog from "./Blog";
import Class from "./Class";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Schedule from "./Schedule";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Welcome from "./Welcome";

const Home = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <Welcome />
        <Class/>
        <About />
        <Schedule/>
        <Testimonial/>
        <Team/>
        <Amenities/>
        <Blog/>
        <Newsletter/>
        <Footer/>
      </div>
    );
};

export default Home;