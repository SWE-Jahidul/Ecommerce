import React, { Component } from "react";

import Top_header from "./top_header";
import Middle_header from "./middle_header";
import Headermenubar from "./headermenubar";
import Banner from "./banner";
import Sologan from "./sologan";
import Popular_product from "./popular_productt";
import New_arrival from "./new_arival"
import Recomand from "./recomand"
import OurBrand from "./our_brand"
import Footer from "./footer"

// import HalfRating from "./user_rattinf";
export class Home extends Component {
  render() {
    return (
      <div style = {{ backgroundColor : "#f5f5f5"}}>
        {/* <Top_header /> */}
        <Middle_header />
        <Headermenubar />
        <br />
        <Banner />
        <br />
        <Sologan />
        <br />
        <h2 style={{ marginLeft : 170 }} > Popular Product </h2> 
        <br/>
        <Popular_product />
        <br/>
       <h2 style={{ marginLeft : 170 }}  > New arrived </h2>
       <New_arrival />

         <br />
         <h2 style={{ marginLeft : 170 }}  >Recommended </h2>
 
       < Recomand />
       <br />
       {/* <h2 style={{ marginLeft : 170 }}  > Our Brands </h2>
     <div className="row container" style={{ marginLeft : 170 }}>
       <div className="col-md-2" style={{ marginLeft : 20 }}>
       <OurBrand />
       </div>
       <div className="col-md-2" style={{ marginLeft : 20 }}>
       <OurBrand />
       </div>
       <div className="col-md-2" style={{ marginLeft : 20 }}>
       <OurBrand />
       </div>
       <div className="col-md-2" style={{ marginLeft : 20 }}>
       <OurBrand />
       </div>
     </div> */}

    < Footer />

       </div>
    );
  }
}

export default Home;
