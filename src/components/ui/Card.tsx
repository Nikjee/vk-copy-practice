import { Box } from '@mui/material'
import React, { FC } from 'react'

const Card: FC = ({ childern }) => {
  return (
    <Box
      sx={{
        border: '1px solid #e2e2e2',
        borderRadius: '10px',
        padding: 2,
        marginTop: 4,
      }}
    >
      {childern}
    </Box>
  )
}

export default Card
