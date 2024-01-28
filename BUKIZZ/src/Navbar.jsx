import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../public/Logo.png';
import { IconCross, IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Drawer } from '@mui/material';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className=" mb-10 w-full  gap-16">
			<Drawer
				anchor="right"
				open={open}
				onClose={() => setOpen(false)}>
				<IconX className="font-bold h-10 w-20 pt-4 pl-1" />

				<div className="flex flex-col pt-16 pl-16  w-56 gap-12 font-semibold text-2xl">
					<p>Solution</p>
					<Link to="/contact">
						<p>Contact</p>
					</Link>
					<p>About</p>
				</div>
			</Drawer>

			<div className="flex justify-between bg-white md:rounded-3xl h-16 px-4 md:w-[%] md:h-16">
				<div className="flex justify-between  items-center gap-12">
					<div className="flex justify-between  items-center gap-4 md:px-4">
						<img
							src={Logo}
							className="w-8 h-8"></img>
						<h2 className="font-semibold text-xl">Bukkiz</h2>
					</div>
					<div className=" hidden justify-between  items-center gap-4  md: visible md:inline-block ">
						<ul className="md:flex md:justify-between  md:items-center md:gap-12 md:text-lg  md:px-4 md:text-slate-500">
							<li>
								<a href="#">Solution</a>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<a href="#">About</a>
							</li>
						</ul>
					</div>

					{/* <div 
         >
          <div className="text-black bg-white flex-col absolute top-0 right-0 h-screen  p-8  z-50 flex">
            <MdClose
              onClick={() => setCloseSideBar(false)}
              className=" text-3xl cursor-pointer absolute top-[9px] right-4"
            />

            <ul className="flex  flex-col justify-center  items-start gap-4 text-2xl font-semibold mt-8">
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              </ul>
              
            </div>
            
          </div> */}
				</div>

				<div className="flex justify-space items-center md:inline-block">
					<button className="px-4 py-1 m-4 rounded-lg text-white w-48 h-9 bg-gradient-to-r from-blue-600 to-violet-600 hidden sm:visible sm:inline-block">
						Book Free Demo
					</button>
					<IconMenu2
						onClick={() => setOpen(true)}
						className="md:hidden"
					/>
				</div>
			</div>
		</div>
	);
}
