import './Clients.css';
import choose from '../public/choose.png';
export default function Clients() {
	return (
		<>
			<div className="flex flex-col p-4 px-5 gap-3">
				<div className="text-left font-bold text-3xl bg-gradient-to-r from-violet-600 to-sky-600 inline-block text-transparent bg-clip-text">
					Schools that choose Bukizz
				</div>
				<div className="flex flex-col gap-2 px-4">
					<p className="text-slate-400 text-left">
						School authorities and businesses are our major clients. We’re
						architects of a better digital future for them.
					</p>
					<p className="text-slate-400 text-left">
						Craft your school's perfect solution. Talk to a Bukizz expert today!
					</p>
				</div>
				<div className="mb-4 mx-2 flex justify-center items-center rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-violet-600 text-white h-12">
					<button>Book a Free Demo</button>
				</div>
				<div className="flex justify-center items-center ">
					<img
						src={choose}
						alt="Image"
					/>
				</div>
			</div>
		</>
	);
}
