import React, { Component } from 'react'

export default class Travel extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-travel" data-section="travel">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="travel-desc">
                    {/*<span className="heading-meta">Wedding Details</span> */}
                    <h2 className="colorlib-heading">Where To Stay</h2>
                    <hr/> 
                    <h4>Two Recommended Hotels</h4>
                    
                    <span><a href="https://themainlandnj.com/hotel/" target='blank'> The Mainland</a> | 151 NJ-72 | Manahawkin, NJ 08050 | 609-481-6100 | <a href="https://goo.gl/maps/UJ7t3uDWLj2Z7w869" target='blank'>Google Maps</a>
                    </span>
                    <ul>
                        <li>The Mainland has very nice amenities and is close to Bonnet island.</li>
                    </ul><br></br>

                    <span><a href="https://www.dslbi.com/" target='blank'> Drifting Sands LBI</a> | 119 E 9th St | Ship Bottom, NJ 08008 | 609-494-1123  | <a href="https://goo.gl/maps/XFEEWm2XicwbbKE29" target='blank'>Google Maps</a>                     
                    </span>
                    <ul>
                        <li>Drifting Sands has less frills than The Mainland, but is right on the beach and even closer to Bonnet Island.</li>
                    </ul><br></br>
                    
                    <h4>Please Note</h4>
                    <ul>
                        <li>We've reserved a discounted room block for Saturday night at both hotels.</li>
                        <li>Mention the Degenaars-Bendet room block when booking for the discounted rate!</li>
                        <li>We will provide transportaiont between both hotels and Bonnet Island to make getting around super convenient.</li>                        
                    </ul>
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
