import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../public/c8.jpeg"
import "../public/c2.jpeg"
import "../public/b1.jpeg"
import "../public/c3.jpeg"
import "../public/c4.jpeg"
import "../public/c9.jpeg"
import "../public/c10.jpeg"
import "../public/c5.jpeg"
import "../public/c6.jpeg"
import "../public/dia4.jpeg"






export default class Frontpaged extends Component {
  render() {
    return (
        <div className="" id="">
              <h1 className="font-bold text-3xl text-center  text-blue-600  ">FEAUTURED PRODUCTS</h1>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >

<div className="c5i ptour0">
<img src="c5.jpeg"></img>

</div>


<div className="image99">
<img src="dia4.jpeg"></img>

</div>

<div className="image99">
<img src="c6.jpeg"></img>

</div>

<div className="image99">
<img src="c10.jpeg"></img>

</div>
<div className="image99">
<img src="b1.jpeg"></img>

</div>  
      </Carousel>
      </div>
    );
  }
}