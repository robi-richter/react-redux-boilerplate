/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions'

function mapStateToProps (state) {
  return {
    counter: state.counter.get('count')
  }
}

function mapDispatchToProps (dispatch) {
  return {
    incrementCounter: () => dispatch(increment())
  }
}

export class HelloWorld extends React.Component {
  static propTypes = {
    counter: PropTypes.Object,
    incrementCounter: PropTypes.Function
  }

  render() {
    const { counter, incrementCounter } = this.props
    return (
      <div>
        <h1>Hello World Component</h1>
        <h2>Counter: {counter}</h2>
        <button type='button' onClick={incrementCounter}>Click to increment</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
