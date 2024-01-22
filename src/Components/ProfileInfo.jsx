import React from 'react'
import '../Styling/ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className='profile-info-container'>
       <section className='profile-section'>
            <ul className='profile-section-ul'>
                <li className='profile-li'>
                    <img src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' alt='profile-pic' className='profile-pic'/>
                </li>
                <li className='profile-li'><h1>Nicholas Lopez</h1></li>
                <li className='profile-li'>
                    <span class="material-symbols-outlined" id='edit-btn'>
                        edit
                    </span>
                </li>
            </ul>
       </section>
       <br></br>
       <br></br>
       <br></br>
       <section className='profile-section'>
            <span className='title'>
                <h4>Personal Details</h4>
            </span>
            <ul className='profile-section-ul'>
                <li className='profile-li'>
                    <div className='profile-li-row'>
                        <span>Birthday</span>
                        <span>Jan 1</span>
                    </div>
                </li>
                <li className='profile-li'>
                    <div className='profile-li-row'>
                        <span>Gender</span>
                        <span>Male</span>
                    </div>
                </li>
                <li className='profile-li'>
                    <div className='profile-li-row'>
                        <span>Phone Number</span>
                        <span>777-777-7777</span>
                    </div>
                </li>
                <li className='Adresss'>
                    <div className='profile-li-row'>
                        <span>Address</span>
                        <span>1023 West French PL, San Antonio, Texas</span>
                    </div>
                </li>
                <li className='profile-li'>
                    <div className='profile-li-column'>
                        <div>
                            <h4>
                                Belt Grade
                            </h4>
                        </div>
                        <select>
                            <option>White</option>            
                            <option>Blue</option>
                            <option>Purple</option>
                            <option>Brown</option>
                            <option>Black</option>
                        </select>
                    </div>
                </li>
            </ul>
       </section>

    </div>
  )
}

export default ProfileInfo