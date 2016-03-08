import React from 'react'
import { Route, IndexRoute } from 'react-router'
import SimpleContainer from '../containers/SimpleContainer'
import {HelloWorld as HelloWorldPage} from '../modules/demo'

export default (store) => (
  <Route path='/' component={SimpleContainer}>
    <IndexRoute component={HelloWorldPage} />
  </Route>
)
