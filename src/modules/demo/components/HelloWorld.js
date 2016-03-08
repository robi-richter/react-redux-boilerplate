/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

function mapStateToProps(state) {
  return {
    counter: state.demo.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(increment())
  };
}

class HelloWorld extends React.Component {
  static propTypes = {
    counter: PropTypes.Number,
    incrementCounter: PropTypes.Function
  };

  render() {
    const { counter, incrementCounter } = this.props;
    return (
      <div>
        <h1>Hello World Component</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Click to increment</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
