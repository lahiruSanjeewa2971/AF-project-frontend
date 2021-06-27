import React from 'react'
import {Link} from 'react-router-dom'

function BtnRender({workshops}){
    return(
        <div className="row_btn">
            <Link id="btn_view" to={`/detail/${workshops._id}`}>View</Link>
        </div>
    )
}