import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useProduct(Url, Product_id) {

    const [dataApi , setDataApi] = useState(null)
    
    async function loadData() {
        const {data} = await axios.get(`https://dummyjson.com/${Url}`)
        setDataApi(data)
    }

    useEffect(()=>{
        loadData()
    },[Url, Product_id])

    return [dataApi]
}
