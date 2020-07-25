import React from 'react';
import Monitors from './monitors.jpeg'
import './EquipmentSale.css'

const EquipmentSale = () => {
  return ( 
    <div>
        <div className='top_title_container'>
          <div className='top_title'>Refurbished Equipment Sale</div>
        </div>

        <div className='refurbished_container'>
          <div className='refurbished_description one'>Revanix Biomedical sells all types of surgical and biomedical equipment. Refurbished equipment will be fully inspected and tested to be at original manufacturer specifications and will come with extended warranties. We can help you save money on any special projects coming up or if your hospital is expanding and needs additional equipment of any type. </div>

          <div className='monitor_img_container'>
            <img src={Monitors} alt='Patient Monitors' className='monitor_img'/>
          </div>
        </div>

        <h3 className='rental_title'>Rental Equipment</h3>

        <div className='refurbished_description'>Revanix Biomedical also rents surgical and biomedical equipment. If you need an extra number of surgical or biomedical units for a day or longer, please feel free to let us know. If you have extra cases or an increase in patients, you may need some extra equipment for a certain period of time. Renting equipment is more cost efficient!</div>
    </div>
   );
}
 
export default EquipmentSale;
