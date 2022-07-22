import { shalow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('App Header renders correctly', () => {
    const header = shalow(<Header />);
    expect(header).toBeDefined();
  });

  it('App Header renders correctly', () => {
    const header = shalow(<Header/>);
    expect(header.find('img')).toBeDefined();
  })

  it('App Header renders correctly', () => {
    const header = shalow(<Header/>);
    expect(header.find('h1')).toBeDefined();
  });
})
