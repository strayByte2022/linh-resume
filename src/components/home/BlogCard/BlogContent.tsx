import React from 'react'
import blogData from '@/components/assets/data/sampleData'
import { Card } from 'antd'
const BlogContent = () => {
  return (
    <div className='grid'>
      {blogData.blogPosts.map(
        (post) => {
          return <Card title={<Card.Meta title={post.title} description={post.date}/>}>
            
            {post.content}
          </Card>
        })}

    </div>
  )
}

export default BlogContent