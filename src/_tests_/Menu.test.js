import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Menu from '../components/Menu';

const Container = () => {
  <BrowserRouter>
    <Menu />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
