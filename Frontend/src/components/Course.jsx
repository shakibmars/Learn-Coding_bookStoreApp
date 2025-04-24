import React from 'react'

import { Link } from 'react-router-dom'

import List from '../../public/list.json'
import Card from './Card'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-40 text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!</p>
            <Link to='/'><button className='text-white bg-pink-500 px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {List.map((Item)=>{
                return <Card key={Item.id} Item={Item} />
            })}
        </div>
    </div>
    </>
  )
}

export default Course
