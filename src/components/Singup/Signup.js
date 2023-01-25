import React, { useState } from 'react'
import Contact from '../elements/Contact/Contact'
import Getapp from '../elements/GetApp/Getapp'
import SigninCard from '../Signin/SigninCard'
import SignupCard from './SignupCard'
const Signup = () => {
  return (
    <div>
      <SignupCard />
      <Getapp />
      <Contact />
    </div>
  )
}

export default Signup