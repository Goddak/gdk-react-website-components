import React from 'react';

export type ResponsiveHeroHeadingConfig = {
	text: string;
	style?: React.CSSProperties;
	classList?: string;
}

export const ExampleResponsiveHeroHeadingConfig: ResponsiveHeroHeadingConfig = {
	text: "Fascinating Heading Goes Here"
};

export type ResponsiveHeroTextConfig = {
	paragraphs: string[];
	style?: React.CSSProperties;
	classList?: string;
}

export const ExampleResponsiveHeroTextConfig: ResponsiveHeroTextConfig = {
	paragraphs: ['Logical and emotional statements go here to add value and entice the user to click the buttons that are enevitably located below.', 'Yep that\'s right the one\'s you can see directly below me!']
}

export type ResponsiveHeroCtaConfig = {
	label: string;
	style?: React.CSSProperties;
	classList?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ExampleResponsiveHeroCtaConfig: ResponsiveHeroCtaConfig[] = [
	{ label: "Click Me", onClick: (e) => {} },
	{ label: "Learn More", onClick: (e) => {}, style: { backgroundColor: "#EFF3F8", color: "#3A414C"} },
]

export type ResponsiveHeroProps = {
	bgStyles?: React.CSSProperties;
	headingConfig?: ResponsiveHeroHeadingConfig;
	textConfig?: ResponsiveHeroTextConfig;
	ctaConfig?: ResponsiveHeroCtaConfig[];
};

export const ExampleResponsiveHeroProps: ResponsiveHeroProps = {
	bgStyles: {
		backgroundImage: "url('https://cdn.midjourney.com/dd10db38-a6d4-4c30-9a16-237faf9e8833/grid_0.png')",
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	headingConfig: ExampleResponsiveHeroHeadingConfig,
	textConfig: ExampleResponsiveHeroTextConfig,
	ctaConfig: ExampleResponsiveHeroCtaConfig
}

const ResponsiveHero: React.FC<ResponsiveHeroProps> = ({ bgStyles, headingConfig, textConfig, ctaConfig }) => {
	const generateHeading: () => JSX.Element = () => {
		if (headingConfig) {
			return <h1 className={headingConfig.classList ? headingConfig.classList : 'w-full text-6xl mb-4 @md:w-2/3 @4xl:w-1/2'} style={headingConfig.style} >{headingConfig.text}</h1>
		} else {
			return <></>
		}
	}

	const generateText: () => JSX.Element = () => {
		if (textConfig) {
			return <div className='flex flex-col'>
				{textConfig.paragraphs.map((paragraph, i) => (
								<p key={i} className={textConfig.classList ? textConfig.classList : "mb-4" } style={textConfig.style}>
									{paragraph}
								</p>
							))}
			</div>
		} else {
			return <></>
		}
	}

	const generateCtas: () => JSX.Element = () => {
		if (ctaConfig) {
			return <div className='flex justify-between'>
				{ctaConfig.map((cta, i) => (
								<button className={cta.classList ? cta.classList : 'rounded-3xl bg-blue-500 text-white py-4 px-12 mr-4 hover:underline'} onClick={cta.onClick} style={cta.style}>{cta.label}</button>
							))}
			</div>
		} else {
			return <></>
		}
	}

	return (
		<div
			className={`@container w-full h-full bg-center bg-cover`}
			style={bgStyles}
		>
			<div className='h-full flex flex-col items-center justify-center p-4 @md:items-start @md:p-12 @4xl:p-36'>
				{generateHeading()}
				{generateText()}
				{generateCtas()}
			</div>
		</div>
	);
};

export default ResponsiveHero;