import React from 'react';

const Sort = ({ sortBy, onSortChange }) => {
  return (
    <label>
      정렬:&nbsp;
      <select
        value={sortBy}
        onChange={({ target: { value } }) => onSortChange(value)}
      >
        <option value="upcoming">최신순</option>
        <option value="sold">판매순</option>
        <option value="likes">좋아요순</option>
      </select>
    </label>
  );
};

export default Sort;
