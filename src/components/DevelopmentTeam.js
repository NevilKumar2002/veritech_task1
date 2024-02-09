import React from "react";
import image1 from "../assets/profile_3135715.png";
function DevelopmentTeam(){

    return (
        <div className="leadership-team-container">
          <div>
           
            <h4>Development Team</h4>
            <div className="leader-group">
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
            </div>
            <div className="leader-group">
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Developer Name</p>
                <p className="founder">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      );
}
export default DevelopmentTeam;