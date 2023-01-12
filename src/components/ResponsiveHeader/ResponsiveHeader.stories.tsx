import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResposiveHeader, { ExampleResponsiveHeaderProps } from './ResponsiveHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout Components/Header',
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
const FullWidthTemplate: ComponentStory<typeof ResposiveHeader> = (args) => {
    return <div className='@container w-full'>
        <ResposiveHeader {...args} />
    </div>
};
const HalfWidthTemplate: ComponentStory<typeof ResposiveHeader> = (args) => {
    return <div className='@container w-1/2'>
        <ResposiveHeader {...args} />
    </div>
};
const QuarterWidthTemplate: ComponentStory<typeof ResposiveHeader> = (args) => {
    return <div className='@container w-1/4'>
        <ResposiveHeader {...args} />
    </div>
};

export const FullWidth = FullWidthTemplate.bind({});
export const HalfWidth = HalfWidthTemplate.bind({});
export const QuarterWidth = QuarterWidthTemplate.bind({});

FullWidth.args = { ...ExampleResponsiveHeaderProps };
HalfWidth.args = { ...ExampleResponsiveHeaderProps };
QuarterWidth.args = { ...ExampleResponsiveHeaderProps };