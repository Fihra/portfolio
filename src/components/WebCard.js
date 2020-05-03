import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardStyles: {
        width: 300,
        height: 500,
        padding: 50
    }
}))

const WebCard = (props) => {
    const { title, thumbnail, info, toolsUsed, gh} = props.project;

    const classes = useStyles();

    return(
        <Card className={classes.cardStyles}>
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