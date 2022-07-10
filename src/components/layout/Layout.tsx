import React, { FC } from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import { Grid } from '@mui/material'

const Layout: FC = ({ children }) => {
  const { user } = useAuth()
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
