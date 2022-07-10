import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Auth from '../pages/auth/Auth'
import { useAuth } from '../providers/useAuth'
import { routes } from './list'

const Routes = () => {
  const { user } = useAuth()
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          if (route.auth && !user) {
            return false
          }
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout>
                {route.auth && !user ? <Auth /> : <route.component />}
              </Layout>
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Routes
