import React, { useContext } from 'react'
import '../DarkMood.css'
import { Icon } from '@iconify/react';
import { UserContextUiUx } from './context/UserUiUx';

export default function DarkMoodSwitch() {

  const{theme,setTheme} = useContext(UserContextUiUx)
  
  
  function handleTheme() {
    if(theme === "dark"){
      setTheme('light')
    }
    else if(theme === 'light'){
      setTheme("dark")
    }
  }
  localStorage.setItem('themeMood' , theme )
  return (
    <div>
        <head>
          <script src="https://code.iconify.design/1/1.0.4/iconify.min.js">   </script>
        </head>

        <label>
          <input className='toggle-checkbox' type='checkbox' onClick={handleTheme}></input>
          <div className='toggle-slot'>
            <div className='sun-icon-wrapper'>
              <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false">
                <Icon icon="feather-sun" className='iconify sun-icon' />
              </div>
            </div>
            <div className='toggle-button'></div>
            <div className='moon-icon-wrapper'>
              <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false">
                <Icon icon="feather-moon" className='iconify moon-icon' />
              </div>
            </div>
            
          </div>
        </label>

    </div>
  )
}
