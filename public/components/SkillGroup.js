import React, { Component } from 'react';

export default class SkillGroup extends Component {
    render() {
         const skillGroups = this.props.tags.map((tag, index) =>
            <div key={ index } className={ `tag tag-${tag}` }></div>
        )

        return (
            <div className="skill-group"> { skillGroups } </div>
        )
    }
}