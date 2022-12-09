import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Render Quote', () => {
  const renderQuote = renderer.create(<Quote />).toJSON();
  expect(renderQuote).toMatchSnapshot();
});
