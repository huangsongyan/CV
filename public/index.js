import 'babel-polyfill';

/* react */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* library */
import 'jquery/dist/jquery';
import 'jquery.easing';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.css';

/* main css */
import './index.sass';

/* component */
import NavBar from './components/NavBar';
import Personal from './components/Personal';
import Skills from './components/Skills';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';

/* language */
import Zh from './languages/zh_tw_example.json';
import En from './languages/en_example.json';

class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: 'Zh',
        }
    }

    handleLanguage(language) {
        document.title = language == 'Zh' ? Zh.siteTitle : En.siteTitle
        this.setState({ language: language })
    }

    componentDidMount() {
        document.title = Zh.siteTitle
        document.getElementById('lastModified').innerHTML = document.lastModified

        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 700, 'easeInOutExpo');
            event.preventDefault();
        })

        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 200
        })

        $('#goTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 500, 'easeOutExpo')
        })

        $(window).scroll(function() {
            let last = $('body').height() - $(window).height() - 100
            $(window).scrollTop() >= last ? $('#goTop').fadeIn('fast') : $('#goTop').stop().fadeOut('fast')
        })
    }

    render() {
        const content = this.state.language == 'Zh' ? Zh : En

        return (
        	<div>
        		<NavBar menuList={ content.menuList } handleLanguage={ language => this.handleLanguage(language) } />
        		<Personal  menu={ content.menuList[0] } personalInfo={ content.personalInfo } />
                <Skills menu={ content.menuList[1] } skillInfo={ content.skillInfo } />
        		<Education menu={ content.menuList[2] } educationInfo={ content.educationInfo } />
                <Experiences menu={ content.menuList[3] } experienceInfo={ content.experienceInfo } />
                <Projects menu={ content.menuList[4] } projectInfo={content.projectInfo} />
        		<Footer />
                <div id="goTop"><i className="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></div>
        	</div>
        )
    }
}

ReactDOM.render(<Resume />, document.getElementById('Resume'))