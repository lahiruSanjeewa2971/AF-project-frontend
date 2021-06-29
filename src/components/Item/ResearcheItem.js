import React from 'react'

function ResearcheItem({researche}) {
    return(
        <div className="researche_card">
            {/* <img src={researche.images.result} alt=""/> */}

            <div className="researche_box">
            <h2 title={researche.title}>{researche.title}</h2>
                <p>Description : {researche.description}</p>
                <p>Contact Name : {researche.contact_name}</p>
                <p>Contact No : {researche.contact_no}</p>
                <p>Contact mail : {researche.contact_mail}</p>
            </div>
        </div>
    )
}

export default ResearcheItem