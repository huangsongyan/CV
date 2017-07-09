import React, { Component } from 'react';

export default class Section extends Component {
    render() {
        return (
            <section className="text-center" id={ this.props.sectionId }>
                <div className="container">
                    { this.props.children }
                </div>
            </section>
        )
    }
}