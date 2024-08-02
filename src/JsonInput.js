import React, { useState } from 'react';

const JsonInput = ({ setResponse, setError }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      if (parsedInput && parsedInput.data) {
        const response = await fetch('https://your-backend-url/bfhl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(parsedInput)
        });
        const data = await response.json();
        setResponse(data);
        setError(null);
      } else {
        throw new Error('Invalid JSON format');
      }
    } catch (error) {
      setError(error.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON here'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default JsonInput;
