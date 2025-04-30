import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast';

import Login from './Login'

const signup = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    console.log(from)
    let navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm();
    let onSubmit = async (data)=>{
        // console.log(data)
        let userinfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4000/user/signup', userinfo).then(
            (res)=>{
                console.log(res.data)
                if(res.data){
                    // alert('user created successfully </ from Frontend "signup.jsx" file "onSubmit" function />')
                    toast.success('user created successfully </ from Frontend "signup.jsx" file "onSubmit" function />');
                    navigate(from, {replace: true})
                    window.location.reload()
                }
                localStorage.setItem('Users', JSON.stringify(res.data.user))
            }
        ).catch(
            (err)=>{
                console.log(err)
                if(err.response){
                    // alert('error:- ' + err.response.data.massage + ' </ from Frontend "signup.jsx" file "onSubmit" function />')
                    toast.error('error:- ' + err.response.data.massage + ' </ from Frontend "signup.jsx" file "onSubmit" function />')
                }
            }
        )
    }
  
    return (
    <>
    <div className=" h-screen flex items-center justify-center ">
        <div className="w-96 shadow-2xl p-5 rounded-lg border border-slate-300 relative">
            <div>
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/' className="w-6 h-w-6 absolute right-2 top-2 bg-slate-300 rounded-full cursor-pointer text-center">✕</Link>
                    <h3 className="font-bold text-lg">Sign up</h3>
                    <div>
                        <span>Name</span><br />
                        <input className='w-full px-4 border rounded-md outline-none' type="text" placeholder='Enter your fullname' {...register('fullname', {required:true})} />
                        {errors.fullname && <span className="text-red-500 text-sm">This field is required!</span>}
                    </div><br />
                    <div>
                        <span>Email</span><br />
                        <input className='w-full px-4 border rounded-md outline-none' type="email" placeholder='Enter your email' {...register('email', {required: true})} />
                        {errors.email && <span className="text-red-500 text-sm">This field is required!</span>}
                    </div><br />
                    <div>
                        <span>Password</span><br />
                        <input className='w-full px-4 border rounded-md outline-none' type="password" placeholder='Enter your Password' {...register('password', {required: true})} />
                        {errors.password && <span className="text-red-500 text-sm">This field is required!</span>}
                    </div>
                    <div className='flex justify-around items-center mt-4'>
                        <button type='submit' className='bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-200'>Sign up</button>
                        <p className='text-md'>Have Account?
                            <button
                            className='text-blue-500 underline cursor-pointer'
                            onClick={()=>document.querySelector('#my_modal_3').showModal()}
                            >Login</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Login />
    </>
  )
}

export default signup
