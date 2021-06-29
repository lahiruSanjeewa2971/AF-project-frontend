import React, {createContext, useState, useEffect} from 'react'
import WorkshopAPI from '../API/WorkshopAPI'
import ResearcherAPI from '../API/ResearcherAPI'
import axios from 'axios'
import GuestAPI from '../API/GuestAPI'

export const State = createContext()

export const DataProvider = ({children}) =>{

    
    const [token, setToken] = useState(false)

    const refreshToken = async () =>{
        const res = await axios.get('/user/refresh_token')

        setToken(res.data.accesstoken)
    }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])

    const state = {
        token: [token,setToken],
        workshopAPI: WorkshopAPI(),
        researcherAPI: ResearcherAPI(),
        guestAPI: GuestAPI(token)
        

    }

  
    return(
        
        <State.Provider value={state}>
            {children}
        </State.Provider>

        
        
        
    )

 
   
}