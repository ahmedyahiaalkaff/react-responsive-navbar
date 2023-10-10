import React from 'react';
import '../styles.css';
type Item = {
    name: string;
    href: string;
};
export type NavbarProps = {
    items?: Array<Item>;
    logo?: string;
};
export default function Navbar({ items, logo }: NavbarProps): React.JSX.Element;
export {};
