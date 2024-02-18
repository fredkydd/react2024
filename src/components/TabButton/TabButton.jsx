'use strict';
import './TabButton.css';
import PropTypes from 'prop-types';

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
