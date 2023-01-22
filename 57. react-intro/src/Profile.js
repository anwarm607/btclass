import React from "react";
import './profile.css'


class Profile extends React.Component {
  getCurrentDate() {
    return new Date().toISOString();
  }

  render() {
    console.log(this.props);
    // Can not change props because it is read only
    // this.props.name = "Kannan"
    let location = "Chennai";
    let profilePic = "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
    return (
      <div>
        <p className="person-name">Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Location: {location}</p>
        <p>Number: {22 + 44}</p>
        <p>Current date: {this.getCurrentDate()}</p>
        {this.props.phoneNumber ? (
          <p style={{ fontWeight: "bold" }}>
            Phone number: {this.props.phoneNumber}
          </p>
        ) : null}
        <img src={profilePic} />
      </div>
    );
  }
}

export default Profile;
