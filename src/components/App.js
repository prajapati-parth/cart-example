import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Welcome from './Welcome'
import Cart from './Cart'

import AppCopy from '../utils/AppCopy'

import './App.less'

const App = () => {
  return (
    <div>
      <div className="headContainer container-fluid">
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Welcome} />
      </Switch>
    </div>
  )
}

export default App