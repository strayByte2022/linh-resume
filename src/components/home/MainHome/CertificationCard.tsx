import React from 'react'
import CustomCard from './CustomCard'
import { Card } from 'antd'

const CertificationCard = () => {
  return (
    <Card className='grid'>
        <CustomCard Title={'Academic IELTS'} Year={'2020'} Description={'Band 7.0'} />
        <CustomCard Title={'OISP Honour for Outstanding Academic Performance.'} Year={'2023'} Description={'Idk why i got this, but quite proud haha'}></CustomCard>   
         </Card>
    
  )
}

export default CertificationCard