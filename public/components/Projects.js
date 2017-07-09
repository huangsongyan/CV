import React, { Component } from 'react';

import Section from './Section';
import SkillGroup from './SkillGroup';

export default class Projects extends Component {
    render () {
        const projectElements = []

        for(let [ index, project ] of this.props.projectInfo.entries()) {
            projectElements.push(<ProjectContent key={ index } projectInfo={ project } />)
        }

        return (
            <Section sectionId={ this.props.menu.link } >
                <div className="row">
                    <div className="col-lg-12">
                        <h2> { this.props.menu.name } </h2>
                    </div>
                </div>
                <div className="row text-left">
                    { projectElements }
                </div>
            </Section>
        )
    }
}

class ProjectContent extends Component {
    render() {
        const listGroups = this.props.projectInfo.list.map((list, index) =>
            <li key={index}> {list} </li>
        )

        return (
            <div className={ `col-xs-12 col-sm-12 col-md-4 project-c${this.props.index}` }>
                <h4 className="project-title clearfix">
                    { this.props.projectInfo.project }
                </h4>
                <h5 className="clearfix">
                    <small className="pull-right duringtime"> { this.props.projectInfo.period } </small>
                </h5>
                <ul>
                    { listGroups }
                </ul>
                <SkillGroup tags={ this.props.projectInfo.tag } />
            </div>
        )
    }
}