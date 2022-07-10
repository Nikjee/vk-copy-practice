import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../Types'
import { users } from '../../layout/sidebar/dataUsers'
import { useAuth } from '../../providers/useAuth'

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState('')
  const { user } = useAuth()
  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && user) {
      setPosts((prev) => [
        {
          author: user,
          content,
          createdAt: '5 минут назад',
        },
        ...prev,
      ])
      setContent('')
    }
  }
  return (
    <Box
      sx={{
        border: '1px solid #e2e2e2',
        borderRadius: 10,
      }}
    >
      <TextField
        label='Расскажи, что у тебя нового'
        variant='outlined'
        inputProps={{
          sx: {
            borderRadius: '25px',
            backgroundColor: 'f8f8f8',
          },
        }}
        sx={{
          width: '100%',
        }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  )
}

export default AddPost
