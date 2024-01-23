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
    otherElement: (
      <div className="grow-[2] flex justify-end relative">
        <input type="text" placeholder='search' className='rounded-md border-2 border-black'/>
        <span className='absolute right-2 top-1'>
          <svg className="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </span>
      </div>
    )
  },
};

const onChange = (e) => {
  console.log('changed', e.target.checked);
}

export const DarkMode = {
  args: {
    // primary: true,
    // label: 'Button',
    items : [
      {name: 'Home', href:"/", type: 'a'},
      {name: 'About', href:"/about", type: 'a'},
      {name: 'Contact', href:"/contact", type: 'a'},
    ],
    logo: '/logo.jpg',
    otherElement: (
      <>
        <input
        className="mr-2 mt-[0.3rem] h-3.5 w-8
                  appearance-none rounded-[0.4375rem]
                  bg-neutral-300 before:pointer-events-none
                    before:absolute before:h-3.5 before:w-3.5
                    before:rounded-full before:bg-transparent
                    before:content-[''] after:absolute after:z-[2]
                    after:-mt-[0.1875rem] after:h-5 after:w-5
                    after:rounded-full after:border-none
                  after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={onChange}
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchCheckDefault"
          >Dark Mode</label
        >
      </>
    ),
    containerClassName: 'bg-gray-700 text-white'
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
    containerClassName: 'bg-gray-700 text-white'
  },
};

export const WithRenderItem = {
  args: {
    items : [
      {name: 'Home', href:"/"},
      {name: 'About', href:"/about"},
      {name: 'Contact', href:"/contact"},
    ],
    renderItem: (item) => {
      return (<div>{item.name}</div>)
    }
  },
};
