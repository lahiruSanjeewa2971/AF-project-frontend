import React,{useState} from 'react'
// import { Document, Page } from 'react-pdf';
import {Link} from 'react-router-dom'



function ResearcheItem({researche}) {
    
      
    
    return(
        
        <div className="researche_card">
     
            {/* <img src={researche.images.result} alt=""/> */}
            <iframe src={researche.images.result} ></iframe>

            <div className="researche_box">
            <h2 title={researche.title}>{researche.title}</h2>
                <p>Description : {researche.description}</p>
                <p>Contact Name : {researche.contact_name}</p>
                <p>Contact No : {researche.contact_no}</p>
                <p>Contact mail : {researche.contact_mail}</p>
            </div>

            <div className="row_btn">
                <Link id="btn_pay" to="#!">
                Pay
                </Link>
                <Link id="btn_view" to={`details/${researche._id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default ResearcheItem