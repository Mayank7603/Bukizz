import './InstallBanner.css';
import google from '../public/playstore.png';
import apple from '../public/appstore.png';
import mobile from '../public/phone.png';
import img1 from '../public/img1.png';
import img2 from '../public/img2.png';
function InstallBanner() {
	return (
		<>
			<section className="bg-gradient-to-b from-[#39A7FF] to-[#87C4FF]   backdrop-opacity-5 h-[400px] md:h-64 w-[90%]  items-center justify-center md:pt-0 rounded-2xl overflow-hidden flex flex-col md:flex-row md:ml-12 ">
				{/* /* background me slanted div ho gya hai  */}
				<div className="w-full h-full  overflow-hidden fixed z-[-1] ">
					<div className="absolute w-[9rem] h-[10rem] bg-sky-400 top-[-4] left-[8rem] skew-y-[20deg] rounded-[5px] "></div>
					<div className="absolute w-[9rem] h-[10rem] bg-indigo-800 top-[105px] left-[-14px] skew-y-[20deg] rounded-[5px]"></div>
				</div>

				{/* text aur appstore vala part ho gya hai */}
				<div className="flex flex-col  justify-center items-center gap-4 md:w-[50%] p-8 md:py-0 w-full">
					<div className="text-3xl font-bold text-white text-left">
						One App for all your <br />
						Student's Need
					</div>
					<div className="flex flex-col md:flex-row gap-4  w-full md:items-start">
						<img
							className="w-40 h-12 "
							src={apple}></img>
						<img
							className="w-40 h-12"
							src={google}></img>
					</div>
				</div>

				{/* for img1 and imag2 ka set kar rha hau */}

				<div className=" w-[100] md:w-[50%] h-full md:ml-8 hidden md:inline-block ">
					<img
						className="w-[15rem]  lg:w-[20rem] fixed top-0  z-[1]"
						src={img1}></img>
					<img
						className=" w-[19rem]  fixed bottom-0 right-0 z-[2]"
						src={img2}></img>
				</div>

				<div className="overflow-hidden bg-white flex  justify-center items-center w-[70%]  rounded-t-2xl border-t-4 border-x-4 border-slate-950 h-80 md:hidden">
					<div className="flex gap-4 justify-center">
						<img
							className=""
							src={mobile}></img>
					</div>
				</div>
			</section>
		</>
	);
}

export default InstallBanner;
