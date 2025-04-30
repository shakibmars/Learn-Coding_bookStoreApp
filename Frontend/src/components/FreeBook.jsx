import React, { useState, useEffect } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import axios from 'axios'

// import List from '../../public/list.json'
import Card from './Card';


const FreeBook = () => {
  const [book, setBook] = useState([])
  useEffect(()=>{
    async function getBook(){
      try{
        let res = await axios.get('http://localhost:4000/book')
        // console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log('my error: ', error)
      }
    }
    getBook()
  }, [])

  let filterData = book.filter(item=> item.price===0)
  // console.log(filterData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((Item)=>(
              <Card Item={Item} key={Item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBook
