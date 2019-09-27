import React, { Component } from 'react'

export default class RSVP extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="rsvp">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="travel-desc">
                    {/*<span className="heading-meta">Wedding Details</span> */}
                    <h2 className="colorlib-heading">RSVP</h2>
                    <hr/> 
                    <span> You can RSVP in any of the following ways: </span>                 
                    <ol>
                        <li>Fill out and return your invitation (preferred) </li>
                        <li>Email us at: <a className="email" href="mailto: christinedavewedding2020@gmail.com" target="_blank">christinedavewedding2020@gmail.com</a></li>
                        <li>Call or text us at either 914-439-1739 (David) or 551-427-2372 (Christine)</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>          
        </section>
      </div>
    )
  }
}
