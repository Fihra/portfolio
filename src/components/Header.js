import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link, IconButton, Typography } from '@material-ui/core';

import AudioTechResume from '../assets/Fabian-Fabro-Tech-Audio-Resume.pdf';
import SoftwareResume from '../assets/Fabian-Fabro-Resume.pdf';

const myGithub = "https://www.github.com/fihra";
const myLinkedIn = "https://www.linkedin.com/in/fabian-fabro";
const myTwitter = "https://www.twitter.com/firahfabe";
const myEmail = "mailto:fabrofabian@gmail.com";
const myBlog = "https://dev.to/fihra";

const Header = (props) => {

    return(
        
        <div>
                <Typography variant="h2">Fabian Fabro</Typography>
                <Typography variant="h4">Technical Sound Designer | Software Engineer | Composer</Typography>
                <IconButton>
                    <Link href={myGithub}>
                    <GitHubIcon></GitHubIcon>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href={myLinkedIn}>
                    <LinkedInIcon></LinkedInIcon>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href={myBlog}>
                    <WebIcon></WebIcon>
                    </Link>
                </IconButton>  
                <IconButton>
                    <Link href={myTwitter}>
                    <TwitterIcon></TwitterIcon>
                    </Link>
                </IconButton>         
                <IconButton>
                    <Link href={myEmail}>
                    <EmailIcon></EmailIcon>
                    </Link>
                </IconButton>   
                <IconButton>
                    <Link href={AudioTechResume} target="_blank">
                    <DescriptionIcon></DescriptionIcon>
                    </Link>
                </IconButton> 
                <IconButton>
                    <Link href={SoftwareResume} target="_blank">
                    <DescriptionIcon></DescriptionIcon>
                    </Link>
                </IconButton> 
        </div>
    )
}

export default Header;