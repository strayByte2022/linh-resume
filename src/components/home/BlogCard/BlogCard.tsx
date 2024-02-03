import { Modal } from 'antd'
import React from 'react'
import BlogContent from './BlogContent'

interface BlogCardProps
{
    isOpen:boolean
    handleClose:any

}
const BlogCard = ({isOpen,handleClose}:BlogCardProps) => {
   
    return (
    <Modal title={'Linh dep trai blog'} open={isOpen} onCancel={handleClose}>
        <BlogContent/>
    </Modal>
  )
}

export default BlogCard