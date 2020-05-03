import React from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

import MusicInspire from '../assets/MusicInspire.jpg';
import MusicianDirectory from '../assets/MusicianDirectory.jpg';
import InstrumentCollection from '../assets/Instrument_Collection.jpg';

import WebCard from './WebCard';

const Web = (props) => {
    const projectData = [
        {
            title: 'Hear Me Out (In-Progress)',
            thumbnail: null,
            info: "A web application for a directory of musicians, audio people.",
            toolsUsed: "React-Redux, Node.js, Express, MongoDB",
            gh: "https://github.com/Fihra/Hear-Me-Out"

        },
        {
            title: 'Instrument Collection',
            thumbnail: InstrumentCollection,
            info: "A web app for curating musical instruments to preserve historical data for preservation.",
            toolsUsed: "React-Redux, C#, .NET, MongoDB",
            gh: "https://github.com/Fihra/Instrument-Collection"
        },  
        {
            title: 'Musician Directory',
            thumbnail: MusicianDirectory,
            info: "A CLI app directory for musicians.",
            toolsUsed: "C#, .NET, MongoDB",
            gh: "https://github.com/Fihra/MusicianDirectory"
        },
        {
            title: 'MusicInspire',
            thumbnail: MusicInspire,
            info: "A Project Management web app for composers, songwriters, arrangers, musicians.",
            toolsUsed: "React, Ruby on Rails, SQLite3",
            gh: "https://github.com/Fihra/ComposerInspire-frontend"
        },
    ]

    const showProjects = () => {
        return projectData.map((project, index) => {
            return (
                <Fade in={true} timeout={{ enter: 1000, exit: 1000}} >
                    <Box p={3}><WebCard key={index} project={project}/></Box>
                </Fade>
            )
        })
    }

        return(
             <div>
                <Box display='flex' flexDirection="row" justifyContent="center" flexWrap="wrap" m={1} p={1}>
                    {showProjects()}
                </Box>
            </div>
        )
    }

export default Web;