import React from 'react';
import userIcon from '../../assets/user.png';
import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.png';
import phoneIcon from '../../assets/phone.png';
import linkedinIcon from '../../assets/linkedin.png';

const ProfileHeader = ({Data:{fullname, phone, email, github, linkedin}}) => (
  <div className="profile__header__details">
    <div className="detail"><img src={userIcon} alt="userIcon"/><span>{fullname}</span></div>
    <div className="detail"><img src={phoneIcon} alt="phoneIcon"/><a href={`tel:${phone}`}>{phone}</a></div>
    <div className="detail"><img src={emailIcon} alt="emailIcon"/><a href={`mailto:${email}`}>Email</a></div>
    <div className="detail"><img src={githubIcon} alt="githubIcon"/><a href={github}>GitHub</a></div>
    <div className="detail"><img src={linkedinIcon} alt="linkedinIcon"/><a href={linkedin}>Linkdin</a></div>
  </div>
);

export default ProfileHeader;