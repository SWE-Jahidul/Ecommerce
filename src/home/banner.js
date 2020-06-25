import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="container carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://codezeel.com/prestashop/PRS04/PRS040080/modules/cz_imageslider/views/img/sample-1.jpg" className="img-fluid" alt="Responsive image" style={{ height:330 ,width:1100 }} />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cdn2.f-cdn.com/contestentries/1511114/34071546/5cf29908013ea_thumb900.jpg" style={{ height:330 ,width:1100 }} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div> 
          </div>
          <div class="carousel-item">
            <img src="https://www.prodesigns.com/backend/img/sliders/web-banner-design/1494070937-01.jpg" style={{ height:330 ,width:1100 }} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
