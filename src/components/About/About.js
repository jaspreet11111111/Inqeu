import { Paper } from '@mui/material'
import React from 'react'
import Contact from '../elements/Contact/Contact'
import Getapp from '../elements/GetApp/Getapp'
import Middle from '../elements/Middle/middle'
import Footer from '../Footer/Footer'
import Hero from './Hero/Hero'

const About = () => {
    return (
        <Paper>
            <Hero />
            <Middle />
            <Getapp />
            <Contact />
        </Paper>
    )
}

export default About