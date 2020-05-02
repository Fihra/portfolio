import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { Link, IconButton } from '@material-ui/core';

const myGithub = "https://www.github.com/fihra";
const myLinkedIn = "https://www.linkedin.com/in/fabian-fabro";
const myTwitter = "https://www.twitter.com/firahfabe";
const myEmail = "mailto:fabrofabian@gmail.com";

class Header extends Component {
    render(){
        return(
            <div>
                <h1>Fabian Fabro</h1>
                <h2>Technical Sound Designer | Software Engineer | Composer</h2>
                <IconButton>
                    <Link href={myGithub}>
                    <GitHubIcon ></GitHubIcon>
                    </Link>
                </IconButton>
                <IconButton>
                 <Link href={myLinkedIn}>
                    <LinkedInIcon></LinkedInIcon>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href={myTwitter}>
                    <TwitterIcon ></TwitterIcon>
                    </Link>
                </IconButton>         
                <IconButton>
                    <Link href={myEmail}>
                    <EmailIcon ></EmailIcon>
                    </Link>
                </IconButton>   
            </div>
        )
    }
}

export default Header;