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
        axios.post("http://localhost:8070/workshop/getworkshop", {workshopid: params.workshopid}).then(res=>{
            const postData = res.data[0];

            setName(postData.name);
            setTitle(postData.title);
            setPlace(postData.place);
            setGuestSpeaker(postData.guestSpeaker);
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
                    <input type="text" className="form-control" id="name" placeholder="Item name" value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                    }}/><br/>
                </div>
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
                <div className="container">
                    <input type="text" className="form-control" id="guestSpeaker" placeholder="Item name" value={guestSpeaker}
                        onChange={(e)=>{
                            setGuestSpeaker(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="status" placeholder="Item name" value={status}
                        onChange={(e)=>{
                            setSatus(e.target.value);
                    }}/><br/>
                    <button className="btn btn-outline-primary">Update Status After the check</button>
                </div>
            </form>
        </div>
    )
}
export default EditWorkshop;