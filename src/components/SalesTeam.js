import React from "react";
import image1 from "../assets/profile_3135768.png";
function SalesTeam(){

    return (
        <div className="leadership-team-container">
          <div>
           
            <h4>Sales and Marketing Team</h4>
            <div className="leader-group">
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Emaployee Name</p>
                <p className="founder">Sales Officer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Emaployee Name</p>
                <p className="founder">Sales Officer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Emaployee Name</p>
                <p className="founder">Sales Officer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Emaployee Name</p>
                <p className="founder">Sales officer </p>
              </div>
            </div>
            <div className="leader-group">
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Founder Name</p>
                <p className="founder">Marketing Officer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Founder Name</p>
                <p className="founder">Marketing Officer</p>
              </div>
              <div className="leader-div">
                <img src={image1} alt="leader-1" className="image" />
                <p>Founder Name</p>
                <p className="founder">Marketing Officer</p>
              </div>
            </div>
          </div>
        </div>
      );
}
export default SalesTeam;