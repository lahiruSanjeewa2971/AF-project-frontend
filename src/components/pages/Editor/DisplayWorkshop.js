import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import { Link } from '@material-ui/core';

function DisplayWorkshop(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshop/").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

    //take un_sorted data from db
    /*useEffect(() => {
        //axios.get("http://localhost:8070/workshop/displayall").then((res) => {
        axios.get("http://localhost:8070/workshop/").then((res) => {
            setPostAllData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []); */

    //set sorted data by single instant
    const Sortedworkshop = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.time}</td>
                <td>{props.record.date}</td>
                <td>{props.record.description}</td>
                <td>{props.record.category}</td>
                <td>{props.record.status}</td>
                <td>
                    <a href={`/edititem/${props.record.workshop_id}`}>Click</a>
                </td>
            </tr>
        )
    }
    //set not sorted data by single instant
    /*const Allworkshop = (props)=>{
        return(
            <tr>
                <td>{props.record.name}</td>
                <td>{props.record.title}</td>
                <td>{props.record.place}</td>
                <td>{props.record.guestSpeaker}</td>
                <td>{props.record.status}</td>
            </tr>
        )
    }   */

    //maps sorted data
    const workshoList = postData.map((post)=>{
        return (
            <Sortedworkshop record={post}/>
        );
    });
    //maps un-sorted data
    //const notSortedworkshopList = postAllData.map((post)=>{
    //    return (
    //        <Allworkshop record={post}/>
    //    );
    //});


    return (
        <div>
            <div>
            <br/><h2 style={{fontFamily:'Gabriola'}}>New Workshop Details.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workshoList}            
                    </tbody>
                </table>
            </div>

            {/*<div style={{marginTop:'210px'}}>
                <h2>All</h2>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Place</th>
                            <th>Guest Speaker</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notSortedworkshopList}            
                    </tbody>
                </table>
            </div>*/}
        </div>
    )
}
export default DisplayWorkshop;