import React from 'react';
import { shalow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications renders without crashing', () => {
  it('renders the notification', () => {
    const notification = shalow(<Notifications/>);
    expect(notification).toBeDefined();
  })

  it('renders ul', () => {
    const notification = shalow(<Notifications/>);
    expect(notification.find('ul')).toBeDefined();
  })

  it('renders the 3 li', () => {
    const notification = shalow(<Notifications/>);
    expect(notification.find('li')).toBeDefined();
  })

  it('renders the paragraph', () => {
    const notification = shalow(<Notifications/>);
    expect(notification.find('p')).toBeDefined();
  })
})
