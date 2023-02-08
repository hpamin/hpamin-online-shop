import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import useWindowDimensions from '../../WidthScreen'

export default function Options() {

    const {theme, colorText, colorLight, BgColor, colorDark} = useContext(UserContextUiUx)

    const list = [
        {link:'smartphones' ,category: 'phone' , background: "bg-phone"},
        {link:'womens-shoes' ,category: 'Shoes' , background: "bg-Shoes"},
        {link:'sunglasses' ,category: 'sunglasses' , background: "bg-sunglasses"},
        {link:'laptops' ,category: 'laptop' , background: "bg-laptop"},
    ]

    const {width} = useWindowDimensions()

  return (
    <section className='w-full flex flex-col justify-between items-center' style={{minHeight:'60vh', maxHeight:'fit-contact', ...BgColor}}>

        <h3 className={` items-start  ${width > 730 ? "text-6xl my-10" : "text-2xl mt-5" }`} style={colorDark}>- - Best selling category - - </h3>

        <div className={`w-full h-full flex justify-evenly flex-wrap gap-5 ${width < 768 && 'my-10' } `}>

            {list.map(({background, category, link})=>
                
                <div className={`${background} rounded-xl w-72 h-72 bg-center bg-contain bg-no-repeat flex items-start justify-end flex-col gap-5 p-4 `} >
                    <h3 className='font-mono text-white' > see the<span className='font-bold'> {category} </span> with 
                    <span className='font-bold ml-2'>{background==="bg-phone" ? "10%" : background==="bg-Shoes" ? "40%" : background==="bg-laptop" ? "5%" : "25%" }</span> </h3>
                    <NavLink to={`${link}`} className='btn flex items-center justify-center' style={{color:'white'}}> See More </NavLink>
                </div>
                
            )}

        </div>

    </section>
  )
}
