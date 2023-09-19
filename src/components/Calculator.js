import React from 'react';
import Results from './Results';

const Calculator = () => (
  <div className="container">
    <section className="section">
      <Results value={0} />
      <div className="items item1 light-bg">AC</div>
      <div className="items item2 light-bg">+/-</div>
      <div className="items item3 light-bg">%</div>
      <div className="items item4 golden-bg">/</div>
      <div className="items item5 light-bg">4</div>
      <div className="items item6 light-bg">6</div>
      <div className="items item7 light-bg">7</div>
      <div className="items item8 golden-bg">x</div>
      <div className="items item9 light-bg">8</div>
      <div className="items item10 light-bg">10</div>
      <div className="items item11 light-bg">11</div>
      <div className="items item12 golden-bg">+</div>
      <div className="items item13 light-bg">13</div>
      <div className="items item14 light-bg">14</div>
      <div className="items item15 light-bg">15</div>
      <div className="items item16 golden-bg">-</div>
      <div className="items item17 light-bg">0</div>
      <div className="items item18 golden-bg">=</div>
    </section>
  </div>
);

export default Calculator;
