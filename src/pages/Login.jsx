import React from 'react'
import LoginCard from '../components/LoginCard'
import Navbar from '../container/Navbar'

const Login = () => {

  
    const handleSignIn = () => {
      window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox"
    }

  return (
    <>
      <Navbar />
      <LoginCard handleSignIn={handleSignIn} />
    </>
  )
}

export default Login;