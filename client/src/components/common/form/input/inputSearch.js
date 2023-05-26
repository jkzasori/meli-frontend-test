
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input } from './input';
import ic_Search from "assets/img/ic_Search.png";
import "./styles/inputSearch.style.scss";

export const InputSearch = ({ onSearch, handleSearchChange, value }) => {

  const [searchValue, setSearchValue] = useState(value || '');

  const handleInputChange = (element) => {
    setSearchValue(element);
    handleSearchChange(element)
  };

  const searchKeyData = useCallback((e) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  }, [onSearch, searchValue]);

  const handleSearch = () => {
    handleSearchChange(searchValue);
    onSearch(searchValue);
  };

  return (
    <div className="input-search">
      <Input
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Nunca dejes de buscar"
        onKeyDown={searchKeyData}
      />
      <button onClick={handleSearch}>
        <img src={ic_Search} alt="searchMeliIcon" />
      </button>
    </div>
  );
};

InputSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
