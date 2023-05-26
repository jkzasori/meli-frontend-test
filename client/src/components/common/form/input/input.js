
import React from 'react';
import PropTypes from 'prop-types';
import "./styles/input.style.scss";

export const Input = ({ label, value, onChange, placeholder = 'Nunca dejes de buscar', ...res }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="input">
      {label && <label htmlFor="input">{label}</label>}
      <input
        id="input"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        {...res}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputKeyDown: PropTypes.func
};
