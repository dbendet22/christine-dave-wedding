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
              <h1 id="colorlib-logo"><a href="index.html">Christine & David </a></h1>              
              <i className="icon-heart" aria-hidden="true" />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#details" data-nav-section="details">Wedding Details</a></li>
                  <li><a href="#travel" data-nav-section="travel">Where To Stay</a></li>
                  <li><a href="#rsvp" data-nav-section="rsvp">RSVP</a></li>    
                  <li><a href="#registry" data-nav-section="registry">Registry</a></li>                                                  
                  {/* <li><a href="#things" data-nav-section="things">Things To Do</a></li> */}
                  <li><a href="#met" data-nav-section="met">How We Met</a></li>
                  <li><a href="#proposal" data-nav-section="proposal">The Proposal</a></li>
                  <li><a href="#photos" data-nav-section="photos">Photos!</a></li>                    
                </ul>                
              </div>
              <a className="email" href="mailto: christinedavewedding2020@gmail.com" target="_blank"> <i className="icon-mail"></i> christinedavewedding2020@gmail.com</a>
            </nav>
            <div className="thanks"> Thanks 
              <a className='sidebar_link' href="https://github.com/dbarochiya" target="_blank"> dbarochiya</a> for site inspiration
              <br></br>
              <a href="https://github.com/dbendet22/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
            </div>
          </aside>                  
        </div>
      </div>
    )
  }
}
