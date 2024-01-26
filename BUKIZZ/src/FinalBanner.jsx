import './FinalBanner.css';

export default function FinalBanner() {
	return (
		<>
			<div className="finalBannerMainBox pb-24 pt-4">
				<div className="textArea w-full h-96 z-0 flex flex-col gap-4 text-left pl-6 pr-4 py-6">
					<div className="flex flex-col gap-3">
						<h2 className="text-4xl font-bold text-white py-1 leading-snug">
							Imagine a Streamlined School.
						</h2>
						<h2 className="text-4xl font-bold text-white leading-snug">
							Talk to Bukizz Experts and Make it Real
						</h2>
					</div>
					<div className="text-white px-4 py-2 border-2 border-white flex justify-center items-center mt-3 bg-slate-200 rounded-xl ">
						<button className="font-semibold  text-slate-900">
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
