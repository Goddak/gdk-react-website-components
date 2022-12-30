import React from 'react';
export type ResponsiveHeroHeadingConfig = {
    text: string;
    style?: React.CSSProperties;
    classList?: string;
};
export declare const ExampleResponsiveHeroHeadingConfig: ResponsiveHeroHeadingConfig;
export type ResponsiveHeroTextConfig = {
    paragraphs: string[];
    style?: React.CSSProperties;
    classList?: string;
};
export declare const ExampleResponsiveHeroTextConfig: ResponsiveHeroTextConfig;
export type ResponsiveHeroCtaConfig = {
    label: string;
    style?: React.CSSProperties;
    classList?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export declare const ExampleResponsiveHeroCtaConfig: ResponsiveHeroCtaConfig[];
export type ResponsiveHeroProps = {
    bgStyles?: React.CSSProperties;
    headingConfig?: ResponsiveHeroHeadingConfig;
    textConfig?: ResponsiveHeroTextConfig;
    ctaConfig?: ResponsiveHeroCtaConfig[];
};
export declare const ExampleResponsiveHeroProps: ResponsiveHeroProps;
declare const ResponsiveHero: React.FC<ResponsiveHeroProps>;
export default ResponsiveHero;
