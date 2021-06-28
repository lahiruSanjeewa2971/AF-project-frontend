import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditConference(){
   const params = useParams();

   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");
   const [location, setLocation] = useState("");
   const [description, setDescription] = useState("");
   const [note, setNote] = useState("");
   const [status, setStatus] = useState("");

   useEffect(() => {
       axios.post("http://localhost:8070/conference/getSingleConference", {conferenceid: params.conferenceid}).then(res => {
           const postdata = res.data[0];
           setTitle(postdata.title);
           setDate(postdata.date);
           setLocation(postdata.location);
           setDescription(postdata.description);
           setNote(postdata.note);
           setStatus(postdata.status);
       }).catch((err) => {
           console.log('error is ', err);
       })
   }, [])

    return(
        <div>
            {params.conferenceid}
            <form>
                <div className="container">
                    <input type="test" className="form-control" id="title" value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}/><br/>
                </div>
            </form>
        </div>
    )
}
export default EditConference