import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import { Spring } from 'react-spring/renderprops'
import './Career.css'

function Career () {

  function animation(title) {
    return <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000 }}
    >
    { props => ( <div style={props} >{title}</div> )}
    </Spring>
  }

  return (
    <div>
      <div className='top_title_container'>
        <div className='top_title'>Careers at Revanix Biomedical</div>
      </div>

        <div className='career_positions'>{animation('Open Positions')}</div>
       
        <div className='career_available'>
          <div className='position_container1'>
            <div className='position_title 1'>Outside Sales Territory Manager</div>
            <div className='position_icon_container 1'>
              <div className='postion_icon 1'><i className="las la-map-marker la-2x"></i></div>
              <div className='postion_location 1'>Los Angeles, California</div>
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

        <div className='contactus'>
          <ContactUs />
        </div>

    </div>
  )
}

export default Career 
