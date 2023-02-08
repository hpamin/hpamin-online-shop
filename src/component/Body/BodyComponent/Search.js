import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'

export default function Search() {

    const {theme, colorText, colorLight, BgColor, colorDark, ShowSearch} = useContext(UserContextUiUx)

    const[searchApi , setSearchApi] = useState([])
    const[input , setInput] = useState('')
    const[loading , setLoading] = useState(true)

    async function SearchApi(){
        setLoading(true)
        const {data} = await axios.get(`https://dummyjson.com/products/search?q=${input}`).finally(()=> setLoading(false))
        setSearchApi(data.products)
        console.log(searchApi);
    }


    useEffect(()=>{
        if (input === "") {
            setSearchApi([])
        }
      
      const SearchProduct = setTimeout(() => {
        if(input) SearchApi()
        console.log(searchApi);
      }, 500);
      return () => clearTimeout(SearchProduct)
    
    },[input])

  return (
    <div className={`relative ${ShowSearch ? "w-4/5" : "w-2/5 " }`} >
        <div className='search flex' style={{borderColor :    theme==="light" && "#222121"}}>
            <input className='input' id='search' type='text' placeholder='Search Products'  onChange={(e)=> setInput(e.target.value)}/>
            <label htmlFor='search'>
              <Icon className='w-7 h-7 text-white' icon="ic:baseline-search" style={{color : theme==="light" && "#222121"}} />
            </label>
        </div>

        {input &&
            <div className='searchDetails' style={BgColor}>

                
                {loading &&
                <div className='w-full h-full absolute flex items-center justify-center bg-white/[0.6]'><h2 className='text-2xl' style={colorDark}>Loading...</h2></div> }

                    
                {searchApi.length===0 &&  <div className='w-full h-full absolute flex items-center justify-center'><h2 style={colorDark}>'{input}' Not found </h2></div> }


                {searchApi.map((item)=>

                <NavLink to={`/Product/${item.id}`}>
                    <div className='SearchProduct flex items-center my-5'>
                        <img className='searchImg' src={item.thumbnail} />
                        <div className='ml-5'>
                            <h2 style={colorDark}>{item.category}</h2>
                            <h2 className='font-bold' style={colorDark}>{item.title}</h2>
                            <h2 style={colorDark}>brand: {item.brand}</h2>
                        </div>

                    </div>
                    <div className='border-b-2 border-violet-800 px-3'> </div>
                </NavLink>

                )}
            </div>
        }

        
    </div>
  )
}
