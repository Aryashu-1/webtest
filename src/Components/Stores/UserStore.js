import React from 'react'
import { useState } from 'react'
import { UserContext } from '../Context/UserContext';
function UserStore({children}) {
    let [context,setContext]=useState({});
  return (
    <UserContext.Provider value={[context, setContext]}>
            {children}
    </UserContext.Provider>
  )
}

export default UserStore