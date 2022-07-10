import { Avatar, Button, Card, Chip } from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import { signOut } from 'firebase/auth'

const User: FC = () => {
  const { user, ga } = useAuth()
  return (
    <Card
      variant='outlined'
      sx={{
        padding: 2,
        backgroundColor: '#f1f7fa',
        border: 'none',
        borderRadius: 3,
        marginBotton: 5,
      }}
    >
      <Chip
        avatar={<Avatar alt='' src={user?.avatar} />}
        label={user?.name || 'Без имени'}
        variant='outlined'
        sx={{ display: 'flex', marginBottom: 2 }}
      />
      <Button variant='outlined' onClick={() => signOut(ga)}>
        Выйти
      </Button>
    </Card>
  )
}

export default User
