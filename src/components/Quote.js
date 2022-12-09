import React from 'react';
import '../App.css';
import style from './styles.module.css';

const Quote = () => (
  <div className="quoteContainer">
    <div className="quote">
      <p className={style.marginLeftAndRight}>
        Mathematics is not about numbers, equations, or algorithms: it is about
        understanding. —William Paul Thurston
      </p>
      <p className={style.marginLeftAndRight}>
        Pure mathematics is, in its way, the poetry of logical ideas. — Albert
        Einstein, German theoretical physicist
      </p>
      <p className={style.marginLeftAndRight}>
        Without mathematics, there’s nothing you can do. Everything around you
        is mathematics. Everything around you is numbers. — Shakuntala Devi,
        Indian writer and mental calculator
      </p>
      <p className={style.marginLeftAndRight}>
        Mathematics is the most beautiful and most powerful creation of the
        human spirit. — Stefan Banach, Polish mathematician
      </p>
      <p className={style.marginLeftAndRight}>
        We will always have STEM with us. Some things will drop out of the
        public eye and go away, but there will always be science, engineering,
        and technology. And there will always, always be mathematics. —
        Katherine Johnson, African-American mathematician
      </p>
      <p className={style.marginLeftAndRight}>
        Mathematics as an expression of the human mind reflects the active will,
        the contemplative reason, and the desire for aesthetic perfection. Its
        basic elements are logic and intuition, analysis and construction,
        generality and individuality. — Richard Courant, German-American
        mathematician
      </p>
    </div>
  </div>
);

export default Quote;
