import { primaryColor } from '@/components/constants/color'
import { ParagraphSize } from '@/components/constants/fontSize'
import { Badge, Card, Carousel, Typography } from 'antd'
import React from 'react'

const EducationCard = () => {
  return (
    <Card className='grid '>
      {/* ! translate-y-1 for reposition the element vertically by 1px
          ! scale-100:  mean zoom the element by 100 when it is hovered */}

          {/*  
          !! transition: dedicated for animation transition 
          !! ease-in-out: slow start - slow end
          
          */}
      <Badge.Ribbon text="Oct 2021 - Now" color={primaryColor} style={{color:'black'}} className='hover:-translate-y-1 hover:scale-100'>
        <Card className='drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-slate-100 ' size='small'>
          <div className='ml-16'>
            <div className='flex justify-between'>
              <Typography.Text style={{ fontWeight: 'bold', fontSize: ParagraphSize }}>
                Ho Chi Minh University of Technology
              </Typography.Text>
              {/* patch inside */}
            </div>
            <Typography.Paragraph style={{ fontSize: ParagraphSize }}>Bachelor of Computer Science</Typography.Paragraph>
          </div>

        </Card>
      </Badge.Ribbon>

      <Badge.Ribbon text="July 2014 - July 2021" color={primaryColor} style={{color:'black'}} className='hover:-translate-y-1 hover:scale-100'>
        <Card className='drop-shadow-2xl mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-slate-100' size='small'>
          <div className='ml-16'>
            <div className='flex justify-between'>
              <Typography.Text style={{ fontWeight: 'bold', fontSize: ParagraphSize }}>
                Nguyen Khuyen Secondary and High School
              </Typography.Text>
              {/* patch inside */}
            </div>
            <Typography.Paragraph style={{ fontSize: ParagraphSize }}>Highschool Education</Typography.Paragraph>
          </div>



        </Card>
      </Badge.Ribbon>

    </Card>


  )
}

export default EducationCard