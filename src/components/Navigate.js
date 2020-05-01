import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Fade from '@material-ui/core/Fade';

import About from './About';
import Audio from './Audio';
import Web from './Web';
import Contact from './Contact';

class Navigate extends Component {
    constructor(props){
        super(props);
        this.state = {
            selection: "Audio"
        }
    }

    handleChange = (event, newVal) => {
        console.log(newVal);
        this.setState({
            selection: newVal
        })
    }

    render(){
        return(
            <div>
                <Tabs value={this.state.selection} onChange={this.handleChange} aria-label='wrapped label tabs example' centered>
                    <Tab value="About" label="About"/>
                    <Tab value="Audio" label="Audio Portfolio"/>
                    <Tab value="Web" label="Web Portfolio"/>
                    <Tab value="Contact" label="Contact"/>
                </Tabs>
                {this.state.selection === "About" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><About /></Fade> : null}
                {this.state.selection === "Audio" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Audio /></Fade> : null}
                {this.state.selection === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
                {this.state.selection === "Contact" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Contact /></Fade> : null}
            </div> 
        )
    }
}

export default Navigate;