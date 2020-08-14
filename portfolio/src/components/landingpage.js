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
                <p><i className="fas fa-code"></i> HTML</p>
                <p><i className="fab fa-css3-alt"></i> CSS</p>
                <p><i className="fab fa-js-square"></i> JavaScript</p>
                <p><i className="fab fa-bootstrap"></i> Bootstrap</p>
                </div>
                <div className="FrontEnd">
                <p><i className="fab fa-react"></i> React</p>
                <p><i className="fab fa-react"></i> React Native</p>
                <p><i className="fab fa-node-js"></i> NodeJS</p>
                <p>React Redux</p>
                </div>
                <div className="FrontEnd">
                <p><i classNamae="fas fa-code-branch"></i> Firebase</p>
                <p><i className="fas fa-code-branch"></i> Heroku</p>
                <p><i className="fab fa-cpanel"></i> cPanel</p>
                <p>MongoDB</p>
                </div>
                <div className="FrontEnd">
                <p><i class="fas fa-database"></i> Oracle SQL</p>
                <p><i className="fab fa-java"></i> Java</p>
                <p><i className="fab fa-python"></i> Python- Flask</p>
                <p>Python- Django</p>
                </div>
                </div>
                {/*linlkedin */}
                <div className="social-links">
                <a href="https://www.rezaulhreza.co.uk" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"></i></a>
                {/* Github*/}
                <a href="https://www.rezaulhreza.co.uk" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github-square" aria-hidden="true"></i>
                </a>
                {/*Freecodecamp */}
                <a href="https://www.rezaulhreza.co.uk" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-free-code-camp" aria-hidden="true"></i>
                </a>
                </div>
                </div>
              </Grid>
            </div>
        )
    }
}
export default Landing;