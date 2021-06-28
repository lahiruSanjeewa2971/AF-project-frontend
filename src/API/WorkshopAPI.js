import {useState, useEffect} from 'react'
import axios from 'axios'

function WorkshopAPI(){
    const [workshopsN, setWorkshopsN] = useState([])

    const getWorkshop = async () =>{
        
        const res = await axios.get('/api/workshopsN')
        setWorkshopsN(res.data.workshopsN)
    }

    useEffect(() =>{
        getWorkshop()
    },[])
    return{
        workshopsN: [workshopsN, setWorkshopsN ]
    }
}
export default WorkshopAPI

