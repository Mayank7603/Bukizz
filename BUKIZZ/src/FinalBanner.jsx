import './FinalBanner.css';

export default function FinalBanner() {
	return (
		<>
			<div className="finalBannerMainBox pb-24 pt-4">
				<div className="w-full h-80 z-0 flex flex-col gap-4 text-left pl-6 pr-4 py-6 md:flex md:flex-row md:gap-56 md:pl-12 md:h-24  ">
					<div className="flex flex-col gap-3 pr-6 md:pr-0">
						<h2 className="text-3xl font-bold text-white py-1 leading-snug">
							Imagine a Streamlined School.
						</h2>
						<h2 className="text-3xl font-bold text-white leading-snug">
							Talk to Bukizz Experts and Make it Real
						</h2>
					</div>
					<div className="text-white px-4 py-2 border-2 border-white flex justify-center items-center mt-3 bg-white rounded-xl md:mt-12 md:h-12">
						<button className="font-semibold  text-purple-950 md:text-2xl md:px-4 md:py-2">
							<p>Book Free Demo</p>
						</button>
					</div>
				</div>
				{/* <div>
					<img
						src="finalBannerRect.png"
						className="bannerImage"></img>
				</div> */}
			</div>
		</>
	);
}
