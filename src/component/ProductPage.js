import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserContextUiUx } from './context/UserUiUx'
import useWindowDimensions from './WidthScreen';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom';
import SuggestProductPage from './SuggestProductPage';
import { Icon } from '@iconify/react';
import useProduct from './hooks/useProduct';
import { UserContext } from './context/UserProvider';
import { toast } from 'react-toastify';

export default function ProductPage() {

    const {Product_id} = useParams()
    
    const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark} = useContext(UserContextUiUx)
    const {user, stockNum , setStockNum} = useContext(UserContext)
    
    const [Add , setAdd] = useState([])
    const [IfLogin , setIfLogin] = useState(false)

    const [productDetail] = useProduct(`products/${Product_id}`, Product_id)

    const [productImg] = useProduct(`products/${Product_id}`, Product_id)

    const {width} = useWindowDimensions()

    
    function handleAdd() {
        if (user) {
            setIfLogin(true)
            setStockNum(1)
        }else{
            toast.error("Please log in first!!")
        }
    }    

    function StockAdd(props) {
        switch (props) {
            case "+":
                if (stockNum < productDetail?.stock) {
                    setStockNum(stockNum + 1)  
                }else{
                    toast.error("Too much")
                }
                break;

            case "-":
                 if (stockNum > 0) {
                    setStockNum(stockNum - 1)  
                }
                break

            default:
                return stockNum
                break;
        }

        if (stockNum === 0) {
            setIfLogin(false)    
        }

    }

    console.log(productDetail?.stock);
    console.log(stockNum);


  return (
    <section className={`w-full h-fit min-h-screen ${width > 768 ? "px-10" : "px-5"}`} style={BgColor}>

        <div className={`w-full h-2/6 pt-24 flex gap-10 ${width > 768 ? "flex-row-reverse " : 'flex-col-reverse items-center' } `}>

            <div className='glass h-96 p-5' style={{width: width > 768 ? 700 : "100%"}}>
                
                <div className='mb-4'>
                    <h3 className='text-5xl ' style={colorDark}> Seller </h3>
                    <h3 style={colorDark}> Hpamin </h3>
                </div>
                
                <div className='sellerDetail'>
                    <div className='flex gap-5'> 
                        <h3 style={colorDark}> Function :  </h3>
                        <h3 className='font-bold' style={{color: productDetail?.rating > 3.5 ? "#0dca0d" : productDetail?.rating < 3.5 & productDetail?.rating > 2 ? "black" : "red"}}>  
                        
                        {productDetail?.rating > 3.5 ? "Great" : productDetail?.rating < 3.5 & productDetail?.rating > 2 ? "Middle" : "Weak"} </h3>     
                    </div>
                    <div>
                        <h3 className='text-base' style={colorDark}> Rating : {productDetail?.rating} </h3>
                    </div>
                    <div className='flex gap-3'>
                        <Icon className='text-3xl' icon="healthicons:yes" style={colorDark}/>
                        <h3 className='text-xl' style={colorDark}>Warranty</h3>
                    </div>
                    <div className='flex gap-3'>
                        <Icon className='text-3xl' icon="eva:car-outline" style={colorDark}/>
                        <h3 className={`${width > 768 ? "text-xl" : "text-lg" }`} style={colorDark}>Available and ready to ship!</h3>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {IfLogin && stockNum > 0  ? 

                        <div className='flex items-center gap-2'>

                            <div className='flex justify-around items-center w-2/6 px-4 py-1 rounded-xl bg-purple-600  hover:shadow-xl  duration-200  text-white'>
                                <button className=' text-2xl hover:text-yellow-400 w-20 h-full ' onClick={ () => StockAdd("+")}> + </button>
                                    <h4 className='mx-3'> {stockNum} </h4>
                                <button className=' text-2xl hover:text-yellow-400 w-20 h-full ' onClick={ () => StockAdd("-")}> 
                                    {stockNum === 1 ?
                                        <Icon icon="mdi:bin" />
                                    :
                                        "-"
                                    }
                                </button>
                            </div>

                            <div className='w-4/6'>
                                <h4 style={colorDark}>
                                    Add to your cart
                                </h4>
                                <NavLink className='text-purple-400 hover:text-yellow-500 text-base font-mono' to='/buy'>
                                    see your cart
                                </NavLink>
                            </div>
                        </div>

                        :
                        <>
                            <h3 className='text-base' style={colorDark}> Stock : {productDetail?.stock} </h3>
                            <button className='px-4 py-1 rounded-xl bg-purple-600  hover:shadow-xl hover:scale-105 duration-200  text-white ' onClick={handleAdd}>
                                <span className='font-bold text-2xl'> {productDetail?.price}$  </span>   Add to cart 
                            </button>
                        </>
                        }
                    </div>
                    
                    
                </div>

            </div>

            <div className='w-full h-full flex flex-col gap-5'>
                <div>
                    <h2 className={`${width > 768 ? "text-5xl" : "text-2xl" }`} style={colorDark}> {productDetail?.title} </h2>
                    <h2 className={`my-1 ${width > 768 ? "text-2xl" : "text-xl" }`} style={colorDark}> {productDetail?.brand} </h2>
                </div>
                
                <div className='w-full flex items-center '>
                    <h2  className={`${width > 768 ? "text-xl" : "text-lg" }`} style={colorDark}> {productDetail?.description} </h2>
                </div>
                
            </div>

            <div className={`${width > 768 ? "w-96" : "w-full" }`}>

                <Swiper 
                    spaceBetween={45}
                    pagination={{
                    clickable:true
                    }}
                    modules={[Pagination]}
                      className="mySwiper">
                        {productImg?.images.map((item)=>
                            <SwiperSlide>
                                <img className='w-80 h-80 rounded-xl object-contain' src={`${item}`} />
                            </SwiperSlide>        
                        )}
                </Swiper>

            </div>

        </div>
        
        <div className='w-full mt-10'>

            <SuggestProductPage />

        </div>

    </section>
  )
}
