import React, { Component } from 'react';

import Section from './Section';
import TimeLine from './TimeLine';

export default class Experiences extends Component {
    render() {
        return (
            <Section sectionId={ this.props.menu.link } >
                <div className="row">
                    <div className="col-lg-12">
                        <h2> { this.props.menu.name } </h2>
                    </div>
                </div>
                <TimeLine data={ this.props.experienceInfo } />
            </Section>
        )
    }
}