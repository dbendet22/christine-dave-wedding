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
                    <p>blah blah blah blah blahblah blah</p>
                    <p>blahblah blah blah blahblah blah blah blahblah blah blah blahblahblahblah blah blah blah blah blah blahblah blah </p>
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
