import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const myGithub = "github.com/fihra";

class Header extends Component {

    

    openLink = (url) => {
        window.open()
    }

    render(){
        return(
            <div>
                <h1>Fabian Fabro</h1>
                <h2>Technical Sound Designer | Software Engineer | Composer</h2>
                <IconButton onClick={this.openLink(myGithub)}>
                    <GitHubIcon href="github.com/fihra"></GitHubIcon>
                </IconButton>
                
            </div>
        )
    }
}

export default Header;