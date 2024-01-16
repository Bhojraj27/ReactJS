import React from 'react';
import './rightbar.css';
import { Users } from "../../dummyData";
import Online from '../Online/Online';
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday Today
          </span>
        </div>
        <img
          className='rightbarAd'
          src="assets/ad.png"
          alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (<Online key={u.id} user={u} />))}
        </ul>
      </>
    );
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New Yark</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {Users.map((u) =>
          (
            <div key={u.id} className="rightbarFollowing">
              <img src={u.profilePicture} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{u.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> :  <HomeRightbar />}
      </div>
    </div>
  )
}
