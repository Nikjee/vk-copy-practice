import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { IMessage } from '../../../Types'
import { useAuth } from '../../providers/useAuth'
import { onSnapshot, collection, addDoc } from 'firebase/firestore'
import { Alert } from '@mui/material'

const Message: FC = () => {
  const { user, db } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'messages'), (doc) => {
      doc.forEach((d: any) => {
        setMessages((prev) => [...prev, d.data()])
      })
    })

    return () => {
      unsub()
    }
  }, [])

  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, 'messages'), {
        user,
        message,
      })
    } catch (e: any) {
      setError(e)
    }
    setMessage('')
  }
  return (
    <>
      {error && (
        <Alert severity='error' sx={{ marginBottom: 10 }}>
          {error}
        </Alert>
      )}
    </>
  )
}

export default Message
