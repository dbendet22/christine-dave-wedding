import React, { Component } from 'react'

export default class Registry extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="registry">
          <div className="colorlib-narrow-content">          
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="travel-desc">
                    {/*<span className="heading-meta">Wedding Details</span> */}
                    <h2 className="colorlib-heading">Registry</h2>
                    <hr/>                                                               
                    <span><a className="email" href="https://www.zola.com/registry/bendetdegenaarswedding" target="_blank">Click here to view our wedding registry!</a></span><br></br>
                    (needs to be updated further)
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
