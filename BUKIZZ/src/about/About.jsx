import Navbar from '../navbar/Navbar';
import logo from '../../public/aboutUs/logo.png';
import './about.css';

const ABout = () => {
	return (
		<div className=" flex h-[100vh]">
			<div className="fixed md:top-[57px] md:w-[95%] w-full md:right-10 z-10">
				<Navbar />
			</div>
			<div className="bg-slate-200 w-full md:w-[65%] pt-12">
				<div className="pt-12"></div>
				<div className="pt-12 md:pt-24 px-auto md:pl-40 ">
					<div className="flex flex-col items-start gap-3 bg-white w-full md:w-[70%] pl-6 pr-3 py-6 rounded-xl">
						<div className="flex gap-2 pl-32 md:pl-0 ">
							<div>
								<img
									src={logo}
									className="w-7 h-7"
								/>
							</div>
							<div>Bukizz</div>
						</div>
						<div className="text-3xl font-semibold">
							Ready to take your school digital !
						</div>
						<div className="text-slate-500 text-lg">
							Book a call with your expert to find out best solution for you
						</div>
						<div className="flex flex-col gap-4 items-start">
							<div className="flex flex-col md:flex-row gap-4 w-full">
								<input
									type="text"
									placeholder="First Name*"
									className="h-10 rounded-lg px-4 border "
								/>
								<input
									type="text"
									placeholder="Last Name*"
									className="h-10 rounded-lg px-4 border"
								/>
							</div>
							<div className="flex flex-col md:flex-row gap-4 w-full">
								<input
									type="text"
									placeholder="School Name*"
									className="h-10 rounded-lg px-4 border"
								/>
								<input
									type="text"
									placeholder="Email* "
									className="h-10 rounded-lg px-4 border"
								/>
							</div>
							<div className="border w-full">
								<textarea
									className=" w-full md:w-[430px] p-3"
									rows={4}
									placeholder="Your Message"
								/>
							</div>
							<div className="text-xs text-left text-slate-500  justify-center items-center w-full">
								By clicking “Book Demo Call,” you allow “Bukizz” to contact you
								via email regarding digital transformation solutions for your
								customer journeys. See our Privacy Policy for more info.
							</div>
							<div className="w-full ">
								<button className="text-xl bg-gradient-to-tr from-sky-600 to-violet-600 w-full h-12 rounded-xl text-white">
									Book a Free Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="rightPart w-0 md:w-[40%] hidden md:inline-block"></div>
		</div>
	);
};

export default ABout;
