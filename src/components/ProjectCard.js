import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GamesIcon from '@material-ui/icons/Games';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const ProjectCard = (props) => {

    const checkLink = (projectLink) => {
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

    const { title, thumbnail, info, role, toolsUsed, gh, videoFootage, playGame, soundtrack } = props.project;
    
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
                {gh === null ? null : checkLink(gh)}
                {videoFootage === null ? null : checkLink(videoFootage)}
                {playGame === null ? null : checkLink(playGame)}
                {soundtrack === null ? null : checkLink(soundtrack)}
            </CardActions>
        </Card>
    )
}

export default ProjectCard;