import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import useWindowDimensions from '../../WidthScreen'

export default function NavBottom() {

    const {colorDark, BgColorNav} = useContext(UserContextUiUx)
    const {width} = useWindowDimensions()

    return (

    <section className='NavBottom ' style={BgColorNav}>

        <div className='w-full h-full flex items-center justify-around flex-row-reverse py-4'>

            <div style={colorDark}>
                <NavLink to="/" className='flex flex-col items-center justify-center'>
                    <Icon className='text-3xl' icon="material-symbols:home-outline-rounded" />
                    <h2 className='text-sm'>Home</h2>
                </NavLink>
            </div>

            <div style={colorDark}>
                <NavLink className='flex flex-col items-center justify-center'>
                    <Icon className='text-3xl' icon="heroicons:shopping-cart" />
                    <h2 className='text-sm'>Cart</h2>
                </NavLink>
            </div>

            <div style={colorDark}>
                <NavLink to="/CatagoriesList" className='flex flex-col items-center justify-center'>
                    <Icon className='text-3xl' icon="mdi:select-group" />
                    <h2 className='text-sm'>Group</h2>
                </NavLink>
            </div>

            <div style={colorDark}>
                <NavLink to='/Profile' className='flex flex-col items-center justify-center'>
                    <Icon className='text-3xl' icon="healthicons:ui-user-profile" />
                    <h2 className='text-sm'>Profile</h2>
                </NavLink>
            </div>

        </div>        

    </section>
  )
}
