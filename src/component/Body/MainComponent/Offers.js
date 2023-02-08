import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from '../../WidthScreen';
import useProduct from '../../hooks/useProduct';

export default function Offers() {

    const {theme, colorText, colorLight, BgColor, colorDark} = useContext(UserContextUiUx)

    const [offers] = useProduct("products?limit=8")
    
    function OffersPrice(item) {
        if (item > 1000) {
            const price =  item - (item * (0.3))
            return Math.floor(price)
        }else if (item >= 500 & item < 1000) {
            const price =  item - (item * (0.3))
            return Math.floor(price)
        }else if (item < 500) {
            const price =  item - (item * (0.3))
            return Math.floor(price)
        }
    }

    const {width} = useWindowDimensions()


  return (
    <section className='w-full flex items-end'   style={{...BgColor, height: '70vh' }}>

            <div className={`AmazingOffers  py-4 ${width > 768 ? "flex flex-row-reverse" : "mx-auto"} `}> 

                <div className={` flex items-center justify-center text-center ${width > 768 ? "w-4/12 text-5xl" : 'w-full mb-5'}`}>
                    <h2 className={`w-full flex justify-center text-white ${width > 768 ? "text-5xl" : 'text-3xl text-center'}`}> Amazing offers </h2>
                </div>

                <div className='w-10/12 h-full flex gap-12 items-center'>
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
                        modules={[Pagination, Autoplay ]}

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
                        {offers?.products.map((item)=>
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
                                                <h3 className='line-through' style={colorLight}> {item.price}$  </h3>
                                                <h3 style={colorLight}>  to </h3>
                                                <h3 className='font-bold' style={colorLight}> {OffersPrice(item.price)} </h3>    
                                            </div>

                                        </div>

                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

            </div>


        </section>
  )
}
