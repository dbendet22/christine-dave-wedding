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
                        <li>The Mainland has nice amenities and is about 15 minutes from Bonnet Island Estate. We will provide transportation as needed.</li>
                        <li>Please note, we've reserved a room block for both Friday and Saturday night. Mention the "DWS room block" when calling to secure the discounted rate.</li>
                    </ul><br></br>

                    <h4>Alternative Hotel 1</h4>

                    <span><a href="https://www.choicehotels.com/reservations/groups/ja82p3?checkInDate=2021-09-03&checkOutDate=2021-09-05&ratePlanCode=BNQNFH" target='blank'> Clarion Hotel Toms River</a> | 815 Route 37 West, Toms River, NJ 08755 | (732) 341-2400 | <a href="https://www.google.com/maps/place/Clarion+Hotel+%26+Conference+Center/@40.005307,-74.287141,12.18z/data=!4m8!3m7!1s0x89c1761386079991:0x4cc78eaf7eed96dd!5m2!4m1!1i2!8m2!3d39.9701038!4d-74.2373918" target='blank'>Google Maps</a>                     
                    </span>
                    <ul>
                        <li>The Clarion Hotel has plenty of availability and is ~35 minutes from Bonnet Island Estate. We will provide transportation as needed.</li>
                        <li>Our wedding block name here is "Degenaars - Bendet Wedding" -- but that should already be selected for you if you follow the link above. You can also call the hotel and mention the "Degenaars - Bendet Wedding" room block if that's easier. </li>
                    </ul><br></br>  
                    <h4>Alternative Hotel 2</h4>

                    <span><a href="https://www.dslbi.com/" target='blank'> Drifting Sands LBI</a> | 119 E 9th St | Ship Bottom, NJ 08008 | 609-494-1123  | <a href="https://goo.gl/maps/XFEEWm2XicwbbKE29" target='blank'>Google Maps</a>                     
                    </span>
                    <ul>
                        <li>Drifting Sands has less frills than The Mainland but is right on the beach and only five minutes from Bonnet Island Estate.</li>
                    </ul><br></br>                    
                    
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
