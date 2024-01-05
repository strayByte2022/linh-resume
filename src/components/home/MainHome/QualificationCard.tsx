import { Card } from 'antd'
import React from 'react'
import CustomCard from './CustomCard'

const QualificationCard = () => {
  return (
    <Card className='grid '>
        <CustomCard Title='Memory management unit' Year='Feb 2023 - May 2023' Description='Used C to create a simulator of MMU that works on Unix environments .'/>
        <CustomCard Title='One-in-a-row & battleship board games' Year='Oct 2022 - Dec 2022' Description='Used Assembly to simulate gameplay of one-in-a-row and battleship board games.'/>
        <CustomCard Title='Chatbox' Year = 'Jun 2023 - Aug 2023' Description='Used Python to implement TCP/IP for message transmission over networks.'/>
        <CustomCard Title='Smart Student Printing Service' Year='Sep 2023 - Dec 2023' Description='Used Reactjs and Material UI design to implement a web application that manages the
printing service in university campus.'/>
        <CustomCard Title='Parcheesi 2.0' Year='Sep 2023 - Dec 2023' Description='Used Unity and C# to develop a game based on Parcheesi'/>
        <CustomCard Title='Hospital Database Management' Year='Sep 2023 - Dec 2023' Description='Used Supabase and NextJS to implement database system of a hospital, based on
designed relational schema'/>
        <CustomCard Title='League of Legends player stats crawler' Year='2023' Description='Used Python with APIs provided by Riot Games
to fetch League players game stats.'/>
    </Card>
  )
}

export default QualificationCard