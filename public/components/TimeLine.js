import React, {Component} from 'react';
import SkillGroup from './SkillGroup';

export default class TimeLine extends Component {
    render() {
        const dataElements = []

        for(let [ index, data ] of this.props.data.entries()) {
            const listElements = []

            if(data.hasOwnProperty('list')) {
                for(let index in data.list) {
                    listElements.push(<p key={ index }> { data.list[index] } </p>)
                }
            }

            const sublistElements = []

            if(data.hasOwnProperty('sublist')) {
                for(let index in data.sublist) {
                    sublistElements.push(<li key={ index }> { data.sublist[index] } </li>)
                }
            }

            const tagElements = []

            if(data.hasOwnProperty('tag')) {
                tagElements.push(<SkillGroup key={ index } tags={ data.tag } />);
            }

            dataElements.push(
                <li key={ index } className={ data.class }>
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>
                                { data.title }
                            </h4>
                            <h5>
                                { data.subtitle }
                                <small className="pull-right duringtime"> { data.period } </small>
                            </h5>
                        </div>
                        <div className="timeline-body">
                            <div>
                                { listElements }
                                <ul>
                                    { sublistElements }
                                </ul>
                                { tagElements }
                            </div>
                        </div>
                    </div>
                </li>
            )
        }

        return (
            <div className="row text-left">
                <ul className="timeline">
                    { dataElements }
                </ul>
            </div>
        )
    }
}