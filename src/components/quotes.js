import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const apiEndPoint = 'https://api.api-ninjas.com/v1/quotes?category=computers';

const Quotes = ({ state }) => {
  const [quotes, setQuotes] = useState([]);
  const [hasError, sethasError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setisLoading(true);
      try {
        const response = await fetch(apiEndPoint, {
          method: 'GET',
          headers: { 'X-Api-Key': 'W/zMTLroAOA81Nucjpne5Q==U3ljJp1yuKP3U8tD' },
        });
        const json = await response.json();

        setQuotes(json);
      } catch (error) {
        sethasError(true);
      }

      setisLoading(false);
    };

    fetchdata();
  }, [setQuotes, setisLoading, state.total]);

  if (hasError) return <div className="status">An error occured</div>;

  if (isLoading) return <div className="status">Loading......</div>;

  return (
    <div className="quote">
      {quotes.length === 0
        ? 'loading...............'
        : quotes.map((q) => <h1 key={q.quote}>{q.quote}</h1>)}
    </div>
  );
};

export default Quotes;

Quotes.propTypes = {
  state: PropTypes.string,
};

Quotes.defaultProps = {
  state: {},
};
