'use client'
import React from 'react'
import { Avatar, Button, Card, Tag, Typography } from 'antd'

import SocialLinks from './LeftMenu/SocialLinks'
import BasicInfo from './LeftMenu/BasicInfo'
import Languages from './LeftMenu/Languages'
import Skills from './LeftMenu/Skills'

import { DownloadOutlined } from '@ant-design/icons'
import DownloadResumeButton from './LeftMenu/DownloadResumeButton'

const LeftMenu = () => {
  const { Meta } = Card
  return (
    <Card
      
      style={{ width: '20% ', minWidth:'305px' , height:'fit-content'}}
    >
      <div className='justify-center my-8 grid'>
        <Avatar
          src='https://i.ibb.co/G3nPQh7/profile.jpg'
          alt='Vuong Hong Linh'
          size={100}
          shape='circle'
        />
        
      </div>
        
      <div className='flex justify-center'>
        <Meta title="Vương Hồng Lĩnh" description="Computer Science Undergraduate" className='grid text-center' />
      </div>

      <SocialLinks/>
      <BasicInfo/>
      <Languages/>
      <Skills/>
      {/* <DownloadResumeButton content='Download CV' icon={<DownloadOutlined/>} onClick={null}/> */}
      <DownloadResumeButton content='Download CV' icon={<DownloadOutlined/>} onClick={()=>{console.warn('Resume Downloaded')}}/>
    </Card>
  )
}

export default LeftMenu