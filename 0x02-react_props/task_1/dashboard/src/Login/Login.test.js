import React from 'react';
import { shalow } from 'enzyme';
import Login from './Login';

describe('login tag renders correctly', () => {
  it('login tag renders correctly', () => {
    const login = shalow(<Login />);
    expect(login).toBeDefined();
  });

  it('2 lable tags render correctly', () => {
    const login = shalow(<Login />);
    expect(login.find(lable)).toBeDefined();
  })

  it('2 input tags render correctly', () => {
    const login = shalow(<Login />);
    expect(login.find(input)).toBeDefined();
  });
})
