import React from 'react';

type MenuItem = {
    label: string;
    key: string;
    url?: string;
    target?: string;
};
type MenuConfiguration = {
    menuStyles?: React.CSSProperties;
    itemStyles?: React.CSSProperties;
    dropdownItemStyles?: React.CSSProperties;
    logo?: {
        text?: string;
        url?: string;
        logoStyles?: React.CSSProperties;
    };
};
type ResponsiveHeaderProps = {
    config?: MenuConfiguration;
    menuItems?: MenuItem[];
};
declare const ResponsiveHeader: React.FC<ResponsiveHeaderProps>;
declare const ExampleResponsiveHeaderProps: ResponsiveHeaderProps;

type ResponsiveHeroHeadingConfig = {
    text: string;
    style?: React.CSSProperties;
    classList?: string;
};
type ResponsiveHeroTextConfig = {
    paragraphs: string[];
    style?: React.CSSProperties;
    classList?: string;
};
type ResponsiveHeroCtaConfig = {
    label: string;
    style?: React.CSSProperties;
    classList?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
type ResponsiveHeroProps = {
    bgStyles?: React.CSSProperties;
    headingConfig?: ResponsiveHeroHeadingConfig;
    textConfig?: ResponsiveHeroTextConfig;
    ctaConfig?: ResponsiveHeroCtaConfig[];
};
declare const ExampleResponsiveHeroProps: ResponsiveHeroProps;
declare const ResponsiveHero: React.FC<ResponsiveHeroProps>;

export { ExampleResponsiveHeaderProps, ExampleResponsiveHeroProps, ResponsiveHeader, ResponsiveHeaderProps, ResponsiveHero, ResponsiveHeroProps };
