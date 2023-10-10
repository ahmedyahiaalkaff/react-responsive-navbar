import { array } from 'prop-types';
import {Navbar} from '../components/Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    // primary: true,
    // label: 'Button',
    items : [
      {name: 'Home', href:"/", type: 'a'},
      {name: 'About', href:"/about", type: 'a'},
      {name: 'Contact', href:"/contact", type: 'a'},
    ],
    logo: '/logo.jpg',
  },
};

export const DefaultItems = {
  args: {
    // primary: true,
    // label: 'Button',
    logo: '/logo.jpg',
  },
};

export const NoLogo = {
  args: {
    items : [
      {name: 'Home', href:"/"},
      {name: 'About', href:"/about"},
      {name: 'Contact', href:"/contact"},
    ],
  },
};
