import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import useProduct from '../../hooks/useProduct'
import useWindowDimensions from '../../WidthScreen'

export default function Category() {
  
    const {theme, colorText, colorLight, BgColor, colorDark} = useContext(UserContextUiUx)
    const {width} = useWindowDimensions()
    
    const [CategoryName] = useProduct("categories")

    return (
    <section>
        <div className={`${width > 768 ? "px-10" : "px-2"}`} style={{...BgColor, height:'fit-contact'}} >
            <div className='w-full flex justify-center'>
                <h3 className={` items-start text-center  ${width > 730 ? "text-5xl my-10" : "text-xl my-5" }`} style={colorDark}>- - Some categories of hpamin - -</h3>
            </div>

            <div className='CategoryBoxs'>
            {CategoryName?.products.map((item)=>
                <div className='CategoryBox'>
                    <NavLink to={`/CatagoriesList/${item}`} className={`genre ${width > 768 ? "w-56 h-56" : "w-28 h-28"} `} style={{backgroundImage:` linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)),url(https://picsum.photos/200/300?random=${Math.random()})`}}>
                        <h3 className={`text-white ${width > 768 ? "text-2xl" : "text-sm" }`}> {item} </h3>
                    </NavLink>
                </div> 
                )
            }
            </div>

        </div>
    </section>
  )
}
