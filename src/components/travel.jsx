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
                    <h4>Recommended Hotel</h4>

                    <span><a href="https://themainlandnj.com/hotel/" target='blank'> The Mainland</a> | 151 NJ-72 | Manahawkin, NJ 08050 | 609-481-6100 | <a href="https://goo.gl/maps/UJ7t3uDWLj2Z7w869" target='blank'>Google Maps</a>
                    </span>
                    <ul>
                        <li>The Mainland has nice amenities and is about 15 minutes from Bonnet Island Estate.</li>
                        <li>Please note, we've reserved a room block for both Friday and Saturday night. Mention the "DWS room block" when calling to secure the discounted rate.</li>
                    </ul><br></br>

                    <h4>Alternative Hotel</h4>

                    <span><a href="https://www.dslbi.com/" target='blank'> Drifting Sands LBI</a> | 119 E 9th St | Ship Bottom, NJ 08008 | 609-494-1123  | <a href="https://goo.gl/maps/XFEEWm2XicwbbKE29" target='blank'>Google Maps</a>                     
                    </span>
                    <ul>
                        <li>Drifting Sands has less frills than The Mainland but is right on the beach and only five minutes from Bonnet Island Estate.</li>
                        <li>Please note, we've reserved both an Economy and an Oceanfront room block for Saturday night. Mention "Degenaars-Bendet room block" when calling to secure the discounted rate.</li>
                    </ul><br></br>                    
                    
                    <div>Stay tuned for details regarding transportation between both hotels and Bonnet Island Estate.</div>
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
