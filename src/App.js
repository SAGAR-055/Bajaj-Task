import React, { useState, useEffect } from 'react';
import JsonInput from './JsonInput';
import Dropdown from './Dropdown';
import ResponseDisplay from './ResponseDisplay';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = 'ABCD123'; // Set the title to your roll number
  }, []);

  return (
    <div className="App">
      <h1>Backend Response App</h1>
      <JsonInput setResponse={setResponse} setError={setError} />
      {error && <div className="error">{error}</div>}
      {response && (
        <>
          <Dropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
