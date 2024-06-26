import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 1) return;
    onAddCategory(newValue);
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type="text"
        placeholder="Search gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
