import React from 'react';
import { 
	ResponsiveHero,
	ExampleResponsiveHeroProps,
	ResponsiveHeader,
	ExampleResponsiveHeaderProps
} from './lib/index';

function App() {
	return (
		<div className="w-full h-full flex flex-col items-center">
			<header className="w-full flex justify-center">
				<h1>GDK React Component Library</h1>
			</header>
			<div className='w-screen h-screen flex flex-col items-center mb-10'>
				<h2>Hero Text Left - Full Width</h2>
				<ResponsiveHero { ...ExampleResponsiveHeroProps } />
			</div>
			<div className='w-2/3 h-screen flex flex-col items-center mb-10'>
				<h2>Hero Text Left - 2/3</h2>
				<ResponsiveHero { ...ExampleResponsiveHeroProps } />
			</div>
			<div className='w-1/2 h-screen flex flex-col items-center mb-10'>
				<h2>Hero Text Left - Half Width</h2>
				<ResponsiveHero { ...ExampleResponsiveHeroProps } />
			</div>
			<div className='w-1/3 h-screen flex flex-col items-center mb-10'>
				<h2>Hero Text Left - 1/3</h2>
				<ResponsiveHero { ...ExampleResponsiveHeroProps } />
			</div>
			<div className='w-screen flex flex-col items-center mb-10'>
				<h2>Responsive Header - Full Width</h2>
				<ResponsiveHeader {...ExampleResponsiveHeaderProps} />
			</div>
			<div className='w-1/2 flex flex-col items-center mb-10'>
				<h2>Responsive Header - Half Width</h2>
				<ResponsiveHeader {...ExampleResponsiveHeaderProps} />
			</div>
			<div className='w-1/3 flex flex-col items-center mb-10' >
				<h2>Responsive Header - 1/3</h2>
				<ResponsiveHeader {...ExampleResponsiveHeaderProps} />
			</div>
		</div>
	);
}

export default App;
