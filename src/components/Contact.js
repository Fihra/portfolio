import React, { Component } from 'react';

import { Button, Link } from '@material-ui/core';

class Contact extends Component {
    render(){
        return(
            <div>
                <Link href="mailto:fabrofabian@gmail.com"><Button>Email Me!</Button></Link>
            </div>
        )
    }
}

export default Contact;