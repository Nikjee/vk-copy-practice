import {
  Avatar,
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material'
import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'

const UserItems: FC = () => {
  const history = useHistory()
  return (
    <Card
      variant='outlined'
      sx={{
        padding: 2,
        backgroundColor: '#f1f7fa',
        border: 'none',
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link
          to='/profile'
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#111',
            marginBottom: 12,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginRight: 2,
              overflow: 'hidden',
              width: 50,
              height: 50,
            }}
          >
            <Avatar
              src='img'
              alt=''
              sx={{
                width: 46,
                height: 46,
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                backgroundColor: '#4FB14F',
                border: '1px solid #f1f7fa',
                width: 12,
                height: 12,
                position: 'absolute',
                bottom: 0,
                right: 0,
                borderRadius: '50%',
              }}
            ></Box>
          </Box>
          <span style={{ fontSize: 14 }}>Дмитрий Лыжин</span>
        </Link>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push('/messages')}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary='Сообщения' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Card>
  )
}

export default UserItems
