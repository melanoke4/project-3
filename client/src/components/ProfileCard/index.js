import React from "react";
import "./style.css";

const ProfileCard = () => {
  return (
      <div className="container">
          <div className="card mb-3" id="profile-card">
      <div className="row no-gutters">
        <div className="col-md-4">
  
        </div>
        <div className="col-md-8">
          <div className="card-body text-left">
            <h5 className="card-title"></h5>
            <div className="card-text text-left">
              <ul>
                <li>
                  Name: Vance
                </li>
                <li>
                  Email: vancenewberry@gmail.com
                </li>
                <li>
                  Premium User: False
                </li>
              </ul>              
            </div>
            
          </div>
          <button className="btn btn-success" id="profileB">
                Update Profile
          </button>
        </div>
      </div>
    </div>
      </div>
    
  );
};

export default ProfileCard;
