import {useState, useEffect} from 'react'
import axios from 'axios'

function ResearcherAPI(token){
    const [researcher, setResearcher] = useState([])

   

    useEffect(() =>{
        const getResearcher = async () =>{
        
            const res = await axios.get('/api/researcher')
            setResearcher(res.data)
        }

        getResearcher()

    },[])
    return{
        researcher: [researcher, setResearcher]
    }
}
export default ResearcherAPI