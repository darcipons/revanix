import React from 'react';
import Handshake from './agreement.png'
import Money from './moneySquares.png'
import './Agreement.css'

const Agreement = () => {
  return ( 
    <div>
       <div className='top_title_container'>
          <div className='top_title'>Service Agreement and Contract</div>
       </div>

      <h2 className='total_care_title'>Total Care Contract</h2>

      <div className='agreement_middle'>
        <div className='agreement_description1'>Our Total Care Contract will cover unlimited repairs, including wear and tear, user error, free loaners, free shipping, and is valid for up to 3 years. </div>

        <div className='agreement_img_container'>
          <img src={Handshake} alt='Handshake Agreement' className='agreement_img'/>
        </div>
      </div>

      <h2 className='total_care_title two'>Benefits of our Total Care Contract</h2>

      <div className='benefits_description'>With our Total Care Contract if we cannot repair one of your equipments on the contract, we will send it to the original manufacturer and we will cover the price. Your contract pricing will not change because of this. You can also add/remove equipment at no additional charge. This will help you run the budget easier as you will know exactly what you are paying for your repairs each month. 
      </div>

      <div className='money_img_container'>
        <img src={Money} alt='No fees with money icon' className='money_img'/>
      </div>
      
    </div>
   );
}
 
export default Agreement;
