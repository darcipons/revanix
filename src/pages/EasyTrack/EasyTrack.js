import React from 'react';
import Track from './track.png'
import Comp from './comp.jpeg'
import './EasyTrack.css'

const Easy = () => {
  return ( 
    <div>
      <div className='top_title_container'>
        <div className='top_title'>Easy Track</div>
        <div className='top_description'>24/7 Online Tracking Program</div>
      </div>

      <div className='easy_comp_container'>
        <img src={Comp} alt='Computer Tacking' className='easy_computer'/>
      </div>

      <div className='easy_description'>
        Keep all of your equipment repairs in one convenient, easy to navigate location. Maintain records on all essential profile information including make, modal, serial number and much more. You can profile your equipment and access each time item's information using our Easy-Track program for your convenience. 
      </div>

      <div className='easy_title'>
        Easy-Track Allows You To:
      </div>

      <div className='easy_middle_container'>
        <div className='easy_middle first'>
          <img src={Track} alt='Tracking Circle' className='track_icon'/>
          Track the status of your equipment repairs.
        </div>

        <div className='easy_middle second'>
          <img src={Track} alt='Tracking Circle' className='track_icon'/>
          Review cost savings report.
        </div>

        <div className='easy_middle third'>
          <img src={Track} alt='Tracking Circle' className='track_icon'/>
          View item history.
        </div>

        <div className='easy_middle fourth'>
          <img src={Track} alt='Tracking Circle' className='track_icon'/>
          Request labels. 
        </div>
      </div>
    </div>
   );
}
 
export default Easy;