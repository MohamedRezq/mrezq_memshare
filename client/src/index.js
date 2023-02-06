import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <GoogleOAuthProvider clientId="1067503551509-3avhc33d4gkm318b4j2tor9l15t1v987.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Router>,
)
