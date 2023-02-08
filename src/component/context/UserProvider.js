import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const UserContext = createContext()

export default function UserProvider({children}) {

  const [user, setUser] = useState(localStorage.getItem("User") ? JSON.parse( localStorage.getItem('User')) : null)
  
  const [Setting, setSetting] = useState(false)
  const [userData , setUserData] = useState({})
  const [stockNum , setStockNum] = useState(0)

  async function LoginApi({username, password}) {

    try{
      const {data} = await axios.post('https://dummyjson.com/auth/login' , {
          password,
          username,
      })
      localStorage.setItem('User', JSON.stringify( data)); 
      console.log(data);
      setUser(data)
      console.log(user);
    }catch{
      // toast.error("Wrong password/Username Or check your NetWork!")
    }
  }
  
    async function UserData() {
      const {data} = await axios.get(`https://dummyjson.com/users/${user.id}`)
      setUserData(data)
      console.log(data);
    }
    useEffect(()=>{
      UserData()
    },[])

  return (
    <UserContext.Provider value={{LoginApi, user, setUser, Setting, setSetting, userData, stockNum, setStockNum }}>
        {children}
    </UserContext.Provider>
  )
}
