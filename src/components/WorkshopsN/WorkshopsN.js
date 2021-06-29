import React, {useContext} from 'react'
import {State} from '../State'
import WorkshopItem from '../Item/WorkshopItem'

function WorkshopsN(){
    const state = useContext(State)
    const [workshopsN] = state.workshopAPI.workshopsN
    const [isConductor] = state.guestAPI.isConductor
    

   
    return (
        <div className="workshopsN">
          {
              workshopsN.map(workshops => {
                  return <WorkshopItem key={workshops._id} workshops={workshops} 
                  isConductor={isConductor}/>
              })
          }
        </div>
    )
}

export default WorkshopsN