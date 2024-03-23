import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import PlacesChild from '../PlacesChild/PlacesChild'
function Places() {
    let [context,setContext] = useContext(UserContext)
    console.log(context)
  return (
    <div>
        <div className='flex '>
        <a className='mx-2' href='/Home'><img className='w-9' src="https://static.vecteezy.com/system/resources/thumbnails/000/589/654/small/40_436.jpg" alt=''/></a>
        <div><h1 className='text-xl font-bold'>Places to Visit</h1></div>
        </div>
        <PlacesChild/>
    </div>
  );
}

export default Places
