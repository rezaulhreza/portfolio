import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
 class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                 <img src="https://cdn4.iconfinder.com/data/icons/set-of-avatars-flat-icon/128/man6-512.png" 
                   alt="avatar" className="avatar-img"/>
                </Cell>
                <div className="banner-text">
                <h1>Full Stack Developer</h1>
                </div>

              </Grid>
            </div>
        )
    }
}
export default Landing;