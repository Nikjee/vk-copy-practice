import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import UserItems from './UserItems'

const Sidebar: FC = () => {
  return (
    <div>
      <UserItems />
    </div>
  )
}

export default Sidebar
