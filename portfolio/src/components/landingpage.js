import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
 class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
              <Grid ClassName='LandingPageGrid'>
              <Cell col={12}>
              <img src="https://w7.pngwing.com/pngs/446/548/png-transparent-web-development-organization-world-wide-web-icon-men-s-avatar-white-child-face.png"
              alt="avatar" className="avatar-img/>
              </Cell>
              </Grid>
            </div>
        )
    }
}
export default Landing;