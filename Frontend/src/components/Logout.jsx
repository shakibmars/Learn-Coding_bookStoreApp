import React from 'react'

import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

export let ooo = ()=>{
  console.log('ooo this is ooo function')
}

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  function handleLogout(){
    try{
      setAuthUser({
        ...authUser,
        user: null,
      })
      localStorage.removeItem('Users')
      toast.success('Logout Successfully')
      // setTimeout(()=>{}, 5000)
      window.location.reload()
    }catch(err){
      toast.error('Logout Failed-- ' + err.massage + ' --</>from "Logout.jsx" file "Logout" function.</>')
    }
  }

  return (
    <>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout
