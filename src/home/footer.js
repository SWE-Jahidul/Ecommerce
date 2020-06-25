import React, { Component } from 'react'

import './footer.css' ;

export default class Footer extends Component {
    render() {
        return (
            <div>
              
                 <div class="container-fluid footermain_div" style= {{ backgroundColor:"#3c3d41" }}>

<button onclick="topFunction()" id="to-top" title="Go to top">Top</button>

<div className="row  row-no-gutters">
  <div className="col-xs-12 col-sm-6 col-md-3" >
    <ul>
      <li className="col-heading">Subheading</li>
      <li>
        <i className="fa fa-phone" aria-hidden="true"></i><a href="tel:99-999-999-9999">99-999-999-9999</a>
      </li>
      <li>
        <i className="fa fa-mobile" aria-hidden="true"></i><a href="sms:99-999-999-9999">SMS Message</a>
      </li>
      <li>
         <i className="fa fa-map-marker" aria-hidden="true"></i><a href="#">Address</a>
      </li> 
      <li>
         <i className="fa fa-envelope-square" aria-hidden="true"></i><a href="mailto:someone@yoursite.com?subject=Email Subject line">Email Us</a>  
      </li> 
    </ul>
  </div>     

  <div className="col-xs-12 col-sm-6 col-md-3" >
    <ul>
      <li className="col-heading">Subheading</li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
    </ul>
  </div>      

  <div className="col-xs-12 col-sm-6 col-md-3" >
    <ul>
      <li className="col-heading">Subheading</li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
    </ul>
  </div>
  
  <div className="col-xs-12 col-sm-6 col-md-3" >
    <ul>
      <li className="col-heading">Subheading</li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
      <li><a href="#">Link to page</a></li>
    </ul>
  </div>
</div> 

<div className="row row-no-gutters" id="bottom-footer" style= {{ backgroundColor:"#3c3d41" }} >
  
  <div className="col-xs-12 col-md-5 text-center" >
      <ul className="vertical-links small">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Site Map</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
  </div>
  <div className="col-xs-12 col-md-2 text-center" >
    <p><i className="fa fa-heart-o" aria-hidden="true"></i></p>
  </div>
  <div className="col-xs-12 col-md-5 text-center" >
    <ul>
    {/* style="color:white;font-weight:500;" */}
      <li className="small">© Copyright 2019 Website by <a href="#" >Developr</a>. All Rights reserved.</li>
    </ul>
  </div>
</div> 
</div> 
            </div>
        )
    }
}
