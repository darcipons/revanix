import React from 'react'
import './Form.css'

const Form = () => {

  return (
    <>
      <form>
        <label>
          Name:
          <input 
            type='text' 
            name='name' 
          />
        </label>
        <label>
          Email:
          <input 
            type='text' 
            name='email'
          />
        </label>
        <label>
          Phone:
          <input 
            type='text' 
            name='number'
          />
        </label>
        <textarea>Message</textarea>
      </form>
    </>
  )
}

export default Form
