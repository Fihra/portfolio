import React, { Component } from 'react';

import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GamesIcon from '@material-ui/icons/Games';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

class ProjectCard extends Component {

    checkLink = (projectLink) => {
        if(projectLink.includes("github")){
            return (<Link href={projectLink}>
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("youtu.be")){
            return (<Link href={projectLink}>
                <IconButton>
                    <YouTubeIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("itch") || projectLink.includes("global")){
            return (<Link href={projectLink}>
                <IconButton>
                    <GamesIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("bandcamp")){
            return (<Link href={projectLink}>
                <IconButton>
                    <MusicNoteIcon/>
                </IconButton>
            </Link>
            )
        }
    }

    render(){
        const { title, thumbnail, info, role, toolsUsed, gh, videoFootage, playGame, soundtrack } = this.props.project;
      
        return(
            <Card className="project-card">
                <CardHeader title={title}/>
                <CardMedia className="project-image" image={thumbnail} alt={thumbnail}/>
                <CardContent>
                    <Typography>{info}</Typography>
                </CardContent>
                {role === null ? null : `Role: ${role}`}
                <CardContent>
                    <Typography>Tools used: {toolsUsed}</Typography>
                </CardContent>
                <CardActions>
                    {gh === null ? null : this.checkLink(gh)}
                    {videoFootage === null ? null : this.checkLink(videoFootage)}
                    {playGame === null ? null : this.checkLink(playGame)}
                    {soundtrack === null ? null : this.checkLink(soundtrack)}
                </CardActions>
            </Card>
        )
    }
}

export default ProjectCard;