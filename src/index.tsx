import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/routes/Routes'
import './index.css'

import * as firebase from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider'

firebase.initializeApp({
  apiKey: 'AIzaSyCuoHoGht85LsP3Gmr3AhNyWZdqSc6Piuk',
  authDomain: 'vk-project-5ff6c.firebaseapp.com',
  projectId: 'vk-project-5ff6c',
  storageBucket: 'vk-project-5ff6c.appspot.com',
  messagingSenderId: '961908667462',
  appId: '1:961908667462:web:36be12924ed79c09b44647',
})

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
