
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import "./styles/input.style.scss";

export const Input = ({ label, value, onChange, placeholder = 'Nunca dejes de buscar' }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      onChange(e);
    }
  }, [onChange]);

  return (
    <div className="input">
      {label && <label htmlFor="input">{label}</label>}
      <input
        id="input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
