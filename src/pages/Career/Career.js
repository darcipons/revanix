import React from 'react'
import './Career.css'

function Career () {
  return (
    <div>
      <div className='career_header_container'>
        <div className='career_title'>Careers at Revanix Biomedical</div>
      </div>

        <div className='career_positions'>Open Positions</div>
       
        <div className='career_available'>
          <div className='position_container1'>
            <div className='position_title 1'>Outside Sales Territory Manager</div>
            <div className='position_icon_container 1'>
              <div className='postion_icon 1'><i className="las la-map-marker la-2x"></i></div>
              <div className='postion_location 1'>Los Angeles, California</div>
            </div>
          </div>

          <div className='position_container2'>
            <div className='position_title 2'>Outside Sales Territory Manager</div>
            <div className='position_icon_container 2'>
              <div className='postion_icon 2'><i className="las la-map-marker la-2x"></i></div>
              <div className='postion_location 2'>Houston, Texas</div>
            </div>
          </div>

          <div className='position_container3'>
            <div className='position_title 3'>Inside Sales Representative</div>
            <div className='position_icon_container 3'>
              <div className='postion_icon 3' ><i className="las la-map-marker la-2x"></i></div>
              <div className='postion_location 3'>South Florida</div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Career 
