import { primaryColor } from '@/components/constants/color'
import { Typography, Progress, Tooltip } from 'antd'
import React from 'react'
import { Icon } from '@iconify/react';
const Skills = () => {
  return (
    <div className='grid mt-4 border-b'>
      <Typography style={{ fontWeight: 'bold' }} >Technical Skills</Typography>
      <Typography className='mb-2.5 mt-4'>Programming Languages</Typography>
      <div className='flex flex-wrap space-x-1'>
        {/* iconify */}

        <Icon icon="file-icons:c" width="40" height="40" />
        <Icon icon="devicon:c" width="40" height="40" />
        <Icon icon="openmoji:javascript" width="40" height="40" />
        <Icon icon="logos:python" width="40" height="40" />
        <Icon icon="tabler:sql" width="40" height="40" />
        <Icon icon="devicon:r" width="40" height="40" />
        
        <Icon icon="nonicons:c-sharp-16" width="40" height="40" />
      </div>

      <Typography className='mb-2.5 mt-4'>Framework/Libraries</Typography>
      <div className='flex flex-wrap space-x-2'>
        <Icon icon="logos:react" width="50" height="50" />
        <Icon icon="logos:nodejs" width="50" height="50" />
        <Icon icon="logos:nextjs" width="50" height="50" />
        <Icon icon="devicon:supabase-wordmark" width="50" height="50" />
      </div>

      <Typography className='mb-2.5 mt-4'>Developer Tools</Typography>
      <div className='flex flex-wrap space-x-2'>
        <Icon icon="devicon:vscode" width="40" height="40" />
        <Icon icon="devicon:clion" width="40" height="40" />
        <Icon icon="logos:webstorm" width="40" height="40" />
        <Icon icon="simple-icons:wireshark" width="40" height="40" />
      </div>

      <Typography className='mb-2.5 mt-4'>Project Management</Typography>
      <div className='flex flex-wrap space-x-2'>
        <Tooltip title='Scrum'>
          <Icon icon="simple-icons:scrumalliance" width="40" height="40" />
        </Tooltip>
        <Tooltip title='Agile'>
          <Icon icon="iconoir:agile" width="40" height="40" />
        </Tooltip>
        <Icon icon="devicon:git" width="40" height="40" />
        <Icon icon="mdi:github" width="40" height="40" />
      </div>

      <Typography className = 'mb-2.5 mt-4'>Operating Systems</Typography>
      <div className='flex flex-wrap space-x-2 mb-2'>
        <Icon icon="openmoji:windows" width="40" height="40" />
        <Icon icon="skill-icons:linux-light" width="40" height="40" />
      </div>
    </div>
  )
}

export default Skills