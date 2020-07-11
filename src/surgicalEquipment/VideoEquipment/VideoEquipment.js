import React from 'react';
import Video1 from './video1.png'
import Video2 from './video2.png'
import './VideoEquipment.css'

const VideoEquipment = () => {
  return ( 
    <div>
        <div className='rigid_header_container'>
          <div className='rigid_title'>Video Equipment</div>
        </div>
       
      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Video Equipment Repair Services</div>
        <div className='rigid_repair_services_description'>Revanix  Biomedical recognizes the importance of video equipment in a surgical environment, our services serve a wide range of surgical cameras, couplers and related equipment. Almost 99% of all power equipment repairs are due to fluid invasion our exceptional level of quality repair demonstrates only the best maintenance for your needs </div>
      </div>

      <div className='video_img_container'>
        <div className='video_sub_container 1'>
          <img src={Video1} alt='Video Equipment' className='video_img 1'></img>
        </div>

        <div className='video_sub_container 2'>
          <img src={Video2} alt='Video Equipment' className='video_img 2'></img>
        </div>
      </div>

      <div className='video_middle_container'>
        <div className='video_text_container'>
          <div className='video_title'>Brands We Repair </div>
          <div className='video_list'>
            <ul>
                <li>Karl Storz</li>
                <li>Olympus</li>
                <li>Stryker</li>
                <li>Conment</li>
            </ul>
          </div>
        </div>

        <div className='advan_container video'>
            <div className='advan_title video'>Revanix Advantages </div>
            <div className='advan_list video'>
              <ul>
                <li>Free Loaners</li>
                <li>Free Evaluations</li>
                <li>Free Estimates</li>
                <li>Quick Turnaround Time</li>
              </ul>
            </div>
          </div>

      </div>

    </div>
   );
}
 
export default VideoEquipment;

