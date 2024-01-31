import './FinalBanner.css';

export default function FinalBanner() {
	return (
		<>
			<div className="finalBannerMainBox pb-24 md:pb-12 mb-12 md:mb-0 pt-4 lg:p-0 md:h-72">
				<div className="w-full h-80 z-0 flex flex-col gap-4 text-left pl-6 pr-4 py-6 md:p-0 md:flex md:flex-row lg:gap-56 md:pl-12 md:h-40 md:my-auto md:items-center ">
					<div className="flex flex-col gap-3 pr-6 md:pr-0">
						<h2 className="text-3xl font-bold text-white py-1 leading-snug">
							Imagine a Streamlined School.
						</h2>
						<h2 className="text-3xl font-bold text-white leading-snug">
							Talk to Bukizz Experts and Make it Real
						</h2>
					</div>
					<div className="text-white px-4 py-2 border-2 border-white flex justify-center items-center mt-3 bg-white rounded-xl md:mt-2  lg:h-[75px]">
						<button className="font-semibold  text-purple-950 lg:text-3xl md:px-4 ">
							<p>Book Free Demo</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
