import Navbar from './navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import FeatureSection from './featureSection/FeatureSection';
import InstallBanner from './installBanner/InstallBanner';
import Clients from './client/Clients';
import Carousel from './carousel/Carousel';
import FinalBanner from './finalBanner/FinalBanner';
import Footer from './footer/Footer';
import './App.css';

function App() {
	return (
		<>
			<div className="bg-slate-100 md:pt-28  ">
				<Navbar />
			</div>
			<div className="pt-28 lg:pt-0">
				<HeroSection />
			</div>
			<div className="FeatureSection my-20">
				<FeatureSection />
			</div>
			<div className="InstallBanner my-20">
				<InstallBanner />
			</div>
			<div
				id="clientsID"
				className="Clients my-20">
				<Clients />
			</div>
			<div
				id="testID"
				className="Carousel my-20">
				<Carousel />
			</div>
			<div className="footerBG md:flex md:flex-col">
				<FinalBanner />
				<Footer />
			</div>
		</>
	);
}

export default App;
