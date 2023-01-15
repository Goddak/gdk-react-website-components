import React, { useState } from 'react';
import './ResponsiveHeader.css';

export type MenuItem = {
	label: string; // Displayed text
	key: string; // Unique key
	url?: string; // URL to navigate to on click
	target?: string; // ID of target scroll element
}

export type MenuConfiguration = {
	menuStyles?: React.CSSProperties; // Applied to container element
	itemStyles?: React.CSSProperties; // Applied to individual menu items
	dropdownItemStyles?: React.CSSProperties; // Applied to individual menu items
	logo?: { // Options for displaying a logo
		text?: string; // Text to be used as a text logo
		url?: string; // logo image url
		logoStyles?: React.CSSProperties; // Styles to be applied to the logo element
	}
}

export type ResponsiveHeaderProps = {
	config?: MenuConfiguration;
	menuItems?: MenuItem[];
};

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({ config, menuItems }) => {
	const [menuVisibilityState, setMenuVisibilityState] = useState(false);
	const toggleMenuVisibility: () => void = () => {
		setMenuVisibilityState(!menuVisibilityState);
	}

	const generateLogo: () => JSX.Element = () => {
		if (config && config.logo) {
			if (config.logo.text) {
				return <h3 className="gdk-header__logo text-2xl font-bold" style={config.logo.logoStyles ? config.logo.logoStyles : {}}>{config.logo.text}</h3>
			} else if (config.logo.url) {
				return <img className="gdk-header__logo max-w-64 max-h-12" src={config.logo.url} style={config.logo.logoStyles ? config.logo.logoStyles : {}} crossOrigin="anonymous" alt='logo' />
			} else {
				return <></>
			}
		} else {
			return <></>
		}
	}

	const generateMenu: () => JSX.Element = () => {
		if (menuItems) {
			return <>
				<div className="gdk-header__menu gdk-header__menu--desktop hidden @4xl:flex @4xl:w-2/3 @4xl:justify-end @4xl:h-12 @4xl:items-center">
					{menuItems.map((item) => (
						<a key={item.key} href={item.url} className="px-8 py-2 flex justify-center items-center mr-4 last-of-type:mr-0 font-bold hover:animate-ping" style={config?.itemStyles}>
							{item.label}
						</a>
					))}
				</div>
				<div className="@4xl:hidden gdk-header__menu gdk-header__menu--mobile">
					<div id="nav-icon2" className={'gdk-header__menu-icon relative h-6 w-8 cursor-pointer ' + (menuVisibilityState ? 'open' : 'closed')} onClick={toggleMenuVisibility}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className='gdk-header__menu-items-container w-full absolute left-0 top-full opacity-0' style={menuVisibilityState ? { opacity: "1" } : { transitionDelay: "1000ms" }}>
						<ul className='flex flex-col gdk-header__menu-items'>
							{menuItems.map((item, i) => (
								<a key={item.key} href={item.url} className="gdk-header__menu-item px-8 py-2 font-bold last-of-type:border-0 opacity-0 transition-opacity duration-250" style={menuVisibilityState ? { ...config?.dropdownItemStyles, opacity: "1", transitionDelay: (i * 50) + "ms" } : { ...config?.dropdownItemStyles, opacity: "0", transitionDelay: ((menuItems.length - i) * 50) + "ms" }}>
									{item.label}
								</a>
							))}
						</ul>
					</div>
				</div>
			</>
		} else {
			return <></>
		}
	}

	return (
		<div className='@container gdk-header w-full z-50' style={config?.menuStyles}>
			<div className="gdk-header__container flex items-center justify-between w-full p-4 @4xl:px-16">
				{generateLogo()}
				{generateMenu()}
			</div>
		</div>
	);
};

export const ExampleResponsiveHeaderConfig: MenuConfiguration = {
	menuStyles: {
		backgroundColor: "#EFF3F8"
	},
	itemStyles: {
		color: "#3A414C",
		animationIterationCount: 1
	},
	dropdownItemStyles: {
		backgroundColor: "#EFF3F8",
		borderBottom: "0.1rem solid #FFF"
	},
	logo: {
		url: "https://goddak.co.uk/logo192.png",
	}
}

export const ExampleResponsiveHeaderMenuItems: MenuItem[] = [
	{ label: "Blog", key: "blog", url: "https://goddak.co.uk" },
	{ label: "Docs", key: "docs", url: "https://goddak.co.uk" },
	{ label: "Support", key: "support", url: "https://goddak.co.uk" },
	{ label: "ToS", key: "tos", url: "https://goddak.co.uk" }
];

export const ExampleResponsiveHeaderProps: ResponsiveHeaderProps = {
	config: ExampleResponsiveHeaderConfig,
	menuItems: ExampleResponsiveHeaderMenuItems
};

export default ResponsiveHeader;