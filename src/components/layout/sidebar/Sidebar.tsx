import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import React, { FC } from 'react'

const Sidebar: FC = () => {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Link>
          <img src='img' alt='' />
          <span>Дмитрий Лыжин</span>
        </Link>
      </Box>
    </div>
  )
}

export default Sidebar
