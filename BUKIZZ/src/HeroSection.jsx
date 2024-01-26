import { useRef } from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player';

function HeroSection() {
	return (
		<>
			<div className=" flex flex-col">
				<div className="flex flex-col ">
					<div className="heroHeadline flex flex-col items-center gap-1">
						<h2 className="text-2xl text-center">Take Your School Digital</h2>
						<h2 className="text-2xl text-center pb-3">
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
					<div className="text-center text-slate-500 py-3  ">
						From books to fees, parents to progress, Bukizz puts everything at
						your fingertips.
					</div>
					{/* <div className="heroButtonBox">
            <button className="heroButton">
              Book Free Demo
            </button>
          </div> */}
				</div>
				<div className=" ">
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
