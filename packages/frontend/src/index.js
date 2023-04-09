import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/ex')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Node.js Visualizer</h1>
      <p>{data.message}</p>
      <p>Welcome to the Node.js Visualizer!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
