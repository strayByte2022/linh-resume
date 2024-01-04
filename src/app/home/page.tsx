import React from 'react'
import LeftMenu from '@/components/home/LeftMenu'
import MainHome from '@/components/home/MainHome'
import RightMenu from '@/components/home/RightMenu'
import { BackTop } from 'antd'
const HomePage = () => {
  return (
    
    <div className='flex space-x-7'>
      
     
      <LeftMenu/>
      <MainHome />
      <RightMenu/>
      
    </div>
    
  )
}

export default HomePage