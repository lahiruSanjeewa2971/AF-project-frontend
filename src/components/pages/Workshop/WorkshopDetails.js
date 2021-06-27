import React, {useContext} from 'react'
import {State} from '../../State'
import WorkshopItem from '../../Item/WorkshopItem'

function WorkshopDetails(){
    const state = useContext(State)
    const [workshopDetails] = state.workshopAPI.workshopDetails
    

   
    return (
        <div className="workshopDetails">
          {
              workshopDetails.map(workshopDetail => {
                  return <WorkshopItem key={workshopDetail._id}/>
              })
          }
        </div>
    )
}

export default WorkshopDetails