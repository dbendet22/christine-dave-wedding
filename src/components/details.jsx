import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-details" data-section="details">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="details-desc">
                    {/*<span className="heading-meta">Wedding Details</span> */}
                    <h2 className="colorlib-heading">Wedding Details</h2>
                    <hr/>
                    <h4>Date</h4>
                    <span>Saturday, September 26 2020</span> <br></br><br></br>
                    <h4>Location</h4>
                       <a href="https://weddingsofdistinctionnj.com/venues/bonnet-island-estate/" target='blank'>Bonnet Estate Island </a> <br></br>
                       2380 E Bay Ave<br></br> 
                       Manahawkin, NJ 08050<br></br> 
                       <a href="https://goo.gl/maps/4vf264iFZqUsa1zB6" target='blank'>Google Maps</a><br></br>
                       After party to follow on premesis<br></br><br></br>
                    <h4>Attire</h4>
                       Black Tie Optional (<a href="https://www.theknot.com/content/what-to-wear-formal-black-tie-optional-black-tie-invited" target='blank'>Helpful Guide</a>)
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
