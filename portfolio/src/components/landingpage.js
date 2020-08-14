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
                <h1>Full Stack Web Developer</h1>
                <div className="landing-skills">
                <div className="FrontEnd">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                </div>
                <div className="FrontEnd">
                <p>React</p>
                <p>React Native</p>
                <p>NodeJS</p>
                </div>
                <div className="FrontEnd">
                <p>Firebase</p>
                <p>Heroku</p>
                <p>cPanel</p>
                </div>
                <div className="FrontEnd">
                <p>Oracle SQL</p>
                <p>Java</p>
                <p>Flask</p>
                </div>
                </div>
                </div>


              </Grid>
            </div>
        )
    }
}
export default Landing;