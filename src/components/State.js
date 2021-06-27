import React, {createContext, useState} from 'react'
import WorkshopAPI from '../API/WorkshopAPI'
import ResearcherAPI from '../API/ResearcherAPI'

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