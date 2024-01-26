import './FeatureSection.css';
import Feature from './Feature';

let small = [
	{
		logo: 'gridIcon1.png',
		heading: 'Book Delivery Solution',
		text: 'Skip the bookstore rush. Parents browse & buy school books directly, delivered right to their door.',
	},
	{
		logo: 'gridIcon2.png',
		heading: 'Website Management',
		text: 'Impress parents & students with a beautiful, accessible website. Mobile-friendly & easy to navigate',
	},
	{
		logo: 'gridIcon3.png',
		heading: 'Admission Process Optimization',
		text: 'Simplify admissions & TCs. Manage applications, fees, & documents online. Clear information, less paperwork',
	},
];

let featuresArray = [
	{
		logo: 'gridIcon1.png',
		heading: 'Book Delivery Solution',
		text: 'Skip the bookstore rush. Parents browse & buy school books directly, delivered right to their door.',
	},
	{
		logo: 'gridIcon2.png',
		heading: 'Website Management',
		text: 'Impress parents & students with a beautiful, accessible website. Mobile-friendly & easy to navigate',
	},
	{
		logo: 'gridIcon3.png',
		heading: 'Admission Process Optimization',
		text: 'Simplify admissions & TCs. Manage applications, fees, & documents online. Clear information, less paperwork',
	},
	{
		logo: 'gridIcon4.png',
		heading: 'Advertisement and Promotion',
		text: 'Target & manage all your ad campaigns from one place. Eye-catching banners, wider reach, higher enrollments',
	},
	{
		logo: 'gridIcon5.png',
		heading: 'Real-Time Teacher Substitution',
		text: 'Real-time staff availability & simplified substitution tools. Keep learning uninterrupted',
	},
	{
		logo: 'gridIcon6.png',
		heading: 'Student Progress & Result',
		text: 'Comprehensive student portals track academic & behavioral progress. Clear data, actionable insights',
	},
	{
		logo: 'gridIcon7.png',
		heading: 'Student Information and Fee Management',
		text: 'Automated attendance & fee tracking. Parents stay informed, school runs smoothly',
	},
	{
		logo: 'gridIcon8.png',
		heading: 'Library and Resource Management',
		text: 'Real-time notifications, event updates, and online forums. Parents engaged, students supported',
	},
	{
		logo: 'gridIcon9.png',
		heading: 'Parent-School Communication Bridge',
		text: 'Real-time notifications, event updates, and online forums. Parents engaged, students supported',
	},
];

function FeatureSection() {
	return (
		<>
			<div className="featureSectionMainBox">
				<div className="featureSectionTitle mt-12">
					<p className="text-2xl">What Bukizz Can</p>
					<p className="text-2xl">Do For Your School</p>
				</div>
				<div className="hidden md:block featuresGrid">
					{featuresArray.map((feature, index) => {
						return (
							<Feature
								key={index}
								logo={feature.logo}
								heading={feature.heading}
								text={feature.text}
							/>
						);
					})}
				</div>

				<div className="flex flex-col gap-12 pt-12 z-10">
					{small.map((feature, index) => {
						return (
							<Feature
								key={index}
								logo={feature.logo}
								heading={feature.heading}
								text={feature.text}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default FeatureSection;
