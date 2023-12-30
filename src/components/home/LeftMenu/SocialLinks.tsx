import { primaryColor } from '@/components/constants/color'
import { LinkedinFilled, FacebookFilled, InstagramFilled, GithubFilled, MailFilled } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

const SocialLinks = () => {
  const handleMailClick = () => {
    window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')

    console.log('clliecked')
  }
  return (
    <div className='flex space-x-3.5 justify-center mt-4 border-b border-black-500 pb-5'>
      <Tooltip title='@vuonghonglinh'>
        <Button type='primary' href='https://furl.one/vuong-hong-linh-linkedin' icon={<LinkedinFilled />} style={{ borderRadius: '100px', backgroundColor: primaryColor, color: 'black' }}></Button>
      </Tooltip>
      <Tooltip title='@linh.vuonghong23'>
        <Button type='primary' href='https://furl.one/vuong-hong-linh-facebook' icon={<FacebookFilled />} style={{ borderRadius: '100px', backgroundColor: primaryColor, color: 'black' }}></Button>
      </Tooltip>
      <Tooltip title='@vh_linh23'>
        <Button type='primary' href='https://furl.one/vuong-hong-linh-instagram' icon={<InstagramFilled />} style={{ borderRadius: '100px', backgroundColor: primaryColor, color: 'black' }}></Button>
      </Tooltip>
      <Tooltip title='@strayByte2022'>
        <Button type='primary' href='https://furl.one/vuong-hong-linh-github' icon={<GithubFilled />} style={{ borderRadius: '100px', backgroundColor: primaryColor, color: 'black' }}></Button>
      </Tooltip>
      <Tooltip title='linh.vuonghong23@hcmut.edu.vn'>
        <Button type='primary'
          icon={<MailFilled />}
          style={{ borderRadius: '100px', backgroundColor: primaryColor, color: 'black' }}
          href='mailto:linh.vuonghong23@hcmut.edu.vn'

        ></Button>
      </Tooltip>
    </div>
  )
}

export default SocialLinks