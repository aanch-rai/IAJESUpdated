import React from "react";
import "./Modal.css";

const Modal = (props) => {
   if (!props.show) {
     return null;
   }

   const img_link = "http://localhost:3001/images/" + props.modData.aws_image_link;
   let completionStatus= "On-going";
   if(props.modData.completed == '1'){
     completionStatus = "Completed";
   }

  return (


      <div>
      <div
        class="modal fade"
        id="vertModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
            <img src={img_link} width="259" height="194"></img>
            <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title" id="exampleModalLabel">
                {props.modData.project_name}
              </h5>             
            </div>

            {/* Modal Body */}
            <div class="modal-body">
            <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>University: </b>{props.modData.university}</p>
             <p><b>Contact: </b>{props.modData.email}</p>
             <p><b>Country: </b>{props.modData.country}</p>
             <p><b>State: </b>{props.modData.state}</p>
             <p><b>City: </b>{props.modData.city}</p>
             <p><b>Status: </b>{completionStatus}</p>
             <p><b>Principal Investigator: </b>{props.modData.investigator}</p>
             <p><b>Partner Organizations: </b>{props.modData.partner_org}</p>
             <p><b>Project Link: </b>{props.modData.video_media_link}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
             <p><b>About: </b>{props.modData.project_summary}</p>
            </div>

            {/* Modal Footer */}
            <div class="modal-footer">
            <button
                    type="button"
                    className="btn btn-custom btn-lg"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
            </div>
          </div>

        </div>

      </div>

    </div>

 





    
  );
};

export default Modal;
