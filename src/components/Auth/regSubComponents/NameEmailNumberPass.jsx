import React from 'react';

const NameEmailNumberPass = props => (
  <div>
    <h2>Create your profile</h2>
    <input 
      type='text' 
      name='regFirstName' 
      onChange={ event => props.userInput(event) }
      placeholder='first name' 
      required />
    <input 
      type='text' 
      name='regLastName' 
      onChange={ event => props.userInput(event) }
      placeholder='last name' 
      required />
    <input 
      type='email' 
      name='regEmail' 
      onChange={ event => props.userInput(event) }
      placeholder='email' 
      required />
    <input 
      type='password' 
      name='regPass' 
      onChange={ event => props.userInput(event) } 
      placeholder='create your password' 
      required />
    <input 
      type='password' 
      name='regPassTwo' 
      onChange={ event => props.userInput(event) } 
      placeholder='confirm your password' 
      required />
  </div>
)

export default NameEmailNumberPass;