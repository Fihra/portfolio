import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import myImg from '../assets/headshot.jpg';
import SkillsData from './SkillsData';

class About extends Component {
    render(){
        return(
            <div>
                <Fade in={true} timeout={{enter: 1000, exit: 1000}} >
                <Grid container justify="center">
                    <Paper elevation={0}>
                    <Avatar alt="Fabian Headshot" src={myImg} style={{height: 150, width: 150, float: 'left', padding: 'auto'}}/>
                    <p>Fabian Fabro is a technical sound designer, software engineer, and composer.</p>
                    <p>He is a graduate from Flatiron School Seattle in the software engineering program.</p>
                    <p>He is also a graduate from University of Hawai&#699;i at M&#257;noa with a B.A. in music and anthropology.</p>
                    <SkillsData/>
                    </Paper>
                </Grid>
                </Fade>
            </div>
        )
    }
}

export default About;