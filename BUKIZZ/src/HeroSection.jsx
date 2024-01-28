import { useRef } from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player';

function HeroSection() {
	return (
		<>
			<div className=" flex flex-col md:flex-row md:pt-8 items-center justify-center md:gap-32">
				<div className="flex flex-col md:gap-6">
					<div className="heroHeadline flex flex-col items-center gap-1 md:items-start">
						<h2 className="text-2xl md:text-3xl text-center">
							Take Your School Digital
						</h2>
						<h2 className="text-2xl md:text-3xl text-center pb-3">
							Manage. Automate. Engage
						</h2>
						<svg
							width="86"
							height="6"
							viewBox="0 0 86 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 3H83"
								stroke="url(#paint0_linear_509_3365)"
								strokeWidth="6"
								strokeLinecap="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_509_3365"
									x1="5.50001"
									y1="-0.50012"
									x2="83"
									y2="3.9999"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#49108B" />
									<stop
										offset="1"
										stopColor="#39A7FF"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="text-center text-slate-500 py-3 md:w-96 md:text-left ">
						From books to fees, parents to progress, Bukizz puts everything at
						your fingertips.
					</div>
					<div className=" h-10 mx-4 md:mx-0 md:w-88 md:h-12 bg-gradient-to-r from-sky-600 to-violet-600 rounded-2xl">
						<button className="text-white md:text-xl text-lg p-1.5 md:p-2">
							Book Free Demo
						</button>
					</div>
				</div>
				<div className=" md:h-[450px] md:w-[450px] pt-12">
					<video
						autoPlay
						loop
						muted>
						<source
							src="Image.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
