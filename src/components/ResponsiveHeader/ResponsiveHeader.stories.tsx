import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResposiveHeader from './ResponsiveHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: ResposiveHeader,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
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
} as ComponentMeta<typeof ResposiveHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ResposiveHeader> = (args) => <ResposiveHeader {...args} />;
