import React from 'react'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const {register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = async (data)=>{
    let userinfo = {
      email: data.email,
      password: data.password
    }
    await axios.post('http://localhost:4000/user/login', userinfo).then(
      (res)=>{
        if(res.data){
          // alert('login successfully </ from Frontend "Login.jsx" file "onSubmit" function />')
          toast.success('login successfully </ from Frontend "Login.jsx" file "onSubmit" function />')
          // document.querySelector('#my_modal_3').close();
          window.location.reload();
        }
        localStorage.setItem('Users', JSON.stringify(res.data.user))
      }
    ).catch(
      (err)=>{
        if(err.massage){
          // alert('error:- ' + err.response.data.massage + ' </ from Frontend "Login.jsx" file "onSubmit" function />')
          toast.error('error:- ' + err.response.data.massage + ' </ from Frontend "Login.jsx" file "onSubmit" function />')
        }
      }
    )
  }
  
  return (
    <>
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to='/' onClick={()=>document.querySelector('#my_modal_3').close()}>✕</Link>
            <div>
              <h3 className="font-bold text-lg">Login</h3>
              <div>
                  <span>Email</span><br />
                  <input className='w-full px-4 border rounded-md outline-none' type="email" name="email" placeholder='Enter your email' {...register('email', { required:true })} />
                  {errors.email && <span className="text-red-500 text-sm">This field is required!</span>}
              </div><br />
              <div>
                  <span>Password</span><br />
                  <input className='w-full px-4 border rounded-md outline-none' type="password" name="password" placeholder='Enter your password' {...register('password', { required:true })} /><br />
                  {errors.password && <span className="text-red-500 text-sm">This field is required!</span>}
              </div>
              <div className='flex justify-around items-center mt-4'>
                  <button type='submit' className='bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-200 cursor-pointer'>Login</button>
                  <p>Not Register? <Link className='text-blue-500 underline cursor-pointer' to='/signup'>Sign up</Link></p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
    </>
  )
}

export default Login
