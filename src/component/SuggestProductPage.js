import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom';
import { UserContextUiUx } from './context/UserUiUx';
import useWindowDimensions from './WidthScreen';

export default function SuggestProductPage() {

  const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark} = useContext(UserContextUiUx)

  const [Suggests , setSuggests ] = useState([])

  const{width} = useWindowDimensions()

  async function SuggestProductsApi() {
      const{data} = await axios.get(`https://dummyjson.com/products?limit=${Math.floor(Math.random() * 7 + 3)}`)
      setSuggests(data.products)
      console.log(data.products);
  }

  useEffect(()=>{
    SuggestProductsApi('')
  },[])

  return (
    <section className='w-full flex flex-col justify-end items-center ' style={{...BgColor,height: width > 769 ? "60vh" : "calc(70vh + 4rem)"}}>
      
        <div className='w-full'>
            <h3 className={`${width > 730 ? "text-3xl my-10" : "text-xl my-5" }`} style={colorDark}>Suggest for you</h3>
        </div>

      <div className='w-10/12 flex gap-12 items-center'>

        <Swiper 
            spaceBetween={45}
            pagination={{
            clickable:true
            }} 
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
            }}
            modules={[Pagination]}
              breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  },
                  769: {
                    slidesPerView: 4,
                  }
              }}
              className="mySwiper">

            {Suggests.map((item)=>
              <SwiperSlide>
                  <NavLink to={`/Product/${item.id}`} >

                      <div className='glass flex flex-col items-center hover:shadow-2xl duration-150 w-full h-96 p-5 mb-3'>
                          <div className='' style={{height: "40%"}}>
                              <img className='w-56 rounded-lg' src={item.thumbnail} />
                          </div>
                          <div className='flex flex-col justify-center items-center gap-2 mt-3' 
                          style={{height: "60%"}}>
                              <h3 style={colorDark}> {item.category} </h3>
                              <h3 style={colorDark}> {item.brand} </h3>
                              <h3 className='font-bold' style={colorDark}> {item.title} </h3>
                              <div className='flex gap-5'>  
                                  <h3 style={colorDark}> {item.price}$  </h3>
                              </div>
                          </div>
                      </div>
                      
                  </NavLink>
              </SwiperSlide>
            )}

        </Swiper>
      </div>

    </section>
  )
}
