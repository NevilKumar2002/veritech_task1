import React from "react";
import image1 from "../assets/avatar_3781973.png";


function LeadershipTeam() {
  return (
    <div className="leadership-team-container">
      <div>
        <h3>Meet Our Team</h3>
        <h4>Leadership and Management Team</h4>
        <div className="leader-group1">
          <div className="leader-div">
            <img src={image1} alt="leader-1" className="image" />
            <p>Founder</p>
            <p className="founder">Founder/CEO</p>
          </div>
          <div className="leader-div">
            <img src={image1} alt="leader-1" className="image" />
            <p>Founder</p>
            <p className="founder">Founder/CEO</p>
          </div>
        </div>
        <div className="leader-group">
          <div className="leader-div">
            <img src={image1} alt="leader-1" className="image" />
            <p>VP Name</p>
            <p className="founder">VP Development &amp; Growth</p>
          </div>
          <div className="leader-div">
            <img src={image1} alt="leader-1" className="image" />
            <p>VP Name</p>
            <p className="founder">VP Sales &amp; Marketing</p>
          </div>
          <div className="leader-div">
            <img src={image1} alt="leader-1" className="image" />
            <p>VP Name</p>
            <p className="founder">VP Finance &amp; Operation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
