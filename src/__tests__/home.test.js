import renderer from 'react-test-renderer';
import Home from '../pages/home';

test('render Home', () => {
  const renderHome = renderer.create(<Home />).toJSON();
  expect(renderHome).toMatchSnapshot();
});
