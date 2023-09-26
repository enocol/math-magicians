import React from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
  const { value } = props;
  return <div className="results gray-bg">{value}</div>;
};

export default Results;

Results.propTypes = {
  value: PropTypes.number.isRequired,
};
