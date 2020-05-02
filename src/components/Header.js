import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

const myGithub = "https://www.github.com/fihra";
const myLinkedIn = "https://www.linkedin.com/in/fabian-fabro";
const myTwitter = "https://www.twitter.com/firahfabe";

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
            </div>
        )
    }
}

export default Header;