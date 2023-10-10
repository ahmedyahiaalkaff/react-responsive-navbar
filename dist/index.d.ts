import React from 'react';

type Item = {
    name: string;
    href: string;
};
type NavbarProps = {
    items?: Array<Item>;
    logo?: string;
};
declare function Navbar({ items, logo }: NavbarProps): React.JSX.Element;

export { Navbar, type NavbarProps };
