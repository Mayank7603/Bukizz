import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import InstallBanner from './InstallBanner';
import Clients from './Clients';
import Carousel from './Carousel';
import FinalBanner from './FinalBanner';
import Footer from './Footer';
import './App.css';

function App() {
	return (
		<>
			{/* <div className="Navigation">
        <Navbar />
      </div> */}
			<div className="HeroSection">
				<HeroSection />
			</div>
			<div className="FeatureSection">
				<FeatureSection />
			</div>
			<div className="InstallBanner">
				<InstallBanner />
			</div>
			<div className="Clients">
				<Clients />
			</div>
			<div className="Carousel">
				<Carousel />
			</div>
			<div className="FinalBanner">
				<FinalBanner />
			</div>
			<div className="footerBG">
				<Footer />
			</div>
		</>
	);
}

export default App;
