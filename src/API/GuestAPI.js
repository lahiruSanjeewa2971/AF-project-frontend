import React, {useState, useEffect } from 'react'
import axios from 'axios'

function GuestAPI(token){

    const [unLogged, setunLogged] = useState(false)
    const [isAttendee, setIsAttendee] = useState(false)
    const [isResearcher, setIsResearcher] = useState(false)
    const [isConductor, setIsConductor] = useState(false)
    const [cart, setCart] = useState([])
    

    useEffect(()=>{
        if(token){
            const getUser = async () => {
                try{
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setunLogged(true)
                    res.data.role === 0 ? setIsAttendee(true) : setIsAttendee(false) 
                    res.data.role === 1 ? setIsResearcher(true) : setIsResearcher(false) 
                    res.data.role === 2 ? setIsConductor(true) : setIsConductor(false)
                    
                }catch(err){
                    alert(err.response.data.msg)
                }
            }
                
                getUser()
        }
    },[token])

    const addPay = async (researche) => {
        if(!isResearcher) return alert("Please login as Researcher to continue")

        const check = cart.every(item =>{
            return item._id !== researche._id
        })

        if(check){
            setCart([...cart, {...researche, quantity: 1}])
        }else{
            alert("Added to cart!")
        }
    }

    return{
       unLogged:  [unLogged, setunLogged],
       isAttendee: [isAttendee, setIsAttendee],
       isResearcher: [isResearcher, setIsResearcher],
       isConductor: [isConductor, setIsConductor],
       cart: [cart, setCart],
       addPay: addPay
    }

}
export default GuestAPI