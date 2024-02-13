import './FeatureSection.css';
import Feature from './feature/Feature';
import EmblaCarousel from '../carousel/EmblaCarousel';
import featureByIndex from './featureByIndex';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function FeatureSection() {
	return (
		<>
			<div className="featureSectionMainBox">
				<div className="font-bannertext featureSectionTitle mt-12">
					<p className="text-2xl md:text-4xl">What Bukizz Can</p>
					<p className="text-2xl md:text-4xl">Do For Your School</p>
				</div>
				<div className="hidden md:inline-block">
					{/* <div className=" featuresGrid ">
						{featuresArray.map((feature, index) => {
							return (
								<Feature
									key={index}
									logo={feature.logo}
									heading={feature.heading}
									text={feature.text}
								/>
							);
						})}
					</div> */}

					<main className="sandbox hidden md:inline h-[900px]">
						<section className="sandbox__carousel">
							<EmblaCarousel
								slides={SLIDES}
								options={OPTIONS}
								arr={featureByIndex}
							/>
						</section>
					</main>
				</div>
				<div className="flex flex-col gap-12 pt-12 pb-12 z-10 md:hidden">
					{/* {small.map((feature, index) => {
						return (
							<Feature
								key={index}
								logo={feature.logo}
								heading={feature.heading}
								text={feature.text}
							/>
						);
					})} */}
				</div>
			</div>
		</>
	);
}

export default FeatureSection;
