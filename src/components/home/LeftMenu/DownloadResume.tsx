import { primaryColor } from '@/components/constants/color'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const DownloadResume = () => {
    return (
        <div className='grid gap-2.5 mt-4'>
            <Button type="primary" 
            icon={<DownloadOutlined />} 
            size='large' 
            style={{ backgroundColor: primaryColor}}
            className='hover:text-white text-black hover:bg-black'
            
            >
                Download  CV  
            </Button>
        </div>
    )
}

export default DownloadResume