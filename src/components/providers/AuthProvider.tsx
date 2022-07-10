import { getAuth, onAuthStateChanged, Auth } from 'firebase/auth'
import { createContext, FC, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IUser, TypeSetState } from '../../Types'
import { users } from '../layout/sidebar/dataUsers'
import { getFirestore } from 'firebase/firestore'

interface IContext {
  user: IUser | null
  setUser: TypeSetState<IUser | null>
  ga: Auth
}

export const AuthContext = createContext({} as IContext)

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const ga = getAuth()
  const db = getFirestore()

  const history = useHistory()

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser)
        setUser({
          _id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser.displayName || '',
        })
      else {
        setUser(null)
        history.push('/auth')
      }
    })
    return () => {
      unListen()
    }
  })

  const valuse = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db,
    }),
    [user, ga]
  )
  return (
    <AuthContext.Provider value={{ user, setUser, ga }}>
      {childern}
    </AuthContext.Provider>
  )
}
