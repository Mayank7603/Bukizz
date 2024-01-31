import google from '../../public/playstore.png';
import apple from '../../public/appstore.png';
import mobile from '../../public/phone.png';
import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png';
import rect1 from '../../public/rect1.png';
import rect2 from '../../public/rect2.png';
import './InstallBanner.css';

function InstallBanner() {
	return (
		<section className=" mainBox backdrop-opacity-5 h-[520px] w-[85%] md:h-[255px]   items-center justify-center md:pt-0 rounded-2xl overflow-hidden flex flex-col md:flex-row mx-auto  ">
			<div className="w-auto h-full overflow-hidden  top-0 ">
				<img
					className="w-70 h-64 fixed top-0 left-[134px] r1 "
					src={rect2}
					alt="Rect2"
				/>
				<img
					className="fixed left-[0px] top-[3px] w-70 md:h-64 h-96 r1 "
					src={rect1}
					alt="Rect1"
				/>
			</div>

			<div className="flex flex-col justify-center  items-start gap-4 md:w-[90%] p-6 md:py-0 md:m-0 md:px-20 mr-16">
				<div className=" text-3xl  font-bold text-white text-left leading-snug">
					One App for all your Student's Need
				</div>
				<div className="flex flex-col md:flex-row gap-4 relative w-full  items-start">
					<img
						className="md:w-44 w-full h-full ml-5 md:m-0 md:h-[57px]"
						src={apple}></img>
					<img
						className="md:w-44 h-full w-full ml-5 md:m-0  md:h-[57px]"
						src={google}></img>
				</div>
			</div>

			<div className=" w-[100] md:w-[50%] h-full md:ml-8 hidden md:inline-block ">
				<img
					className="w-[16rem]  lg:w-[20rem] fixed top-0  right-24 z-[1]"
					src={img1}></img>
				<img
					className=" w-[19rem]  fixed bottom-0 right-0 z-[2]"
					src={img2}></img>
			</div>

			<div className="overflow-hiddenflex  justify-center items-center  md:hidden">
				<div className="flex gap-4 justify-center w-[90%] md:w-full ml-4 md:m-0">
					<img
						className=""
						src={mobile}></img>
				</div>
			</div>
		</section>
	);
}

export default InstallBanner;
