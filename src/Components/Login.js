import React from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'

import {auth,provider} from '../firebase'
function Login(props) {
  const navigate=useNavigate()
    function pleaseSignin(){
        signInWithPopup(auth,provider)
        .then(function(){
          props.info(true)
          const username=auth.currentUser.displayName
        const email=auth.currentUser.email
        console.log(username,email)
        navigate("/home")
        })
        .catch(function(err){
          console.log(err)
        })
    }

  return (
    <div style={{margin:30}}>
        <button className='btn btn-outline-primary' onClick={pleaseSignin}>Login with google</button>
    </div>
  )
}

export default Login