import { primaryColor } from '@/components/constants/color'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
interface Props
{
    content: string
    icon:any
    onClick:()=>void
}
const DownloadResume = ({content,icon,onClick}:Props) => {
    return (
        <div className='grid gap-2.5 mt-4'>
            <Button type="primary" 
            icon={icon} 
            size='large' 
            
            style={{ backgroundColor: primaryColor}}
            className='hover:text-white text-black hover:bg-black transition duration-300 ease-in-out'
            onClick={onClick}
            >
               {content}
            </Button>
        </div>
    )
}

export default DownloadResume