import React from 'react'
import profilepic from "../img/profilepic.webp"
import PropTypes from "prop-types"

const styleImage= {width: 350}

const Profile = ({FullName, Bio, Profession, children}) => {
  return (
    <div>
        <h1>FullName: {FullName}</h1>
        <h1>Bio: {Bio}</h1>
        <h1>Profession: {Profession}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

Profile.defaultProps ={
  FullName:"Unknown" ,
  Bio:"Unknown" ,
  Profession:"Unknown",
  children:
    <div>
      <h2>My profile PIC</h2>
      <img style={styleImage} src={profilepic} alt=''/>
    </div>
}

Profile.propTypes={
  FullName:PropTypes.oneOf(["Ahmed Soukeh" , "Selim Daoud"]),
  Bio:PropTypes.oneOfType([
    PropTypes.string,
  ])
}

export default Profile