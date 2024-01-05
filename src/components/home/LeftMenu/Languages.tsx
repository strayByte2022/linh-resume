import { primaryColor } from '@/components/constants/color'
import { Progress, Typography } from 'antd'
import React from 'react'

const Languages = () => {
  return (
    <div className='grid mt-4 border-b'>
      <Typography style={{fontWeight:'bold'}}>Languages</Typography>
      <Typography>Vietnamese</Typography>
      <Progress percent={100} strokeColor={primaryColor} status='active'/>
      <Typography>English</Typography>
      <Progress percent={79} strokeColor={primaryColor} status='active'/>
      <Typography>German</Typography>
      <Progress percent={10} strokeColor={primaryColor} status='active'/>
    </div>
  )
}

export default Languages