import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import InstallBanner from "./InstallBanner";
import "./App.css";

function App() {
  return (
    <>
      <div className="Navigation">
        <Navbar />
      </div>
      <div className="HeroSection">
        <HeroSection />
      </div>
      <div className="FeatureSection">
        <FeatureSection />
      </div>
      <div className="InstallBanner">
        <InstallBanner />
      </div>
    </>
  );
}

export default App;
