import React from 'react'
import CustomCard from './CustomCard'
import { Button, Card } from 'antd'
import { RightCircleOutlined } from '@ant-design/icons'
import { primaryColor } from '@/components/constants/color'

const CertificationCard = () => {
  const webCourseLink = "https://coursera.org/verify/XNN4F8BSEENM"
  const handleOpenCertificate = ()=>
  {
    console.log("This is clicked")
    window.open(webCourseLink,'_blank','popup')
  }
  return (
    <Card className='grid'>
        <CustomCard Title={'Academic IELTS'} Year={'2020'} Description={'Band 7.0'} />
        <CustomCard Title={'OISP Honour for Outstanding Academic Performance.'} Year={'2023'} Description={'Idk why i got this, but quite proud haha'}></CustomCard>   
         <CustomCard Title={'Introduction to HTML, CSS, Javascript'} Year={'2024'} 
         Description={
         <Button className='flex rounded-full items-center w-40' 
         style={{borderColor:'black', color:'black'}} 
         
         onClick={handleOpenCertificate}
         >Show credential {<RightCircleOutlined  className='text-center'/>}
          
          </Button>
         
         } />
        </Card>
    
  )
}

export default CertificationCard