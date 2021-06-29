import React, { useState, useEffect} from 'react';
import axios from 'axios';

function AdminViewAllUsers(){
    const [postdata, setPostdata] = useState([]);

    //take data from db
    useEffect(() => {
        axios.get("http://localhost:8070/tempuser/displayusers").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    //set sorted data by single instant
    const ListAllWorkshops = (props)=>{
        return(
            <tr>
                <td>{props.record.role}</td>
                <td>{props.record.email}</td>
                <td>{props.record.mobile}</td>
                <td>{props.record.name}</td>
                <td>
                    <a href={`/editSingleWorkshop/${props.record.workshop_id}`}>Click</a>
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
            <br/><h2 style={{fontFamily:'Gabriola'}}>AllRegistered Users.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Name</th>
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
export default AdminViewAllUsers;