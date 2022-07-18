import { Alert, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../Types'
import { users } from '../../layout/sidebar/dataUsers'
import { useAuth } from '../../providers/useAuth'
import { addDoc, collection } from 'firebase/firestore'

const AddPost: FC = () => {
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const { user, db } = useAuth()
  const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && user) {
      try {
        await addDoc(collection(db, 'posts'), {
          author: user,
          content,
          createdAt: '10 минут назад',
        })
      } catch (e: any) {
        setError(e)
      }
      setContent('')
    }
  }
  return (
    <>
      {error && (
        <Alert severity='error' sx={{ marginBottom: 10 }}>
          {error}
        </Alert>
      )}
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
    </>
  )
}

export default AddPost
