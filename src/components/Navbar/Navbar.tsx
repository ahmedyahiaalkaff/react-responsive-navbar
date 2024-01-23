import React, { JSXElementConstructor, ReactElement } from 'react';
import '../styles.css';

import {useState } from "react";


function Hamburger({onClick}:{onClick:()=>void}){
  return (
    <svg viewBox="0 0 100 80" width="40" height="40" onClick={onClick}>
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
}

export type Item = {
  name: string,
  href: string,
}

export type NavbarProps = {
  items?: Item[],
  logo?: string,
  otherElement?: React.JSX.Element,
  containerClassName?: string,
  logoContainerClassName?: string,
  logoImgClassName?: string,
  navClassName?: string,
  hamburgerClassName?: string,
  renderItem?: (item:Item) => React.JSX.Element,
};

export function Divvv() {
  return (
    <div>
      Hello Divvv
    </div>
  )
}

export function Navbar(
  {
    items=[{"name":"Home", "href":"/"}],
    logo,
    otherElement,
    containerClassName,
    logoContainerClassName,
    logoImgClassName,
    navClassName,
    hamburgerClassName,
    renderItem,
  } : NavbarProps){
  const [menuState, setMenuState]:['hidden' | 'block', Function] = useState('hidden');

  function toggleMenu(){
    setMenuState((ms:string)=>{
      return ms == 'hidden'?'block':'hidden';
    })
  }
  let menuItems = null;
  if(items){
    if(renderItem && typeof renderItem === 'function'){
      menuItems = items.map(item => {
        return (
          <li key={item.name}>{renderItem(item)}</li>
        )
      });
    }else{
      menuItems = items.map(item => <li className="" key={item.name}><a href={item.href} className='hover:text-blue-200'>{item.name}</a></li>)
    }
  }
  return (
    <header className={`flex flex-row justify-start items-center p-5 ${containerClassName?containerClassName:''}`}>
      <div className={`flex items-center grow ${logoContainerClassName?logoContainerClassName:''}`}>
        {logo &&
          <a>
            <img src={logo} alt="logo" className={`h-10 sm:h-14 w-10 sm:w-14 ${logoImgClassName?logoImgClassName:''}`}/>
          </a>
        }
      </div>
      {otherElement && <div>{otherElement}</div>}
      <nav className={`${menuState} fixed p-5 sm:p-5 top-0 left-0 z-10 sm:static sm:block w-full h-full sm:h-auto sm:w-auto bg-gray-300 sm:bg-transparent ${navClassName?navClassName:''}`}>
        <div className="flex justify-end">
          <svg className="sm:hidden block" width="40" height="40" stroke="black" strokeWidth={2} onClick={toggleMenu}>
            <line x1="5" y1="5" x2="30" y2="30" />
            <line x1="30" y1="5" x2="5" y2="30"/>
          </svg>
        </div>
        <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-20 align-middle text-center sm:visible">
          {menuItems}
        </ul>
      </nav>
      <div className={`fill-black align-middle sm:hidden grow flex justify-end p-2 ${hamburgerClassName?hamburgerClassName:''}`}>
        <Hamburger onClick={toggleMenu}/>
      </div>
    </header>
  )
}

