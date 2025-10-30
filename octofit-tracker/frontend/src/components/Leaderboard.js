import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setData(results);
        setLoading(false);
        console.log('Fetched leaderboard:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching leaderboard:', err);
      });
  }, [endpoint]);

  if (loading) return <div>Loading leaderboard...</div>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {data.map((item, i) => (
          <li key={item.id || i}>{item.username || JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
