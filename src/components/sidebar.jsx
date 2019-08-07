import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/engagement_minetta_street.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Christine & David <i className="icon-heart" aria-hidden="true" /></a></h1>
              <span className="email"><i className="icon-mail"></i> christine-dave2020@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>                  
                  <li><a href="#details" data-nav-section="details">Wedding Details</a></li>
                  <li><a href="#travel" data-nav-section="travel">Travel</a></li>
                  <li><a href="#things" data-nav-section="things">Things To Do</a></li>
                  <li><a href="#met" data-nav-section="met">How We Met</a></li>
                  <li><a href="#proposal" data-nav-section="proposal">The Proposal</a></li>
                  <li><a href="#photos" data-nav-section="photos">Photos!</a></li>                                    
                  <li><a href="#registry" data-nav-section="registry">Registry</a></li>                                                  
                  <li><a href="#rsvp" data-nav-section="registry">RSVP</a></li>    
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/dbendet22/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>                
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>                  
                  Thanks <a href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">dbarochiya</a> & <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for the theme 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
