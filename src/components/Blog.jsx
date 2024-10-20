import React from 'react'
import BlogCard from './Card/Blog'

const Blog = () => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto my-28 space-y-10">
      <h2 className="secondary-heading">Our Blog</h2>
      <div className="flex gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default Blog