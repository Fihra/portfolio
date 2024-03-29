import React, { useState } from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';
import About from './About';
import Audio from './Audio';
import Web from './Web';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    navBarStyles: {
        fontSize: 20
    }
}))

const Navigate = (props) => {
    const classes = useStyles();

    const [selectionState, setSelectionState] = useState("Audio")

    const handleChange = (event, newVal) => {
        setSelectionState(newVal)
    }

    return(
        <div>
            <Tabs value={selectionState} onChange={handleChange} aria-label='wrapped label tabs example' centered>
                <Tab className={classes.navBarStyles} value="About" label="About" aria-label="About"/>
                <Tab className={classes.navBarStyles} value="Audio" label="Game Audio" aria-label="Game Audio"/>
                <Tab className={classes.navBarStyles} value="Web" label="Software Apps" aria-label="Software Apps"/>
            </Tabs>
            {selectionState === "About" ? <About />: null}
            {selectionState === "Audio" ? <Audio /> : null}
            {selectionState === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
        </div> 
    )
}

export default Navigate;