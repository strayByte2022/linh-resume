import { primaryColor } from '@/components/constants/color'
import { ParagraphSize } from '@/components/constants/fontSize'
import { Card, Badge, Typography } from 'antd'
import React from 'react'
interface Props
{
    Title:string | React.ReactNode
    Year:string | React.ReactNode
    Description:string | React.ReactNode
}
const CustomCard = ({Title,Year,Description}:Props) => {
  return (
    
      
      <Badge.Ribbon text={Year} color={primaryColor} style={{color:'black'}}>
        <Card className='drop-shadow-2xl mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-slate-100' size='small' >
          <div className='ml-16'>
            <div className='flex justify-between'>
              <Typography.Text style={{ fontWeight: 'bold', fontSize: ParagraphSize }}>
                {Title}
              </Typography.Text>
             
            </div>
            <Typography.Paragraph style={{ fontSize: ParagraphSize }}>{Description}</Typography.Paragraph>
          </div>

        </Card>
      </Badge.Ribbon>
      
  )
}

export default CustomCard