import React, { useState } from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';
import About from './About';
import Audio from './Audio';
import Web from './Web';

const Navigate = (props) => {
    const [selectionState, setSelectionState] = useState("Audio")

    const handleChange = (event, newVal) => {
        setSelectionState(newVal)
    }

    return(
        <div>
            <Tabs value={selectionState} onChange={handleChange} aria-label='wrapped label tabs example' centered>
                <Tab value="About" label="About" aria-label="About"/>
                <Tab value="Audio" label="Audio Portfolio" aria-label="Audio Portfolio"/>
                <Tab value="Web" label="Web Portfolio" aria-label="Web Portfolio"/>
            </Tabs>
            {selectionState === "About" ? <About />: null}
            {selectionState === "Audio" ? <Audio /> : null}
            {selectionState === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
        </div> 
    )
}

export default Navigate;