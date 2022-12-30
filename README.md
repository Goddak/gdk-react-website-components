# GDK React Website Components

GDK React Website Components is a collection of reusable components for building responsive websites with React.

## Installation

To install GDK React Website Components, run the following command:

`npm install gdk-react-website-components`

## Components

### ResponsiveHeader

The ResponsiveHeader component is a header with an optional navigation menu that can be displayed either as a horizontal menu on larger screens or as a dropdown menu on smaller screens. The component can also optioanl render a heading as text or an image from url.

#### Props

- `config?: MenuConfiguration`: (optional) An object for customizing/determining the appearance of the menu.
- `menuItems?: MenuItem[]`: (optional) An array of objects representing the items in the menu.

#### Types

- `MenuConfiguration`: An object with the following properties:
  - `menuStyles?: React.CSSProperties`: (optional) Styles to be applied to the container element of the menu.
  - `itemStyles?: React.CSSProperties`: (optional) Styles to be applied to the individual menu items.
  - `dropdownItemStyles?: React.CSSProperties`: (optional) Styles to be applied to the individual menu items when the menu is displayed as a dropdown.
  - `logo?: { text?: string; url?: string; logoStyles?: React.CSSProperties }`: (optional) Options for displaying a logo.

- `MenuItem`: An object with the following properties:
  - `label: string`: The text to be displayed for the menu item.
  - `key: string`: A unique key for the menu item.
  - `url?: string`: (optional) A URL to navigate to when the menu item is clicked.
  - `target?: string`: (optional) The ID of a target scroll element to jump to when the menu item is clicked.
*Note: if a URL and a target is supplied the URL will be observed*

#### Examples

Here is an example of how to use the ResponsiveHeader component:

```jsx
import { ResponsiveHeader, ResponsiveHeaderProps } from 'gdk-react-website-components';

const ExampleResponsiveHeaderProps: ResponsiveHeaderProps = {
	config: {
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
	},
	menuItems: [
		{ label: "Blog", key: "blog", url: "https://goddak.co.uk" },
		{ label: "Docs", key: "docs", url: "https://goddak.co.uk" },
		{ label: "Support", key: "support", url: "https://goddak.co.uk" },
		{ label: "ToS", key: "tos", url: "https://goddak.co.uk" }
	],
}

<ResponsiveHeader { ...ExampleResponsiveHeaderProps }/>
```


### ResponsiveHero

The ResponsiveHero component is a full-width image container with optional heading, text & cta buttons that adjusts its layout based on the width of the viewport.

#### Props

- `bgStyles?: React.CSSProperties`: (optional) Styles to be applied to the container element.
- `headingConfig?: ResponsiveHeroHeadingConfig`: (optional) An object for customizing the appearance and content of the heading element.
- `textConfig?: ResponsiveHeroTextConfig`: (optional) An object for customizing the appearance and content of the text element.
- `ctaConfig?: ResponsiveHeroCtaConfig[]`: (optional) An array of objects representing call-to-action buttons.

#### Types

- `ResponsiveHeroHeadingConfig`: An object with the following properties:
  - `text: string`: The text to be displayed in the heading element.
  - `style?: React.CSSProperties`: (optional) Styles to be applied to the heading element.
  - `classList?: string`: (optional) A string of class names to be applied to the heading element.
- `ResponsiveHeroTextConfig`: An object with the following properties:
  - `paragraphs: string[]`: An array of strings representing the paragraphs of text to be displayed.
  - `style?: React.CSSProperties`: (optional) Styles to be applied to the text element.
  - `classList?: string`: (optional) A string of class names to be applied to the text element.
- `ResponsiveHeroCtaConfig`: An object with the following properties:
  - `label: string`: The text to be displayed on the call-to-action button.
  - `style?: React.CSSProperties`: (optional) Styles to be applied to the call-to-action button.
  - `classList?: string`: (optional) A string of class names to be applied to the call-to-action button.
  - `onClick: React.MouseEventHandler<HTMLButtonElement>`: A function to be called when the call-to-action button is clicked.
- `ResponsiveHeroProps`: An object with the following properties:
  - `bgStyles?: React.CSSProperties`: (optional) Styles to be applied to the background element of the banner.
  - `headingConfig?: ResponsiveHeroHeadingConfig`: (optional) An object for customizing the appearance and content of the heading element in the banner.
  - `textConfig?: ResponsiveHeroTextConfig`: (optional) An object for customizing the appearance and content of the text element in the banner.
  - `ctaConfig?: ResponsiveHeroCtaConfig[]`: (optional) An array of objects representing call-to-action buttons to be displayed in the banner.

#### Examples

Here is an example of how to use the ResponsiveHero component:

```jsx
import { ResponsiveHero, ResponsiveHeroProps } from 'gdk-react-website-components';

const ExampleResponsiveHeroProps: ResponsiveHeroProps = {
	bgStyles: {
		backgroundImage: "url('https://cdn.midjourney.com/dd10db38-a6d4-4c30-9a16-237faf9e8833/grid_0.png')",
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	headingConfig: { text: "Fascinating Heading Goes Here" },
	textConfig: {
		paragraphs: [
			'Logical and emotional statements go here to add value and entice the user to click the buttons that are enevitably located below.',
			'Yep that\'s right the one\'s you can see directly below me!'
		]
	},
	ctaConfig: [
		{ label: "Click Me", onClick: (e) => {} },
		{ label: "Learn More", onClick: (e) => {}, style: { backgroundColor: "#EFF3F8", color: "#3A414C"} },
]
}

<ResponsiveHero { ...ExampleResponsiveHeroProps }/>
```
