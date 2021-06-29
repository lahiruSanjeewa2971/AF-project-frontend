import {useState, useEffect} from 'react'
import axios from 'axios'

function ResearcherAPI(){
    const [researcher, setResearcher] = useState([])

    const getResearcher = async () =>{
        
        const res = await axios.get('/api/researcher')
        setResearcher(res.data.researcher)
    }

    useEffect(() =>{
        getResearcher()
    },[])
    return{
        researcher: [researcher, setResearcher]
    }
}
export default ResearcherAPI