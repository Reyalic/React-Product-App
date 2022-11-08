import React, { useState } from 'react'

const SliderImg = ({item}) => {
    
  const [indexImg, setIndexImg] = useState(0)

  const imgAmount = item?.images.length

  const objStyle = {
    width: `calc(${imgAmount} * 100%)`,
    transform: `translateX(calc(-${indexImg / imgAmount} * 100%))`
  }

  const objStyle2 = {
    width: `calc(1/${imgAmount} * 100%)`
  }

  const handlePrev = () => {
    if(indexImg - 1 >= 0){
      setIndexImg(e => e - 1)
    } else {
      setIndexImg(imgAmount - 1)
    }
  }

  const handleNext = () => {
    if(indexImg + 1 <= imgAmount - 1){
      setIndexImg(e => e + 1)
    } else {
      setIndexImg(0)
    }
  }

  return (
    <div className='slider'>
      <button onClick={handlePrev} className='slider-prev'>&#60;</button>
      <div style={objStyle} className="inside-slider">
        {
          item?.images.map((img) => (
            <div
              className='slider-img-container' style={objStyle2}
              key={img}
            >
              <img  
                src={img} 
              />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider-next'>&#62;</button>
    </div>
  )
}

export default SliderImg