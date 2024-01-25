import './Clients.css';

export default function Clients() {
	return (
		<>
			<div className="clientsMainBox">
				<div className="clientsContent">
					<div className="contentText">
						<h2 className="contentTextHeading">Schools that Choose Bukizz</h2>
						<p className="contentTextUpper">
							School authorities and businesses are our major clients. We’re
							architects of a better digital future for them.
						</p>
						<p className="contentTextLower">
							Craft your school's perfect solution.
							<span className="contentTextLowerBold">
								{' '}
								Talk to a Bukizz expert today!
							</span>
						</p>
					</div>
					<button className="contentButton">Book Free Demo</button>
				</div>
			</div>
		</>
	);
}
