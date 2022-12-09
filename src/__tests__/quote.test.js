import renderer from 'react-test-renderer';
// eslint-disable-next-line import/extensions
import Quote from '../pages/quote';

test('Render Quote', () => {
  const renderQuote = renderer.create(<Quote />).toJSON();
  expect(renderQuote).toMatchSnapshot();
});
