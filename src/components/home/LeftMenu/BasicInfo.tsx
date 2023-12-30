import { myAge } from '@/components/constants/Age'
import { primaryColor } from '@/components/constants/color'
import { Tag, Typography } from 'antd'
import React from 'react'

const BasicInfo = () => {
  return (
    <div className='grid gap-2.5 mt-4 border-b'>
        <div className='flex justify-between'>
          <Tag color={primaryColor} style={{ color: 'black', height: '24px', width: 'inherit',textAlign:'center' }} >Age</Tag>
          <Typography>{myAge}</Typography>
        </div>

        <div className='flex justify-between'>
          <Tag color={primaryColor} style={{ color: 'black', width: 'inherit', height: '24px' , textAlign:'center'}} >Resident</Tag>
          <Typography>Ho Chi Minh City</Typography>
        </div>
        <div className='flex justify-between'>
          <Tag color={primaryColor} style={{ color: 'black', width: 'inherit', height: '24px', textAlign:'center' }} >Position</Tag>
          <Typography style={{ color: '#7EB942' }}>Freelance</Typography>
        </div>
        <div className='flex justify-between'>
          <Tag color={primaryColor} style={{ color: 'black', width: 'inherit', height: '24px', textAlign:'center' }} className='mb-1' >Address</Tag>
          <Typography typeof='link'>497 Hoa Hao street, Ward 7, District 10, Ho Chi Minh City</Typography>
        </div>


      </div>
  )
}

export default BasicInfo