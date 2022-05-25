import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
        <div className="" id="">
              <h1 className="font-bold text-3xl text-center py-12 txtnavy  ">TESTIMONIALS</h1>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >

        <div>
          <div className="myCarousel effectback ">
            <h3>Prabhat</h3>
            <h4></h4>
            <p>
              The product quality was too good ! Ill always use DeepikaPrints for my Giftings.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel  effectback">
            <h3>Aryan Tiwari</h3>
            <h4>Student</h4>
            <p>
              I got the products on time , Im very happy with the service.
            </p>
          </div>
        </div>

        
      </Carousel>
      </div>
    );
  }
}