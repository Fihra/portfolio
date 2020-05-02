import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const languages = ["Javascript", "C#", "Ruby", "HTML", "CSS", "SQL"];
const frameworks = ["React", "Redux", "Unity", "ASP.NET", "Ruby on Rails"];
const audioTools = ["Wwise", "FMOD", "Reaper", "Musescore"];
const otherTools = ["MongoDB", "Node.js", "Express", "SQLite3", "PostgreSQL", "Material UI", "Git & Github", "Postman"];
const methodologies = ["MVC (Model-View-Controller)", "OOP (Object-Oriented Programming)", "Functional Programming", "Restful Routes API"];

class SkillsData extends Component {

    showItems = (itemsArray) => {
        return itemsArray.map(item => {
            return <ListItem className="item-list">{item}</ListItem>
        })
    }
    
    render(){
        return(
            <Grid container justify="center">
                <Grid xs={2} item>
                    <List>
                        <Typography>Languages</Typography>
                        {this.showItems(languages)}
                    </List>
                </Grid>
                <Grid xs={2} item>
                    <List>
                        <Typography>Frameworks</Typography>
                        {this.showItems(frameworks)}
                    </List>
                </Grid>
                <Grid xs={2} item>
                    <List>
                        <Typography>Audio Tools</Typography>
                        {this.showItems(audioTools)}
                    </List>
                </Grid>
                <Grid xs={2} item>
                    <List>
                        <Typography>Other Tools</Typography>
                        {this.showItems(otherTools)}
                    </List>
                </Grid>
                <Grid xs={2} item>
                    <List>
                        <Typography>Methodologies</Typography>
                        {this.showItems(methodologies)}
                    </List>
                </Grid>
            </Grid>
        )
    }
}

export default SkillsData;