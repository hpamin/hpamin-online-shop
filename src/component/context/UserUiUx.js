import React, { createContext, useState } from 'react'

export const UserContextUiUx = createContext()

export default function UserUiUx({children}) {
  
    const [theme , setTheme] = useState(localStorage.getItem("themeMood") ? localStorage.getItem("themeMood") : 'dark' )

    
  /**********Color Dark Mood********/
  const colorText = {color : theme==="light" ? "#222121" : "blueviolet"};
  const BgHr = {backgroundColor : theme==="light" ? "#222121" : "white"};
  const colorStroke = {WebkitTextStroke : theme==="light" ? "1px white" : "1px blueviolet"};

  const colorLight = {color : theme==="light" ? "white" : "#161616"};
  const colorDark = {color : theme==="light" ? "#161616" : "white"};
  const BgColorNav = {backgroundColor : theme==="light" ? "#C7D3D4FF" : '#2c2b2b'}
  const BgColor = {backgroundColor : theme==="light" ? "rgb(222, 232, 233)" : '#222121'}
  const borderColor = {borderColor : theme==="light" ? "blueviolet" : 'white'}


  /*********Click Slide************/
  const [ShowSlide , setShowSlide] = useState(false)


  /*********Show Search************/
  const[ShowSearch, setShowSearch] = useState(false)
  

    return (
        <UserContextUiUx.Provider value={{theme , setTheme, colorText, colorLight, colorStroke, BgColorNav, BgColor, borderColor, colorDark, ShowSlide , setShowSlide, ShowSearch, setShowSearch, BgHr}} >
            {children}
        </UserContextUiUx.Provider>
  )
}
