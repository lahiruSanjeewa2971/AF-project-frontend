import React, {createContext, useState, useEffect} from 'react'
import GuestAPI from '../API/GuestAPI'
import WorkshopAPI from '../API/WorkshopAPI'
import ResearcherAPI from '../API/ResearcherAPI'
import axios from 'axios'
import Test from '../Test'

export const State = createContext()

export const DataProvider = ({children}) =>{

    
    const [token, setToken] = useState(false)

    const state = {
        token: [token,setToken],
        workshopAPI: WorkshopAPI(),
        researcherAPI: ResearcherAPI()
        

    }

  
    return(
        
        <State.Provider value={state}>
            {children}
        </State.Provider>

        
        
        
    )

 
   
}