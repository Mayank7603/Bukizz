import EmblaCarousel from './EmblaCarousel';
import './embla.css';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
	return (
		<main className="sandbox">
			<section className="sandbox__carousel">
				<EmblaCarousel
					slides={SLIDES}
					options={OPTIONS}
				/>
			</section>
		</main>
	);
}
