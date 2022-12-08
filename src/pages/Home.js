import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Route path="/">
    <div className="container">
      <h1>Welcome to our page!</h1>
      <p>
        Math Magicians is a single page application (SPA)
        built with React for people who love mathematics.
        It helps to make calculations straight forward and easy.
        Mathematics includes the study of such topics as numbers, formulas and
        related structures, shapes and spaces in which they are contained,
        and quantities and their changes.
        There is no general consensus about its exact scope or epistemological status.
        Calculators allow people around the world solve complicated problems quickly and
        in an efficient manner.
        Additionally, it can reduce the problem to simpler tasks and
        allows us to devote more time in understanding the problem.
      </p>
    </div>
  </Route>
);
export default Home;
