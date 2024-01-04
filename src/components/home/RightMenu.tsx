import { ContainerFilled, HomeFilled, ToolFilled } from '@ant-design/icons'
import { Button, Card } from 'antd'
import React from 'react'
import { primaryColor } from '../constants/color'

const RightMenu = () => {
  return (
    <Card style={{width:'5%'}}>
        <div className='grid mt-24 space-y-10 '>
          <Button icon={<HomeFilled  />} style={{ backgroundColor: primaryColor}}
            className='hover:text-white text-black hover:bg-black transition duration-300 ease-in-out'/>
          <Button icon={<ContainerFilled className="hover:bg-lime-500 hover:text-white"/>}/>
          <Button icon={<ToolFilled />} className="hover:bg-lime-500 hover:text-white"/>
        </div>
    </Card>
  )
}

export default RightMenu