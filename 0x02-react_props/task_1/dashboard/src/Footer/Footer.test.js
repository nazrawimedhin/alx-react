import { shalow } from 'enzyme';
import Footer from './Footer';

describe('Footer renders correctly', () => {
  it('renders correctly', () => {
    const footer = shalow(<Footer/>);
    expect(footer).toBeDefined();
  });

  it('renders the paragraph correctly', () => {
    const footer = shalow(<Footer/>);
    expect(footer.find('p')).toBeDefined();
  });

  it('renders the copyright correctly', () => {
    const footer = shalow(<Footer/>);
    expect(footer.find('Copyright').at(0)).toBeDefined();
  });
})
