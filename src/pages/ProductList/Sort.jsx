import React from 'react';
import Select from 'react-select';

const Sort = ({ sortBy, onSortChange }) => {
  const options = [
    { value: 'upcoming', label: '최신순' },
    { value: 'sold', label: '판매순' },
    { value: 'likes', label: '좋아요순' },
  ];

  const handleChange = selectedOption => {
    onSortChange(selectedOption.value);
  };

  return (
    <label>
      정렬:&nbsp;
      <Select
        value={options.find(option => option.value === sortBy)}
        onChange={handleChange}
        options={options}
      />
    </label>
  );
};

export default Sort;
