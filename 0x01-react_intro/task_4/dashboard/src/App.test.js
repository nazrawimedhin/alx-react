import React from 'react';
import { shalow } from 'enzyme';
import App from './App';

describe('App renders without crashing', () => {
  it('App renders', () => {
    const app = shalow(<App/>);
    expect(app).toBeDefined();
  });

  it('App-header renders', () => {
    const app = shalow(<App/>);
    expect(app.find('.App-header')).toBeDefined();
  });

  it('App-body renders', () => {
    const app = shalow(<App/>);
    expect(app.find('.App-body')).toBeDefined();
  })

  it('App-footer renders', () => {
    const app = shalow(<App/>);
    expect(app.find('.App-footer')).toBeDefined();
  })
})
