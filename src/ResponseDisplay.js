import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (!response) return null;

  const renderData = () => {
    const { numbers, alphabets, highest_alphabet } = response;
    return (
      <div>
        {selectedOptions.includes('Numbers') && (
          <div>Numbers: {JSON.stringify(numbers)}</div>
        )}
        {selectedOptions.includes('Alphabets') && (
          <div>Alphabets: {JSON.stringify(alphabets)}</div>
        )}
        {selectedOptions.includes('Highest alphabet') && (
          <div>Highest Alphabet: {JSON.stringify(highest_alphabet)}</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h3>Response Data</h3>
      {renderData()}
    </div>
  );
};

export default ResponseDisplay;
