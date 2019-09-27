import React, { Component } from 'react'

export default class Met extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="met">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">                
                <h2 className="colorlib-heading animate-box">How We Met</h2>
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
                        <p>We met in the summer of 2015 on a flight back to New York from Austin, TX. I noticed Dave immediately when he was putting his bag in the overhead and was excited when I realized he was sitting next to me. Dave didn't notice me until after he tripped on my purse getting to his seat. After many profuse apologies about the abnormally long strap on my purse, we settled into talking and spent the whole flight realizing how many things we had in common. From Seinfeld and the Rangers to Border Cafe (both of their favorite Tex-Mex place in Boston), we never ran out of things to say. Over the last four years, we've traveled, explored the city, and watched and supported each other through new jobs and new adventures. We're so excited to start the next chapter and can't wait to celebrate with all of you! </p>
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
