import React, {Component} from 'react';
import Section from './Section';

export default class Skills extends Component {
    render() {
        return (
            <Section sectionId={ this.props.menu.link } >
                <div className="row">
                    <div className="col-lg-12">
                        <h2> { this.props.menu.name } </h2>
                    </div>
                    <TagGroup subtitle={ this.props.skillInfo[0].name } tags={ this.props.skillInfo[0].tag } />
                    <TagGroup subtitle={ this.props.skillInfo[1].name } tags={ this.props.skillInfo[1].tag } />
                    <TagGroup subtitle={ this.props.skillInfo[2].name } tags={ this.props.skillInfo[2].tag } />
                </div>
            </Section>
        )
    }
}

class TagGroup extends Component {
    render() {
        const tagGroups = this.props.tags.map((tag, index) =>
            <div key={ index } className={ `tag tag-${tag}` }></div>
        )

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 skill-mark">
               <h4>{ this.props.subtitle } </h4>
               { tagGroups }
            </div>
        )
    }
}