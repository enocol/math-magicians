import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const apiEndPoint = 'https://api.api-ninjas.com/v1/quotes?category=money';

const Quotes = ({ state }) => {
  const [quotes, setQuotes] = useState([]);
  const [hasError, sethasError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setisLoading(true);
      try {
        const response = await fetch(apiEndPoint, {
          headers: { 'X-Api-Key': 'TyEBFPiF8gsxAoUo4A5QdSj4H0r7ODyuEHFPT2D0' },
        });
        const json = await response.json();

        setQuotes(json);
      } catch (error) {
        sethasError(true);
      }

      setisLoading(false);
    };

    fetchdata();
  }, [setQuotes, setisLoading, state]);

  const renderStatus = () => {
    if (isLoading) return <div className="status">Loading......</div>;
    if (hasError) return <div className="status">An error occured</div>;
    return (
      <div className="quote">
        {quotes.length === 0
          ? 'loading...............'
          : quotes.map((q) => <h1 key={q.quote}>{q.quote}</h1>)}
      </div>
    );
  };

  return renderStatus();
};

export default Quotes;

Quotes.propTypes = {
  state: PropTypes.string,
};

Quotes.defaultProps = {
  state: {},
};
