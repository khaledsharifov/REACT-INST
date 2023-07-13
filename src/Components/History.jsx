import React from 'react'

export default function History({title, img}) {
  return (
    <div>
        <img src={img} alt="" className='w-[60px] rounded-[50px] m-auto bord p-[3px] mb-1'/>
        <p  className='text-center text-[13px]'>{title}</p>
    </div>
  )
}
