import React, { useContext, useEffect, useState } from 'react'
import { UserContextUiUx } from '../../context/UserUiUx'
import axios from 'axios';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from '../../WidthScreen';
import { NavLink } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

export default function SuggestProducts() {

  const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark} = useContext(UserContextUiUx)

  const{width} = useWindowDimensions()
  
  const [Suggests] = useProduct("products?limit=7")

  return (
    <section className='w-full flex flex-col justify-center items-center ' style={{...BgColor,height: width > 769 ? "60vh" : "calc(70vh + 4rem)"}}>
      
        <div className='w-full flex justify-center'>
            <h3 className={` items-start text-center  ${width > 730 ? "text-5xl my-10" : "text-xl my-5" }`} style={colorDark}>- - Suggest Products - -</h3>
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

            {Suggests?.products.map((item)=>
              <SwiperSlide>
                  <NavLink to={`/Product/${item.id}`} >
                      <div className='glass flex flex-col items-center hover:shadow-2xl duration-150 w-full h-96 p-5 mb-3'>
                          <div className='' style={{height: "40%"}}>
                              <img className='w-56 rounded-lg' src={item.thumbnail} />
                          </div>
                          <div className='flex flex-col justify-center items-center gap-2 mt-3' 
                          style={{height: "60%"}}>
                              <h3 style={colorLight}> {item.category} </h3>
                              <h3 style={colorLight}> {item.brand} </h3>
                              <h3 className='font-bold' style={colorLight}> {item.title} </h3>
                              <div className='flex gap-5'>  
                                  <h3 style={colorLight}> {item.price}$  </h3>
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
