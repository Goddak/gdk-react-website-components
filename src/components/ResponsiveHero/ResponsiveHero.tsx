import React from 'react';
import './ResponsiveHero.css';

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
			return <h1 className={headingConfig.classList ? headingConfig.classList : 'gdk-hero__heading w-full text-2xl mb-2 @md:w-2/3 @xl:text-5xl @xl:mb-4'} style={headingConfig.style} >{headingConfig.text}</h1>
		} else {
			return <></>
		}
	}

	const generateText: () => JSX.Element = () => {
		if (textConfig) {
			return <div className='flex flex-col @xl:w-4/5'>
				{textConfig.paragraphs.map((paragraph, i) => (
								<p key={i} className={textConfig.classList ? textConfig.classList : `gdk-hero__text gdk-hero__text--${i} mb-4 text-sm @md:text-md last:mb-2 @xl:text-lg` } style={textConfig.style}>
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
			return <div className='gdk-hero__cta-container flex flex-col @md:flex-row'>
				{ctaConfig.map((cta, i) => (
								<button className={cta.classList ? cta.classList : 'gdk-hero__cta-button rounded-3xl bg-blue-500 text-white py-2 px-10 hover:underline text-sm mb-2 @md:mb-0 @md:mr-4 @md:text-md'} onClick={cta.onClick} style={cta.style}>{cta.label}</button>
							))}
			</div>
		} else {
			return <></>
		}
	}

	return (
		<div
			className={`gdk-hero @container w-full h-screen bg-center bg-cover z-0`}
			style={bgStyles}
		>
			<div className='gdk-hero__container h-full flex flex-col items-center justify-center p-4 @md:items-start @md:p-12 @4xl:p-36'>
				{generateHeading()}
				{generateText()}
				{generateCtas()}
			</div>
		</div>
	);
};

export default ResponsiveHero;