import React from 'react'
import { useState } from 'react'
import { LoginContext } from '../Context/LoginContext';
function LoginStore({children}) {
    let [user,setUser]=useState({});
  return (
    <LoginContext.Provider value={[user,setUser]}>
            {children}
    </LoginContext.Provider>
  )
}

export default LoginStore