import { Button, Card } from 'antd'
import React from 'react'
import { Typography } from 'antd';
import { primaryColor } from '@/components/constants/color';
import { introText } from '@/components/constants/IntroText';
import { Image } from 'antd';

import DownloadResumeButton from '../LeftMenu/DownloadResumeButton';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ParagraphSize, TitleSize } from '@/components/constants/fontSize';


const IntroCard = () => {
    
    return (
        <Card className=' bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200' style={{height:'fit-content'}}>
            <div className='flex justify-between ml-16 mt-24 mr-16 space-x-7'>

                <div >
                    <Typography.Title style={{fontSize:TitleSize}}>
                        I am Vương Hồng Lĩnh

                    </Typography.Title>
                    <Typography.Title style={{ color: primaryColor, fontSize:TitleSize }}>
                        Software
                        <span style={{ color: 'black' }}> Engineer</span>
                    </Typography.Title>
                    <Typography.Paragraph style={{ minWidth: '325px', fontSize:ParagraphSize }} >
                        {introText}
                    </Typography.Paragraph>
                    <div className='w-40'>
                        <DownloadResumeButton content='Read my blog!' icon={<ArrowRightOutlined />} onClick={() => { console.info("Blog clicked") }} />
                    </div>

                </div>
                <div className=''>
                    <Image
                        preview={false}
                       
                        
                        src="https://i.ibb.co/5KtLQ6G/224938868-353857646320822-8833375352574883861-n-removebg-preview.png"
                        className='self-center h-100'
                    />
                </div>

            </div>



        </Card>
    )
}

export default IntroCard