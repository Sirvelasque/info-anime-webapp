import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Details from '../components/Details';
import Menu from '../components/Menu';
import Navbar from '../components/NavBar';
import Categories from '../components/Categories/Categories';
import App from '../App'

test('render details', () => {
  const Container = () => {
    <BrowserRouter>
      <Details />
    </BrowserRouter>;
  };
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Menu', () => {
  const Container = () => {
    <BrowserRouter>
      <Menu />
    </BrowserRouter>;
  };
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Categories', () => {
  const Container = () => {
    <BrowserRouter>
      <Categories />
    </BrowserRouter>;
  };
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Navbar', () => {
  const Container = () => {
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>;
  };
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render App', () => {
  const Container = () => {
    <BrowserRouter>
      <App />
    </BrowserRouter>;
  };
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
