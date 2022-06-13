import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import { routes } from './list'

const Routes = () => {
  const isAuth = true
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false
          }
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout />
              <route.component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Routes
