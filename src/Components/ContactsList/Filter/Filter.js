import React from 'react';
import PropTypes from "prop-types";

const Filter = (props) => {
  const { getFilterValue, filterPhoneBook } = props;
  return (
    <div>
      <label>
        <input
          className="input"
          onChange={getFilterValue}
          name="filterPhoneBook"
          type="text"
          value={filterPhoneBook}
          placeholder="filter name"
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  getFilterValue: PropTypes.func.isRequired,
  filterPhoneBook: PropTypes.string.isRequired,
};