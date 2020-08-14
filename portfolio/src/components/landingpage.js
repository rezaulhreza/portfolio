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
                <p><i class="fas fa-code"></i> HTML</p>
                <p><i class="fab fa-css3-alt"></i> CSS</p>
                <p><i class="fab fa-js-square"></i> JavaScript</p>
                <p><i class="fab fa-bootstrap"></i> Bootstrap</p>
                </div>
                <div className="FrontEnd">
                <p><i class="fab fa-react"></i> React</p>
                <p><i class="fab fa-react"></i> React Native</p>
                <p><i class="fab fa-node-js"></i> NodeJS</p>
                </div>
                <div className="FrontEnd">
                <p><i class="fas fa-code-branch"></i> Firebase</p>
                <p><i class="fas fa-code-branch"></i> Heroku</p>
                <p><i class="fab fa-cpanel"></i> cPanel</p>
                </div>
                <div className="FrontEnd">
                <p><i class="fas fa-database"></i> Oracle SQL</p>
                <p><i class="fab fa-java"></i> Java</p>
                <p><i class="fab fa-python"></i> Python- Flask</p>
                </div>
                </div>
                <div className="Social-links">
                <a href="https://www.rezaulhreza.co.uk" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                </div>
                </div>


              </Grid>
            </div>
        )
    }
}
export default Landing;