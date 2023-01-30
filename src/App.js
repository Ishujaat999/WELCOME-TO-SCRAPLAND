import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import WeAre from "./components/WeAre";
import Footer from "./components/Footer";
import OurFeatures from "./components/OurFeatures";

function App() {
  return (
    <>
      <div className="bg_dark">
        <Header />
        <WeAre />
        <OurFeatures />
        <Footer />
      </div>
    </>
  );
}

export default App;
