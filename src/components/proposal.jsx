import React, { Component } from 'react'

export default class Proposal extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="proposal">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">                
                <h2 className="colorlib-heading animate-box">Proposal</h2>
                <hr/> 
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">                        
                        <p>Coming soon</p>
                        (I mean the explanation is coming soon, not the proposal itself...)
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
