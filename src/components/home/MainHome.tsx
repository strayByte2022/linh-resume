'use client'
import React from 'react'
import IntroCard from './MainHome/IntroCard'
import EducationCard from './MainHome/EducationCard'
import { BackTop, FloatButton, Typography } from 'antd'
import { EducationIntro, QualificationIntro } from '../constants/IntroText'
import QualificationCard from './MainHome/QualificationCard'
import CertificationCard from './MainHome/CertificationCard'


const MainHome = () => {
  return (
    <div className='grid-auto-flow w-full' >
        <FloatButton.BackTop className='hover:bg-slate-100'/>
        <IntroCard/>
        <Typography.Title className='text-center mt-10' id='education'>Education</Typography.Title>
        <Typography.Paragraph className='text-center'>{EducationIntro}</Typography.Paragraph>
        <EducationCard/>
        <Typography.Title className='text-center mt-10' id='certification' >Certification</Typography.Title>
        <Typography.Paragraph className='text-center'>{QualificationIntro}</Typography.Paragraph>
        <CertificationCard/>
        <Typography.Title className='text-center mt-10' id='project'>Projects</Typography.Title>
        <Typography.Paragraph className='text-center'>{QualificationIntro}</Typography.Paragraph>
        
        <QualificationCard/>
    </div>
  )
}

export default MainHome