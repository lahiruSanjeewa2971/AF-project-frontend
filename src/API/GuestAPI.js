import React, {useState, useEffect } from 'react'
import axios from 'axios'

function GuestAPI(token){

    const [unLogged, setunLogged] = useState(false)
    const [unAdmin, setAdmin] = useState(false)

    useEffect(()=>{
        if(token){
            const getUser = async () => {
                try{
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setunLogged(true)
                    res.data.role === 1 ? setAdmin(true) : setAdmin(false)
                    console.log(res)
                }catch(err){
                    alert(err.response.data.msg)
                }
            }
                
                getUser()
        }
    },[token])

    return{
       unLogged:  [unLogged, setunLogged],
       unAdmin: [unAdmin, setAdmin]
    }

}
export default GuestAPI