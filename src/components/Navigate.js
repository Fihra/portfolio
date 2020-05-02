import React, { Component } from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';

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
                {this.state.selection === "About" ? <About />: null}
                {this.state.selection === "Audio" ? <Audio /> : null}
                {this.state.selection === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
                {this.state.selection === "Contact" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Contact /></Fade> : null}
            </div> 
        )
    }
}

export default Navigate;