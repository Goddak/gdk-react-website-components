import React from 'react';
import './ResponsiveHeader.css';
export type MenuItem = {
    label: string;
    key: string;
    url?: string;
    target?: string;
};
export type MenuConfiguration = {
    menuStyles?: React.CSSProperties;
    itemStyles?: React.CSSProperties;
    dropdownItemStyles?: React.CSSProperties;
    logo?: {
        text?: string;
        url?: string;
        logoStyles?: React.CSSProperties;
    };
};
export type ResponsiveHeaderProps = {
    config?: MenuConfiguration;
    menuItems?: MenuItem[];
};
declare const ResponsiveHeader: React.FC<ResponsiveHeaderProps>;
export declare const ExampleResponsiveHeaderConfig: MenuConfiguration;
export declare const ExampleResponsiveHeaderMenuItems: MenuItem[];
export declare const ExampleResponsiveHeaderProps: ResponsiveHeaderProps;
export default ResponsiveHeader;
