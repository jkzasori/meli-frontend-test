
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from './input';
import ic_Search from "assets/img/ic_Search.png";
import "./styles/inputSearch.style.scss";

export const InputSearch = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e?.target?.value);
    onSearch(e?.target?.value)
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-search">
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Nunca dejes de buscar"
      />
      <button onClick={handleSearch}>
        <img src={ic_Search} alt="searchMeliIcon" />
      </button>
    </div>
  );
};

InputSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
