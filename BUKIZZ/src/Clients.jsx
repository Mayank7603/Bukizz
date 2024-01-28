import './Clients.css';
import choose from '../public/choose.png';
export default function Clients() {
	return (
		<>
			<div
				id="clientsId"
				className="flex flex-col p-4 px-5 gap-3 md:flex-row md:justify-around ">
				<div className="md:text-left md:w-[400px] md:ml-12 flex flex-col gap-4 md:gap-0">
					<div className="text-left font-bold text-[35px]  bg-gradient-to-r from-violet-600 to-sky-600 inline-block text-transparent bg-clip-text md:pb-4">
						Schools that we serve
					</div>
					<div className="flex flex-col gap-2 px-4 md:px-0 md:gap-4">
						<p className="text-slate-500 text-left">
							School authorities and businesses are our major clients. We’re
							architects of a better digital future for them.
						</p>
						<p className="text-slate-500 text-left">
							Craft your school's perfect solution.
							<p className="inline text-black">
								Talk to a Bukizz expert today!
							</p>
						</p>
					</div>
					<div className="mb-4 mx-2 flex justify-center items-center rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 text-white h-12 md:w-48 md:mt-8 md:px-0 font-semibold">
						<button>Book Free Demo</button>
					</div>
				</div>
				<div className="flex justify-center items-center md:mr-12">
					<img
						src={choose}
						alt="Image"
					/>
				</div>
			</div>
		</>
	);
}
