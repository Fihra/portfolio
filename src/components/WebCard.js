import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const WebCard = (props) => {
    const { title, thumbnail, info, toolsUsed, gh} = props.project;

    return(
        <Card className="project-card">
            <CardHeader title={title}/>
            <CardMedia className="project-image" image={thumbnail}/>
            <CardContent>
                <Typography>{info}</Typography>
                <Typography>Tools used: {toolsUsed}</Typography>
            </CardContent>
            <CardActions>
                <Link href={gh}>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    )
}

export default WebCard;