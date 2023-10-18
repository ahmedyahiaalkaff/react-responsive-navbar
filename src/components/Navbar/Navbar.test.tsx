import React from 'react';
import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';

describe('Testing Navbar', ()=>{
  test('testing normal render', ()=>{
    render(<Navbar items={[{name:'Home', href:'/'}]} />);
    expect(screen.getByText('Home')).toBeDefined();
  })
})