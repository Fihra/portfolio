import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import About from './About';

class Navigate extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAboutOn: false,
            isAudioOn: false,
            isWebOn: false,
            isContactOn: false
        }
    }

    showPage = (contentSelection) => {
        switch(contentSelection){
            case "About":
                this.controlAbout();
                return;
            case "Audio":
                this.controlAudio();
                return;
            case "Web":
                this.controlWeb();
                return;
            case "Contact":
                this.controlContact();
                return;
            default:
                break;
        }
    }

    controlAbout = () => {
        if((this.state.isAudioOn || this.state.isWebOn || this.state.isContactOn) || (this.state.isAboutOn === false )){
            this.setState({
                isAboutOn: true,
                isAudioOn: false,
                isWebOn: false,
                isContactOn: false
            })
        } else{
            this.setState({
                isAboutOn: false
            })
        }  
    }

    controlAudio = () => {
        if((this.state.isAboutOn || this.state.isWebOn || this.state.isContactOn) || (this.state.isAudioOn === false )){
            this.setState({
                isAboutOn: false,
                isAudioOn: true,
                isWebOn: false,
                isContactOn: false
            })
        } else{
            this.setState({
                isAudioOn: false
            })
        }  
    }

    controlWeb = () => {
        if((this.state.isAboutOn || this.state.isAudioOn || this.state.isContactOn) || (this.state.isWebOn === false )){
            this.setState({
                isAboutOn: false,
                isAudioOn: false,
                isWebOn: true,
                isContactOn: false
            })
        } else{
            this.setState({
                isWebOn: true
            })
        }  
    }

    controlContact = () => {
        if((this.state.isAboutOn || this.state.isAudioOn || this.state.isWebOn) || (this.state.isContactOn === false )){
            this.setState({
                isAboutOn: false,
                isAudioOn: false,
                isWebOn: false,
                isContactOn: true
            })
        } else{
            this.setState({
                isContactOn: false
            })
        }  
    }

    render(){
        return(
            <div>
                <ul className="navigator">
                    <li><Button onClick={() => this.showPage("About")}>About</Button></li>
                    <li><Button onClick={() => this.showPage("Audio")}>Technical Audio Portfolio</Button></li>
                    <li><Button onClick={() => this.showPage("Web")}>Web Portfolio</Button></li>
                    <li><Button onClick={() => this.showPage("Contact")}>Contact</Button></li>
                </ul>
            </div>
        )
    }
}

export default Navigate;