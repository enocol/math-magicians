import { useEffect, useState } from 'react';

const apiEndPoint = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(apiEndPoint, {
        method: 'GET',
        headers: { 'X-Api-Key': 'W/zMTLroAOA81Nucjpne5Q==U3ljJp1yuKP3U8tD' },
      });
      const json = await response.json();

      setQuotes(json);
    };

    fetchdata();
  }, [setQuotes]);

  return (
    <div className="quote">
      {quotes.length === 0
        ? 'loading......................................'
        : quotes.map((q) => <h1 key={q.quote}>{q.quote}</h1>)}
    </div>
  );
};

export default Quotes;
