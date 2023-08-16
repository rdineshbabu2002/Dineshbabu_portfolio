import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}

      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <div className="portfolio-slider">
        <SwiperSlide>
          <a href="https://zero-waste-food.netlify.app/" target="_blank">
            <img
              src={"https://i.ytimg.com/vi/44y1bDtd1rg/maxresdefault.jpg"}
              alt=""
            />
          </a>
          <h3 style={{ textAlign: "center" }}>Zero Waste</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tourtrekker.netlify.app/" target="_blank">
            <img
              src={
                "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              }
              style={{ height: "215px" }}
              alt=""
            />
          </a>
          <h3 style={{ textAlign: "center" }}>Tour Trekker</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/rdineshbabu2002/invoice-electron-app.git"
            target="_blank"
            alt="fgfh"
          >
            {" "}
            <img
              src={
                " https://5.imimg.com/data5/SELLER/Default/2023/6/320041536/WQ/VN/DI/5339162/biling-software-250x250.jpg"
              }
              style={{ height: "215px" }}
              alt=""
            />{" "}
          </a>
          <h3 style={{ textAlign: "center", fontWeight: "strong" }}>
            Billing System
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://flight--booking.vercel.app/" target="_blank">
            {" "}
            <img
              src={
                "https://media.istockphoto.com/id/882396802/photo/flight-search-on-internet-buy-ticket-online.jpg?s=612x612&w=0&k=20&c=T0CJ-AS5Lk3bhL7JrsmC1VM5Y7mOcYN2ck3sPPygsNM="
              }
              style={{ height: "215px" }}
              alt=""
            />{" "}
          </a>
          <h3 style={{ textAlign: "center", fontWeight: "strong" }}>
            Flight Booking
          </h3>
        </SwiperSlide>
      </div>
    </div>
  );
};

export default Portfolio;
