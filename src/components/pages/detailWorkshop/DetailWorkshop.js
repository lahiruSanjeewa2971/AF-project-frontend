import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {State} from '../../State'
import WorkshopItem from '../../Item/WorkshopItem'

function DetailWorkshop(){
    const params = useParams()
    const state = useContext(State)
    const [workshopsN] = state.workshopAPI.workshopsN
    const [detailWorkshop, setDetailWorkshop] = useState([])

    useEffect(() =>{
        
        if(params.id){
            workshopsN.forEach(workshops =>{
                if(workshops._id === params.id) setDetailWorkshop(workshops)
            })
        }

    },[params.id,workshopsN])

    if(detailWorkshop.length === 0) return null;

    return(
        <>
        <div className="detail">
            <img src={detailWorkshop.images.result} alt="" />
            <div className="box-detail">
            <div className="row">
                <h2>{detailWorkshop.title}</h2>
                </div>
                <p>Description : {detailWorkshop.description}</p>
                <p>Time : {detailWorkshop.time}</p>
                <p>Date : {detailWorkshop.date}</p>
                <p>Category : {detailWorkshop.category}</p>

                <Link to="#" className="attend">Attend Now</Link>
            </div>
        </div>

        <div>
            <h2>Other Workshops</h2>
            <div className="workshopsN">
                {
                    workshopsN.map(workshops =>{
                        return workshops.category === detailWorkshop.category
                            ? <WorkshopItem key={workshops._id} workshops={workshops}/> : null
                    })
                }
            </div>
        </div>
        </>
    )
}

export default DetailWorkshop