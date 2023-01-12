import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResposiveHero, { ExampleResponsiveHeroProps } from './ResponsiveHero';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout Components/Hero',
    component: ResposiveHero,
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
} as ComponentMeta<typeof ResposiveHero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const FullWidthTemplate: ComponentStory<typeof ResposiveHero> = (args) => {
    return <div className='@container w-full'>
        <ResposiveHero {...args} />
    </div>
};
const HalfWidthTemplate: ComponentStory<typeof ResposiveHero> = (args) => {
    return <div className='@container w-1/2'>
        <ResposiveHero {...args} />
    </div>
};
const QuarterWidthTemplate: ComponentStory<typeof ResposiveHero> = (args) => {
    return <div className='@container w-1/4'>
        <ResposiveHero {...args} />
    </div>
};

export const FullWidth = FullWidthTemplate.bind({});
export const HalfWidth = HalfWidthTemplate.bind({});
export const QuarterWidth = QuarterWidthTemplate.bind({});

FullWidth.args = { ...ExampleResponsiveHeroProps };
HalfWidth.args = { ...ExampleResponsiveHeroProps };
QuarterWidth.args = { ...ExampleResponsiveHeroProps };