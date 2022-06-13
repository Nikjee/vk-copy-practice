import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../Types'
import { users } from '../../layout/sidebar/dataUsers'

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState('')
  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPosts((prev) => [
        {
          author: users[0],
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
