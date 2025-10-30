import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        setLoading(false);
        console.log('Fetched workouts:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching workouts:', err);
      });
  }, [endpoint]);

  if (loading) return <div>Loading workouts...</div>;

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((w, i) => (
          <li key={w.id || i}>{w.name || JSON.stringify(w)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
