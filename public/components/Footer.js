import React, { Component } from 'react';

const Footer = () => (
    <footer className="footer text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    Designed by Alvin Tsai
                </div>
                <div className="col-lg-12" style={{ 'marginTop': '2px' }}>
                    Last Modified: <span id="lastModified"></span>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer