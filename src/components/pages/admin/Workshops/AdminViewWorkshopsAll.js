import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function AdminViewWorkshopsAll(){
    const [postdata, setPostdata] = useState([]);
    const history = useHistory();

    //take data from db
    useEffect(() => {
        axios.get("http://localhost:8070/adminDashboardViewWorkshops/displayAllWorkshopsindb").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    
    function deleteWorkshop(workshop_id){
        axios.post("http://localhost:8070/adminDashboardViewWorkshops/deleteworkshop", {workshop_id: workshop_id}).then(res=>{
            alert(res.data)
            history.go(0)
        }).catch(err=>{
            console.log(err)
        })

    }
    //set sorted data by single instant
    const ListAllWorkshops = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.time}</td>
                <td>{props.record.date}</td>
                <td>{props.record.description}</td>
                <td>{props.record.category}</td>
                <td>{props.record.status}</td>
                <td>
                <button className='btn btn-danger' onClick={()=>{deleteWorkshop(props.record.workshop_id)}}>Delete</button>
                </td>
            </tr>
        )
    }
    
    const workshopList = postdata.map((post) => {
        return (
            <ListAllWorkshops record = {post}/>
        )
    })

    return (
        <div>
            <div>
            <br/><h2 style={{fontFamily:'Gabriola'}}>All Workshop Details.</h2><br/>
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
                        {workshopList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AdminViewWorkshopsAll;