import React from 'react'
import BlogCard from '../components/Card/Blog'

const BlogPage = () => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto my-28 space-y-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default BlogPage