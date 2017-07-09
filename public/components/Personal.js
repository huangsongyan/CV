import React, {Component} from 'react';

import Section from './Section';
import MeImage from '../imgs/me.png';

export default class Personal extends Component {
    render() {
        const socialMediaElements = []

        for(let [ index, socialMedia ] of this.props.personalInfo.socialMediaList.entries()) {
            socialMediaElements.push(
                <a key={ index } className="social-element" href={ socialMedia.link } target="_blank" title={ socialMedia.title }>
                    <i className={ `fa ${ socialMedia.name } fa-2x` } aria-hidden="true"></i>
                </a>
            )
        }

        return (
            <Section sectionId={ this.props.menu.link } >
                <div className="row">
                    <div className="col-lg-12">
                        <img src= { MeImage } className="img-responsive img-customize"></img>
                        <h1> { this.props.personalInfo.name } </h1>
                        <p><a href={ `mailto: ${this.props.personalInfo.mail}` }> { this.props.personalInfo.mail } </a></p>
                        <div>
                            { socialMediaElements }
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}