import React, { Component } from 'react';

export default class NavBar extends Component {
    static propTypes = {
        handleLanguage: React.PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            language: 'Zh'
        }
    }

    handleLanguage(language) {
        const currentLanguage = this.state.language == 'Zh' ? 'En' : 'Zh';

        if(this.props.handleLanguage) {
            this.props.handleLanguage(currentLanguage)
        }

        this.setState({ language: currentLanguage })
    }

    render () {
        const menuElements = []

        for (let [ index, menu ] of this.props.menuList.entries()) {
            menuElements.push(
                <li key= { index } >
                    <a className="page-scroll" href={ `#${menu.link}` }> { menu.name } </a>
                </li>
            )
        }

        return (
            <nav className="navbar navbar-default top-nav navbar-fixed-top">
                <div className="container-fulid">
                    <div className="div-nav pull-right">
                        <div className="lang-group">
                            <button className="btn btn-link lang-btn" onClick={ this.handleLanguage.bind(this) }>
                                <i className="fa fa-globe lang-icon"></i>
                                { this.state.language == 'Zh' ? '英' : 'Zh' }
                            </button>
                        </div>
                        <ul className="nav navbar-nav">
                            { menuElements }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}