'use client'
import React from 'react'
import { Avatar, Button, Card, Tag, Typography } from 'antd'

import SocialLinks from './LeftMenu/SocialLinks'
import BasicInfo from './LeftMenu/BasicInfo'
import Languages from './LeftMenu/Languages'
import Skills from './LeftMenu/Skills'

import { DownloadOutlined } from '@ant-design/icons'
import DownloadResumeButton from './LeftMenu/DownloadResumeButton'
import { supabase } from '../services/SupabaseClient'
import { useRouter } from 'next/router'

import axios from 'axios'

const LeftMenu = () => {
  const { Meta } = Card


  const handleDownload = async () => {


    // Fetch the public URL of the file from Supabase Storage
   const publicURL = supabase.storage.from('linh-cv').getPublicUrl("linh-resume-feb-2024");
  //  blob: file-like objects
   const response = await axios.get(publicURL.data['publicUrl'], { responseType: 'blob' });
   const blob = new Blob([response.data], { type: 'application/pdf' }); // Assuming PDF format
   const url = URL.createObjectURL(blob);
   const link = document.createElement('a');
   link.href = url;
   link.setAttribute('download', 'vuong-hong-linh-resume.pdf');
   link.click();
   URL.revokeObjectURL(url);
   
  }
  return (
    <Card

      style={{ width: '20% ', minWidth: '305px', height: 'fit-content' }}
    >
      <div className='justify-center my-8 grid'>
        <Avatar
          src='/profile.png'
          alt='Vuong Hong Linh'
          size={100}
          shape='circle'
        />

      </div>

      <div className='flex justify-center'>
        <Meta title="Vương Hồng Lĩnh" description="Computer Science Undergraduate" className='grid text-center' />
      </div>

      <SocialLinks />
      <BasicInfo />
      <Languages />
      <Skills />
      {/* <DownloadResumeButton content='Download CV' icon={<DownloadOutlined/>} onClick={null}/> */}
      <DownloadResumeButton content='Download CV' icon={<DownloadOutlined />} onClick={handleDownload} tooltipTitle=''/>
    </Card>
  )
}

export default LeftMenu;