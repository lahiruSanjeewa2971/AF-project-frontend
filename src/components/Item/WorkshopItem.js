import React  from 'react'
import {Link} from 'react-router-dom'

function WorkshopItem({workshops}){
  
    return (
       
       
        
        <div className="workshops_card">
        
            {/* //check url vs result while inserting */}
            <img src={workshops.images.result} alt=""/>
            
            <div className="workshops_box">
                <h2 title={workshops.title}>{workshops.title}</h2>
                <p>Description : {workshops.description}</p>
                <p>Time : {workshops.time}</p>
                <p>Date : {workshops.date}</p>
                <p>Category : {workshops.category}</p>
            </div>

            <div className="row_btn">
                <Link id="btn_view" to={`/detail/${workshops._id}`}>View</Link>
            </div>

            
        </div>
        
        
        
        
    )
}
export default WorkshopItem