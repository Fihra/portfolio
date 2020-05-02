import React, { Component } from 'react';

import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GamesIcon from '@material-ui/icons/Games';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

class ProjectCard extends Component {
   
    showGithub = (gh) => {
        return (<Link href={gh}>
            <IconButton>
                <GitHubIcon/>
            </IconButton>
        </Link>
        )
    }

    showVideo = (yt) => {
        return (<Link href={yt}>
            <IconButton>
                <YouTubeIcon/>
            </IconButton>
        </Link>
        )
    }

    showGame = (game) => {
        return (<Link href={game}>
            <IconButton>
                <GamesIcon/>
            </IconButton>
        </Link>
        )
    }

    showSoundtrack = (soundtrack) => {
        
        return (<Link href={soundtrack}>
            <IconButton>
                <MusicNoteIcon/>
            </IconButton>
        </Link>
        )
    }

    render(){
        const { title, thumbnail, info, role, toolsUsed, gh, videoFootage, playGame, soundtrack } = this.props.project;
      
        return(
            <Card className="project-card">
                <CardHeader title={title}/>
                <CardMedia className="project-image" image={thumbnail}/>
                <CardContent>
                    <Typography>{info}</Typography>
                </CardContent>
                {role === null ? null : `Role: ${role}`}
                <CardContent>
                    <Typography>Tools used: {toolsUsed}</Typography>
                </CardContent>
                <CardActions>
                    {gh === null ? null : this.showGithub(gh)}
                    {videoFootage === null ? null : this.showVideo(videoFootage)}
                    {playGame === null ? null : this.showGame(playGame)}
                    {soundtrack === null ? null : this.showSoundtrack(soundtrack)}
                </CardActions>
            </Card>
        )
    }
}

export default ProjectCard;