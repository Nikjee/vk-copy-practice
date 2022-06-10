import React, { FC } from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import { Grid } from '@mui/material'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
