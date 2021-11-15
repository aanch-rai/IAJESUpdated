import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import Axios from "axios"; // to make API calls
import Modal from "../Modal";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const SlideViewProjects = () => {
  const [projectList, setProjectList] = useState([]);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProjectList(response.data);
    });
  }, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };

  return (
    <div id = "slideViewProjects" className= "container">
        <h2 style={{ textAlign: "center" }}>View Projects</h2>
        
      <Slider {...settings} className="slider">
        {projectList.map((val)=>{
           const img_link = "http://localhost:3001/images/" + val.aws_image_link;
           return(
             <div className="containerSlide">
            <div className="slick-slide" key={val.project_ID}>
              <br></br>
              <h2 className="slick-slide-title">{val.project_name}</h2>
              <br></br>
              <img
              className="slick-slide-image"
              src={img_link} 
              width="300"
              height="250"
            />
              <br></br>
              <br></br>
             <button
                  className="btn btn-secondary btn-lg active"
                  aria-pressed="true"
                  data-toggle="modal"
                  data-target="#vertModal"
                  data-whatever="@getbootstrap"
                  onClick={() => {
                    setModalData(val);
                    setShow(true);
                  }}
                >View Details</button>
              </div>

                  




              </div>
           )
        })


        }
      </Slider>

              <div>
                 <Modal
                  modData={modalData}
                  onClose={() => setShow(false)}
                  show={show}
                /> 
              </div>

    </div>
  );
};
