import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import { UserContextUiUx } from '../../context/UserUiUx'

export default function Personal() {
  
    const {theme, colorText, colorDark,  BgColorNav, BgColor, ShowSearch, setShowSearch, BgHr } = useContext(UserContextUiUx)
    const {userData} = useContext(UserContext)

    const [EditUsername , setEditUsername] = useState(false)

    function handelUsername() {
      if (EditUsername === true) {
        setEditUsername(false)
      }else if (EditUsername === false) {
        setEditUsername(true)
      }
    }

  return (
    <div className='w-full h-full flex flex-col items-center justify-start px-10 py-5 gap-5'>

        <div className='w-3/4  flex items-center justify-between'>
            <h2 className='text-base'> Username : </h2>

            <div className='w-96 h-10 px-2 flex items-center justify-between rounded-xl bg-white '>
              {EditUsername ?
              <input className='outline-none bg-transparent' id='username'/>
              :
              <input className='outline-none bg-transparent opacity-90' id='username' value={userData.username} disabled />
              }
              <label htmlFor='username'>
                <Icon className='text-2xl' icon="material-symbols:edit" onClick={handelUsername} />
              </label>
            </div>
        </div>
              
              <span className='w-10/12 h-1 rounded-xl' style={BgHr}></span>

        <div className='w-3/4 flex items-center justify-between'>
            <h2 className='text-base' style={colorDark}> WebSite : </h2>

            <div className='w-96 h-10 px-2 flex items-center rounded-xl bg-white '>

              <div className={`w-fit h-full flex items-center border-r-red-200 `} >
                <label className='text-base' htmlFor='Website'> https:// </label>
              </div>

              <input className='outline-none  bg-transparent pl-3' id='Website' placeholder='Enter your Website'/>
            
            </div>
        </div>

    </div>
  )
}
