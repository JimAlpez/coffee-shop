import React from 'react'

import Person1 from "../../assets/Coffee1.png";

const TestimonialCard = () => {
  return (
    <div className='flex items-center gap-16'>
        <img src={Person1} width={180} alt="" />
        <div className='space-y-4'>
            <h4 className='text-2xl font-extrabold'>Jim Alpez</h4>
            <p className='max-w-[700px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui accusantium nam, autem totam inventore quis necessitatibus, assumenda vero quibusdam dolorum ex distinctio repudiandae, minima pariatur sunt sed reprehenderit dolores.
            </p>
        </div>
    </div>
  )
}

export default TestimonialCard