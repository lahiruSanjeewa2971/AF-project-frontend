import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditWorkshop(){
    const params = useParams();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [guestSpeaker, setGuestSpeaker] = useState("");
    const [status, setSatus] = useState("");

    useEffect(()=>{
        axios.post("http://localhost:8070/workshop/getworkshop", {workshop_id: params.workshop_id}).then(res=>{
            const postData = res.data[0];

            setTitle(postData.title);
            setPlace(postData.time);
            setGuestSpeaker(postData.date);
            setSatus(postData.status);
        }).catch((err) =>{
            console.log(err)
        })
    }, [])

    /**
     * function EditItem(){

        const updatedItem = {
            servicename: servicename,
            imgurl: imgurl,
            category: category,
            price: price,
            owner: owner,
            location: location,
            serviceid: params.serviceid
        }

        axios.post("http://localhost:8070/service/update", updatedItem).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log(err)
        })
    }
     */
    function EditItem(){
        const updatedItem={
            name: name,
            title: title,
            place: place,
            guestSpeaker: guestSpeaker,
            status: status,
            workshopid: params.workshopid
        }
        axios.post("http://localhost:8070/workshop/update", updatedItem).then(res => {
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={EditItem}>
                
                <div className="container">
                    <input type="text" className="form-control" id="title" placeholder="Item name" value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="place" placeholder="Item name" value={place}
                        onChange={(e)=>{
                            setPlace(e.target.value);
                    }}/><br/>
                </div>
            </form>
        </div>
    )
}
//onClick={setData}
export default EditWorkshop;