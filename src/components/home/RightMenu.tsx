import { ContainerFilled, HomeFilled, ToolFilled } from '@ant-design/icons'
import { Button, Card } from 'antd'
import React from 'react'
import { primaryColor } from '../constants/color'

const RightMenu = () => {
  const arr = [1,23,"asda"]
  
  return (
    <Card style={{ width: '5%' }}>
      <div className='grid mt-24 space-y-10 '>
        <Button
          icon={<HomeFilled className='hover:bg-lime-500 hover:text-black transition duration-300 ease-in-out' />}
          style={{
            backgroundColor: primaryColor,
            color: 'black', // Set the default text color
          }}
          href='#education'
        />
        {/* <Button
          icon={<ContainerFilled className="hover:bg-lime-500 hover:text-black" />}
          className='hover:bg-lime-500 hover:text-black transition duration-300 ease-in-out'
        />
        <Button
          icon={<ToolFilled />}
          className='hover:bg-lime-500 hover:text-black transition duration-300 ease-in-out'
        /> */}
        <Button
          icon={<ContainerFilled />}
          style={{
            backgroundColor: primaryColor,
            color: 'black', // Set the default text color
          }}
          className='hover:bg-lime-500 hover:text-black transition duration-300 ease-in-out'
          href='#certification'
        />
        <Button
          icon={<ToolFilled />}
          style={{
            backgroundColor: primaryColor,
            color: 'black', // Set the default text color
          }}
          className='hover:bg-lime-500 hover:text-black transition duration-300 ease-in-out'
          href='#project'
        />
      </div>
    </Card>
  )
}

export default RightMenu