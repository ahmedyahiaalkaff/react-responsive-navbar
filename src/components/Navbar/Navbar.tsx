import React from 'react';
import '../styles.css';

import {useState } from "react";


function Hamburger(){
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
}

type Item = {
  name: string,
  href: string,
}

export type NavbarProps = {items?: Array<Item>, logo?: string};

export default function Navbar({items=[{"name":"Home", "href":"/"}], logo}:NavbarProps){
  const [menuState, setMenuState]:[string, Function] = useState('hidden');

  function toggleMenu(){
    setMenuState((ms:string)=>{
      return ms == 'hidden'?'block':'hidden';
    })
  }
  return (
    <header className="flex flex-row justify-start p-5 bg-red-100 items-center shadow-md">
      <div className="flex items-center grow">
        {logo &&
          <a>
            <img src={logo} alt="logo" className="h-10 sm:h-14 w-10 sm:w-14"/>
          </a>}
      </div>
      <div className="grow-[2] flex justify-end relative">
        <input type="text" placeholder='search' className='rounded-md border-2 border-black'/>
        <span className='absolute right-2 top-1'>
          <svg className="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </span>
      </div>
      <nav className={`${menuState} absolute p-5 sm:p-5 top-0 left-0 sm:static sm:block w-full h-full sm:h-auto sm:w-auto bg-gray-300 sm:bg-transparent`}>
        <div className="flex justify-end">
          <svg className="sm:hidden block" width="40" height="40" stroke="black" strokeWidth={2} onClick={toggleMenu}>
            <line x1="5" y1="5" x2="30" y2="30" />
            <line x1="30" y1="5" x2="5" y2="30"/>
          </svg>
        </div>
        <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-20 align-middle text-center sm:visible">
          {items && items.map(i => <li className="" key={i.name}><a href={i.href} className='hover:text-blue-200'>{i.name}</a></li>)}
          {!items && <li className=""><a href="/">Home</a></li>}
        </ul>
      </nav>
      <div className="fill-black align-middle sm:hidden grow flex justify-end p-2" onClick={toggleMenu}>
        <Hamburger />
      </div>
    </header>
  )
}

