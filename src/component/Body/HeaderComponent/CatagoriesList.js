import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import useWindowDimensions from '../../WidthScreen'

export default function CatagoriesList() {
  
    const [ Categories , setCategories ] = useState([])
    const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark} = useContext(UserContextUiUx)

    const {width} = useWindowDimensions()
    
    async function CategoryApi() {
        const {data} = await axios.get('https://dummyjson.com/products/categories')
        setCategories(data)
        console.log(data);
    }
    useEffect(()=>{
        CategoryApi()
    },[])

    return (
    <section className='w-full h-full min-h-screen pt-20 px-5' style={BgColor}>

        <div className='w-full h-full flex flex-wrap items-center justify-center gap-5'>

        {Categories.map((item)=>
        <NavLink to={`/CatagoriesList/${item}`}>
            <div className={`rounded-xl flex justify-center items-end pb-3 duration-150 hover:shadow-inner ${width > 768 ? "w-48 h-48" : "w-28 h-28"}`} style={{backgroundImage:` linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)),url(https://picsum.photos/200/300?random=${Math.random()})`}}>
                <h3 className={`text-white ${width > 768 ? "text-2xl" : "text-sm" }`}> {item} </h3>
            </div>
        </NavLink>
        )}
        </div>
    </section>
  )
}
