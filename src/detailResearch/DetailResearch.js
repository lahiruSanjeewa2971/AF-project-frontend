import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {State} from '../../State'
import ResearcheItem from '../../src/components/Item/ResearcheItem'

function DetailResearch(){
    const params = useParams()
    const state = useContext(State)
    const [researcher] = state.workshopAPI.researcher
    const [detailResearche, setDetailResearche] = useState([])

    useEffect(() =>{
        
        if(params.id){
            researcher.forEach(researche =>{
                if(researcher._id === params.id) setDetailResearche(researche)
            })
        }

    },[params.id,researcher])

    if(detailResearche.length === 0) return null;

    return(
        <>
        <div className="detail">
            <img src={detailResearche.images.result} alt="" />
            <div className="box-detail">
            <div className="row">
                <h2>{detailResearche.title}</h2>
                </div>
                <p>Description : {detailResearche.description}</p>
               
            

                <Link to="#" className="attend">Attend Now</Link>
            </div>
        </div>

        {/* <div>
            <h2>Other Workshops</h2>
            <div className="researcher">
                {
                    researcher.map(researche =>{
                        return researche.category === detailWorkshop.category
                            ? <WorkshopItem key={workshops._id} workshops={workshops}/> : null
                    })
                }
            </div>
        </div> */}
        </>
    )
}

export default DetailResearch