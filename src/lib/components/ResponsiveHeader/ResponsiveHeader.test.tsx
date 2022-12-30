import { render, screen, fireEvent } from '@testing-library/react';
import ResponsiveHeader, { ExampleResponsiveHeaderMenuItems } from "./ResponsiveHeader";

describe('ResponsiveHeader', () => {
	it('renders logo if provided as text', () => {
	  render(<ResponsiveHeader config={{ logo: { text: 'Test logo' } }} />);
	  expect(screen.getByText('Test logo')).toBeInTheDocument();
	});
  
	it('renders logo if provided as an image', () => {
	  render(<ResponsiveHeader config={{ logo: { url: 'https://via.placeholder.com/100x50' } }} />);
	  expect(screen.getByAltText('logo')).toBeInTheDocument();
	});
  
	it('renders menu items if provided', () => {
	  render(<ResponsiveHeader menuItems={ExampleResponsiveHeaderMenuItems} />);
	  expect(screen.getAllByText('ToS')).toHaveLength(2);
	});
  
});

/* TODO: Add testing for responsive elements of the component 
/* it :: shows the burger menu at smaller resolutions
/* it :: shows the menu when the burger icon is clicked
*/