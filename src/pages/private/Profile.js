import React from 'react';

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.profilePicture} alt="Profile Picture" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <ul>
      <h5>content</h5>
        <li>Email: {props.email}</li>
        <li>Location: {props.location}</li>
        <li>Website: {props.website}</li>
      </ul>
    </div>

  );
}

export default Profile;
