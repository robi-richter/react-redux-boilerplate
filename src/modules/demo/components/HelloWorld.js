/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

function mapStateToProps(state) {
  return {
    counter: state.demo.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(increment()),
  };
}

const propTypes = {
  counter: PropTypes.Number,
  incrementCounter: PropTypes.Function,
};

function HelloWorld(props) {
  return (
    <div>
      <h1>Hello World Component</h1>
      <h2>Counter: {props.counter}</h2>
      <button onClick={props.incrementCounter}>Click to increment</button>
    </div>
  );
}

HelloWorld.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
