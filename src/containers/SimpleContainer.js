import React, { PropTypes } from 'react';
import '../styles/core.scss';

const propTypes = {
  children: PropTypes.element,
};

function SimpleContainer(props) {
  return (
    <div>{props.children}</div>
  );
}

SimpleContainer.propTypes = propTypes;

export default SimpleContainer;
