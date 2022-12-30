import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ResponsiveHero from './ResponsiveHero';

afterEach(cleanup);

describe('ResponsiveHero component', () => {
//   it('renders a div element with a background color if bg prop is a hexa value', () => {
//     const { container } = render(<ResponsiveHero bg="#fff" />);
//     expect(container.firstChild).toHaveStyle('background-color: #fff');
//   });

//   it('renders a div element with a background image if bg prop is not a hexa value', () => {
//     const { container } = render(<ResponsiveHero bg="/image.jpg" />);
//     expect(container.firstChild).toHaveStyle(`background-image: url('/image.jpg')`);
//   });

//   it('renders an h1 element if heading prop is a string', () => {
//     const { getByText } = render(<ResponsiveHero bg="#fff" heading="Heading" />);
//     expect(getByText('Heading')).toBeInTheDocument();
//   });

//   it('renders the JSX element if heading prop is a JSX element', () => {
// 	const heading = <h1>Heading</h1>;
// 	const { container } = render(<ResponsiveHero bg="#fff" heading={heading} />);
// 	expect(container.querySelector('h1')).toBeInTheDocument();
//   });

//   it('renders a p element if text prop is a string', () => {
// 	const { getByText } = render(<ResponsiveHero bg="#fff" text="Text" />);
// 	expect(getByText('Text')).toBeInTheDocument();
//   });
  
//   it('renders the JSX element if text prop is a JSX element', () => {
// 	const text = <p>Text</p>;
// 	const { container } = render(<ResponsiveHero bg="#fff" text={text} />);
// 	expect(container.querySelector('p')).toBeInTheDocument();
//   });
  
//   it('renders a button element if Cta1 prop is a string', () => {
// 	const { getByText } = render(<ResponsiveHero bg="#fff" Cta1="Button" />);
// 	expect(getByText('Button')).toBeInTheDocument();
//   });
  
//   it('renders the JSX element if Cta1 prop is a JSX element', () => {
// 	const Cta1 = <button>Button</button>;
// 	const { container } = render(<ResponsiveHero bg="#fff" Cta1={Cta1} />);
// 	expect(container.querySelector('button')).toBeInTheDocument();
//   });
  
//   it('renders a button element if Cta2 prop is a string', () => {
// 	const { getByText } = render(<ResponsiveHero bg="#fff" Cta2="Button" />);
// 	expect(getByText('Button')).toBeInTheDocument();
//   });
  
//   it('renders the JSX element if Cta2 prop is a JSX element', () => {
// 	const Cta2 = <button>Button</button>;
// 	const { container } = render(<ResponsiveHero bg="#fff" Cta2={Cta2} />);
// 	expect(container.querySelector('button')).toBeInTheDocument();
//   });
});