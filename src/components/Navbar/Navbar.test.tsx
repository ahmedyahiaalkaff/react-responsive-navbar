import React from 'react';
import {render, screen} from '@testing-library/react';
import {Navbar} from './Navbar';

const El = ({hello}:{hello?:string})=>{
  return (
    <div>

    </div>
  );
}

describe('Testing Navbar', ()=>{
  test('testing normal render', ()=>{
    render(<Navbar items={[{name:'Home', href:'/'}]} otherElement={<El />}/>);
    expect(screen.getByText('Home')).toBeDefined();
  })
})