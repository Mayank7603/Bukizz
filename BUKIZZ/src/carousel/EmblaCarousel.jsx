import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imageByIndex';
import imagebyMobile from './imagebyMobile';

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

	return (
		<div>
			<div className="font-bold md:text-4xl md:w-[500px] leading-snug text-2xl bg-gradient-to-r from-violet-600 to-sky-600 inline-block text-transparent bg-clip-text">
				Our Community share their Bukizz Experience
			</div>
			<div className="embla w-full hidden md:inline-block">
				<div
					className="embla__viewport "
					ref={emblaRef}>
					<div className="embla__container ">
						{slides.map((index) => (
							<div
								className="embla__slide "
								key={index}>
								<img
									className="embla__slide__img  h-[100%]"
									src={imageByIndex(index)}
									alt="Your alt text"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="embla w-full md:hidden">
				<div
					className="embla__viewport "
					ref={emblaRef}>
					<div className="embla__container ">
						{slides.map((index) => (
							<div
								className="embla__slide "
								key={index}>
								<img
									className="embla__slide__img  h-[100%]"
									src={imagebyMobile(index)}
									alt="Your alt text"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
