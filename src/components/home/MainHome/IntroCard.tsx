import { Button, Card, Tooltip } from 'antd'
import React, { useEffect } from 'react'
import { Typography } from 'antd';
import { primaryColor } from '@/components/constants/color';
import { introText } from '@/components/constants/IntroText';
import { Image } from 'antd';

import DownloadResumeButton from '../LeftMenu/DownloadResumeButton';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ParagraphSize, TitleSize } from '@/components/constants/fontSize';
import { request } from 'https';
import BlogCard from '../BlogCard/BlogCard';


const IntroCard = () => {
    const [quote, setQuote] = React.useState("")
    const [openBlog, setOpenBlog] = React.useState(false)


    const fetchQuote = async () => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        // Now 'data' contains the parsed JSON
        console.log(data.slip.advice); // You can access the advice property
        setQuote(data.slip.advice)


    }
    useEffect(function () {
        fetchQuote();
    }, [])
    return (
        <Card className=' bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200' style={{ height: 'fit-content' }}>
            <div className='flex justify-between ml-16 mt-24 mr-16 space-x-7'>

                <div >
                    <Typography.Title style={{ fontSize: TitleSize }}>
                        I am Vương Hồng Lĩnh

                    </Typography.Title>
                    <Typography.Title style={{ color: primaryColor, fontSize: TitleSize }}>
                        Software
                        <span style={{ color: 'black' }}> Engineer</span>
                    </Typography.Title>
                    <Typography.Paragraph style={{ minWidth: '325px', fontSize: '25px', fontStyle:"italic"}} >
                       "{quote}" 
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ minWidth: '325px', fontSize: ParagraphSize, fontStyle:"italic"}} >
                       (Refresh for different quote :) )
                    </Typography.Paragraph>
                    <div className='w-40'>

                        <DownloadResumeButton
                            content='Read my blog!'
                            icon={<ArrowRightOutlined />}
                            onClick={() => { setOpenBlog(true) }}
                            tooltipTitle='Blog is under development, please stay in touch :) ' />
                        <BlogCard isOpen={openBlog} handleClose={()=>{setOpenBlog(false)}} />

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