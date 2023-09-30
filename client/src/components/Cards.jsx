import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Cards() {
  return (
    <div id="cards">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://d14vpcucj0dct5.cloudfront.net/filters:format(webp)/images/home_banner/Zebronic_Headphone_0sqWuqV.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>End of the season sale</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.travelandleisure.com/thmb/bwrWrmKNBDIzDaq4MW2GsotEifo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-travel-clothes-men-women-tout-3fd9c74d01e343cd89796f224c6287ee.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Latest trends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.androidgreek.com/wp-content/uploads/2021/05/Redmi-K40-Gaming-Edition-Rebranded-Poco-F3-GT-launch-Imminent.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Get the best prices</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cards;
