import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cancerBanner from "../assets/cancer-care-banner.jpg";
import educationBanner from "../assets/education-banner.jpg";
import womenEmpormentBanner from "../assets/women-empowerment-banner.jpg";
import cowCaring from "../assets/cowCaring.png";
import pilgrimsFood from "../assets/pilgrimsFood.png";

export function Carousel() {
  const images = [cowCaring,pilgrimsFood,cancerBanner, educationBanner, womenEmpormentBanner];

  const getHeightForWidth = (w) => {
    if (w >= 1200) return 420;
    if (w >= 900) return 360;
    if (w >= 600) return 280;
    return 180;
  };

  const [slideHeight, setSlideHeight] = useState(getHeightForWidth(window.innerWidth));

  useEffect(() => {
    const onResize = () => setSlideHeight(getHeightForWidth(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { arrows: true, dots: true } },
      { breakpoint: 600, settings: { arrows: false, dots: true } },
      { breakpoint: 480, settings: { arrows: false, dots: true } },
    ],
  };

  return (
    <div style={{ padding: "80px 10px 10px 10px" }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <div
              style={{
                height: slideHeight,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
              }}
            >
              <img
                src={src}
                alt={`banner-${idx}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
