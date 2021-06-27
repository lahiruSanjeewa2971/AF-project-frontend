import React, { useEffect, useState } from 'react'
import axios from 'axios'

function testDetails(){
    // const res = axios.get('/api/workshopsN')
    // console.log(res)

    const[testworkDetails, settestworkDetails] = useState([])

    const getTestDetails = async () =>{
            // const res = await axios.get('http://localhost:8070/api/workshopsN')
            const res = await axios.get('/api/workshopsN')
            console.log(res)
    }

    useEffect(() => {
        getTestDetails()
    },[])
    
    
    // return (
        
    //     <div>Test
    //         testworkDetails: [testworkDetails, settestworkDetails]
    //     </div>
        
    // )
    return{
        testworkDetails : [testworkDetails, settestworkDetails]
    }
   
}
export default testDetails
