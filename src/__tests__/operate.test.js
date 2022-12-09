import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import operate from '../logic/operate';
<<<<<<< HEAD
import Header from '../components/Header';
import Calculator from '../components/Calculator';
=======
import Header from '../components/nav';
import Calculator from '../pages/calculator';
>>>>>>> f0e81aa0b204bde48db14eaffb5fe7a1eb348b25

test('Render NavBar', () => {
  const renderHeader = renderer
    .create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    .toJSON();
  expect(renderHeader).toMatchSnapshot();
});

test('Render Calculator', () => {
  const renderCalculator = renderer.create(<Calculator />).toJSON();
  expect(renderCalculator).toMatchSnapshot();
});

test('Sum 1, 2 result will be 2', () => {
  const result = operate(1, 2, 'x');
  expect(result).toBe('2');
});

test("Should return 'can not divide by 0 message'", () => {
  const result = operate(2, 0, '÷');
  expect(result).toBe("Can't divide by 0.");
});

test('Should display an invalid operation message when operation out of the calculator operation is used', () => {
  /* const result = operate(67, 90, '/'); */
  expect(() => operate(67, 90, '/')).toThrow("Unknown operation '/'");
});
