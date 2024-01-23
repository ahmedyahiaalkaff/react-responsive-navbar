# React Responsive NavBar

A Responsive React NavBar to be used in React projects.

Built with Next.js and tailwindcss in mind.

## Installation

To Install the package:

`npm install @ahmedalkaff/react-responsive-navbar`

## Usage

``` tsx
import {Navbar, type NavbarProps, type Item} from '@ahmedalkaff/react-responsive-navbar';

.
.
.

<Navbar
  items = {[
      {name: 'Home', href:"/"},
      {name: 'About', href:"/about"},
      {name: 'Contact', href:"/contact"},
    ]}
    containerClassName= 'bg-gray-700 text-white'
/>
```

