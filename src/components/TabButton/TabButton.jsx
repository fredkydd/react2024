'use strict';
import './TabButton.css';
import PropTypes from 'prop-types';

export default function TabButton({ children, selectedButton, isSelected }) {
  return (
    <>
      <li>
        <button
          className={isSelected ? 'active' : undefined}
          onClick={selectedButton}
        >
          {children}
        </button>
      </li>
    </>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  selectedButton: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  selectedButton: PropTypes.func.isRequired,
};
