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
			<div className="bg-slate-100 md:pt-14 md:mx-10">
				<Navbar />
			</div>
			<div className="HeroSection md:my-15">
				<HeroSection />
			</div>
			<div className="FeatureSection my-20">
				<FeatureSection />
			</div>
			<div className="InstallBanner my-20">
				<InstallBanner />
			</div>
			<div className="Clients my-20">
				<Clients />
			</div>
			<div className="Carousel my-20">
				<Carousel />
			</div>
			<div className="FinalBanner my-16">
				<FinalBanner />
			</div>
			<div className="footerBG">
				<Footer />
			</div>
		</>
	);
}

export default App;
