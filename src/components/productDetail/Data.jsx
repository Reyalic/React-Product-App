import React from 'react'

const Data = ({item}) => {
  return (
        <div className='details-body'>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <ul className='details-list'>
                <li>{item?.rating}<i className="fa-solid fa-star"></i></li>
                <li>Stock: {item?.stock}</li>
                <li>${item?.price}.00</li>
        </ul>
        </div>
  )
}

export default Data