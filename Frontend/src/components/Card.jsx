import React from 'react'

const Card = ({ Item }) => {
    let { book_name, book_title, price, category, image } = Item
    // console.log(Item)
  return (
    <>
      <div className='mt-4 my-3'>
        <div className="card bg-base-100 w-72 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-3 m-auto">
            <figure>
                <img
                className='h-72'
                src={image}
                alt={book_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {book_name}
                <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{book_title}</p>
                <div className="card-actions flex justify-between">
                    <div className="badge badge-outline">${price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer p-2 ">Buy Now</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
