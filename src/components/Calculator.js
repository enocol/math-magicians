import PropTypes from 'prop-types';

const Calculator = ({ onClick, state }) => (
  <div className="container">
    <section className="section">
      <div className="results gray-bg flex-container">
        <div className="flex-items">{state.total || null}</div>
        <div className="flex-items">{state.operation}</div>
        <div className="flex-items">{state.next}</div>
      </div>

      <button
        type="button"
        className="items item1 light-bg"
        onClick={() => onClick('AC')}
      >
        AC
      </button>
      <button
        type="button"
        className="items item2 light-bg"
        onClick={() => onClick('+/-')}
      >
        +/-
      </button>
      <button
        type="button"
        className="items item3 light-bg"
        onClick={() => onClick('%')}
      >
        %
      </button>
      <button
        type="button"
        className="items item4 golden-bg"
        onClick={() => onClick('/')}
      >
        /
      </button>
      <button
        type="button"
        className="items item5 light-bg"
        onClick={() => onClick('7')}
      >
        7
      </button>
      <button
        type="button"
        className="items item6 light-bg"
        onClick={() => onClick('8')}
      >
        8
      </button>
      <button
        type="button"
        className="items item7 light-bg"
        onClick={() => onClick('9')}
      >
        9
      </button>
      <button
        type="button"
        className="items item8 golden-bg"
        onClick={() => onClick('x')}
      >
        x
      </button>
      <button
        type="button"
        className="items item9 light-bg"
        onClick={() => onClick('4')}
      >
        4
      </button>
      <button
        type="button"
        className="items item10 light-bg"
        onClick={() => onClick('5')}
      >
        5
      </button>
      <button
        type="button"
        className="items item11 light-bg"
        onClick={() => onClick('6')}
      >
        6
      </button>
      <button
        type="button"
        className="items item12 golden-bg"
        onClick={() => onClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="items item13 light-bg"
        onClick={() => onClick('1')}
      >
        1
      </button>
      <button
        type="button"
        className="items item14 light-bg"
        onClick={() => onClick('2')}
      >
        2
      </button>
      <button
        type="button"
        className="items item15 light-bg"
        onClick={() => onClick('3')}
      >
        3
      </button>
      <button
        type="button"
        className="items item16 golden-bg"
        onClick={() => onClick('-')}
      >
        -
      </button>
      <button
        type="button"
        className="items item17 light-bg"
        onClick={() => onClick('0')}
      >
        0
      </button>
      <button
        type="button"
        className="items item18 golden-bg"
        onClick={() => onClick('=')}
      >
        =
      </button>
    </section>
  </div>
);

export default Calculator;

Calculator.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};
