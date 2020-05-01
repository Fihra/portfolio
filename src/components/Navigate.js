import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Navigate extends Component {
    render(){
        return(
            <div>
                <ul className="navigator">
                    <li><Button>About</Button></li>
                    <li><Button>Technical Audio Portfolio</Button></li>
                    <li><Button>Web Portfolio</Button></li>
                    <li><Button>Contact</Button></li>
                </ul>
            </div>
        )
    }
}

export default Navigate;