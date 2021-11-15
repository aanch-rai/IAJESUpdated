import { useState, useEffect } from "react";
import Axios from "axios"; // to make API calls
import Modal from "./Modal/Modal";


export const ViewProjects = (props) => {
  const [projectList, setProjectList] = useState([]);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProjectList(response.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <hr></hr>
        <h2 style={{ textAlign: "center" }}>View Projects</h2>
        {projectList.map((val) => {
          const img_link = "http://localhost:3001/images/" + val.aws_image_link;
          return (
            <div>
              <div>
                
                <img
                  src={img_link}
                  width="259"
                  height="194"
                  onClick={() => setShow(true)}
                />

                <p>
                  <b>{val.project_name}</b>
                </p>
            
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
                >
                  View Details
                </button>

                <br></br>
                <br></br>

              </div>

              <div>
                 <Modal
                  modData={modalData}
                  onClose={() => setShow(false)}
                  show={show}
                /> 
              </div>

            </div>
          );
        })}
        

        
      </div>
    </>
  );
};
