import './FinalBanner.css';

export default function FinalBanner() {
	return (
		<>
			<div className="finalBannerMainBox">
				<div className="textArea w-full h-96 z-0 flex flex-col gap-4 text-left pl-6 pr-4 py-6">
					<div className="flex flex-col gap-3">
						<h2 className="text-4xl font-bold text-white">
							Imagine a Streamlined School.
						</h2>
						<h2 className="text-4xl font-bold text-white">
							Talk to Bukizz Experts and Make it Real
						</h2>
					</div>
					<div className="text-white px-4 py-2 border-2 border-white ">
						<button className="font-semibold  text-white flex justify-center items-center">
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
