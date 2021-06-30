import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router'


function ConferenceView(){
    const params = useParams();

    const[title, settitle]=useState('');
    const[date, setdate]=useState('');
    const[location, setlocation] = useState('');
    const[description,setdescription]=useState('');
    const[note,setnote]=useState('');

    useEffect(()=>{
        axios.post("http://localhost:8070/conferences/getconference", {conferenceid: params.conferenceid}).then(res=>{
            console.log(res.data[0])
            const postdata = res.data[0]
            settitle(postdata.title)
            setdate(postdata.date)
            setlocation(postdata.location)
            setdescription(postdata.description)
            setnote(postdata.note)
        }).catch(err=>{
            console.log(err)
        })
            
    }, [])
   
    return(
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h1 className='m-3'>Conference View</h1>
                <div>
                    <input type="text" placeholder="title" className= "form-control"
                    value={title} onChange={(e)=>{settitle(e.target.value)}}
                    />
                    <input type="text" placeholder="Date" className= "form-control"
                    value={date} onChange={(e)=>{setdate(e.target.value)}}
                    />
                <input type="text" placeholder="Location" className= "form-control"
                    value={location} onChange={(e)=>{setlocation(e.target.value)}}
                    />
                    <textarea cols="30" rows="10" placeholder="Description" className= "form-control"
                    value={description} onChange={(e)=>{setdescription(e.target.value)}}
                    />
                     <textarea cols="30" rows="2" placeholder="Note" className= "form-control"
                    value={note} onChange={(e)=>{setnote(e.target.value)}}
                    />

                    <button className='btn btn-success float-left' href = "/conference">Accept or Reject</button>
 
                </div>
            </div>
        </div>
    )
}
export default ConferenceView