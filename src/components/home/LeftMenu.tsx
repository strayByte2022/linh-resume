'use client'
import React from 'react'
import { Avatar, Button, Card, Tag, Typography } from 'antd'

import SocialLinks from './LeftMenu/SocialLinks'
import BasicInfo from './LeftMenu/BasicInfo'
import Languages from './LeftMenu/Languages'
import Skills from './LeftMenu/Skills'
import DownloadResume from './LeftMenu/DownloadResume'

const LeftMenu = () => {
  const { Meta } = Card
  return (
    <Card
      
      style={{ width: '305px  ' }}
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
      <DownloadResume/>
    </Card>
  )
}

export default LeftMenu