import { shallow } from 'enzyme';
import App from './App';

describe('App renders correctly', () => {
  it('App renders correctly', () => {
    expect(shallow(<App />).exists());
  });

  it('notifications renders correctly', () => {
    const app = shallow(App);
    expect(app.find('Notifications')).toHaveLength(1);
  });

  it('Header renders correctly', () => {
    const app = shallow(App);
    expect (app.find('Header')).toHaveLength(1);
  });

  it('Login renders correctly', () => {
    const app = shallow(App);
    expect (app.find('Login')).toHaveLength(1);
  });

  it('Footer renders correctly', () => {
    expect(app.find('Footer')).toHaveLength(1);
  });
})
