import React from 'react';

const Dropdown = ({ selectedOptions, setSelectedOptions }) => {
  const options = ['Alphabets', 'Numbers', 'Highest alphabet'];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <select multiple={true} value={selectedOptions} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
