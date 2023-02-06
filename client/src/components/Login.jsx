import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import loginPageVideo from './../assets/share.mp4'
import logo from './../assets/logo.png'
import jwt_decode from 'jwt-decode'

import { client } from './../client'

const Login = () => {
  const navigate = useNavigate()
  const GOOGLE_OAUTH_CLIENTID =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PRO_GOOGLE_OAUTH_CLIENTID
      : process.env.REACT_APP_DEV_GOOGLE_OAUTH_CLIENTID
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="relative w-full h-full">
        <video
          src={loginPageVideo}
          type="video/mp4"
          loop
          muted
          controls={false}
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width="130px" />
        </div>
        <div className="shadow-2xl">
          <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENTID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwt_decode(credentialResponse?.credential)
                const user = {
                  _id: decoded.sub, // Unique ID of user's google account
                  _type: 'user',
                  userName: decoded?.name, // full name of the user
                  email: decoded?.email,
                  image: decoded?.picture, // url
                }
                client.createIfNotExists(user).then(() => {
                  localStorage.setItem('user', JSON.stringify(user))
                  navigate('/', { replace: true })
                })
              }}
              shape="rectangular"
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  )
}

export default Login
