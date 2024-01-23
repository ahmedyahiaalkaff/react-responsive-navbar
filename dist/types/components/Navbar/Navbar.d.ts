import React from 'react';
import '../styles.css';
export type Item = {
    name: string;
    href: string;
};
export type NavbarProps = {
    items?: Item[];
    logo?: string;
    otherElement?: React.JSX.Element;
    containerClassName?: string;
    logoContainerClassName?: string;
    logoImgClassName?: string;
    navClassName?: string;
    hamburgerClassName?: string;
    renderItem?: (item: Item) => React.JSX.Element;
};
export declare function Divvv(): React.JSX.Element;
export declare function Navbar({ items, logo, otherElement, containerClassName, logoContainerClassName, logoImgClassName, navClassName, hamburgerClassName, renderItem, }: NavbarProps): React.JSX.Element;
