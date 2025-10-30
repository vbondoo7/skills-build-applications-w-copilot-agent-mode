import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        setLoading(false);
        console.log('Fetched activities:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching activities:', err);
      });
  }, [endpoint]);

  if (loading) return <div>Loading activities...</div>;

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={a.id || i}>{a.activity || JSON.stringify(a)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
