import './FeatureSection.css';
import Feature from './feature/Feature';
import featureByIndex_mb from './featureByIndex_mb';
import EmblaCarousel from './EmblaCarousel';
import featureByIndex from './featureByIndex';
import { useState } from 'react';

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
					<main className="hidden md:inline">
						<section>
							<EmblaCarousel
								className="h-12"
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
