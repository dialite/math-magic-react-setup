/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import '../logic/operate';

const Calculator = () => {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
    err: null,
  });

  const clickHandler = (e) => {
    setData((prevData) => calculate(prevData, e.target.name));
  };

  return (
    <div className="main-container">
      <h2>Lets Do Some Math</h2>
      <div className="calculation-field">
        <h1 className="answer" data-testid="testH2">
          {data.next || data.operation || data.total || data.err || 0}
        </h1>
        <div className="numbers-and-symbols">
          <button
            type="button"
            onClick={clickHandler}
            className="AC size"
            name="AC"
          >
            AC
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="plus-or-minus size"
            name="+/-"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="percentage size"
            name="%"
          >
            %
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="division size orabg-bg"
            name="÷"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="seven size"
            name="7"
          >
            7
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="eight size"
            name="8"
          >
            8
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="nine size"
            name="9"
          >
            9
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="cross size orabg-bg"
            name="x"
          >
            x
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="four size"
            name="4"
          >
            4
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="five size"
            name="5"
          >
            5
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="six size"
            name="6"
          >
            6
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="minus size orabg-bg"
            name="-"
          >
            -
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="one size"
            name="1"
          >
            1
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="two size"
            name="2"
          >
            2
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="three size"
            name="3"
          >
            3
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="plus size orabg-bg"
            name="+"
          >
            +
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="zero"
            name="0"
          >
            0
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="dot size"
            name="."
          >
            .
          </button>
          <button
            type="button"
            onClick={clickHandler}
            className="equal size orabg-bg"
            name="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
