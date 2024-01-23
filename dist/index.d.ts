import React from 'react';

type Item = {
    name: string;
    href: string;
};
type NavbarProps = {
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
declare function Divvv(): React.JSX.Element;
declare function Navbar({ items, logo, otherElement, containerClassName, logoContainerClassName, logoImgClassName, navClassName, hamburgerClassName, renderItem, }: NavbarProps): React.JSX.Element;

export { Divvv, type Item, Navbar, type NavbarProps };
