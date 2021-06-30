import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function AdminViewAllUsers(){
    const [postdata, setPostdata] = useState([]);
    const history = useHistory()
    //take data from db
    useEffect(() => {
        axios.get("http://localhost:8070/tempuser/displayusers").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    //set sorted data by single instant
    const ListAllUsers = (props)=>{
        return(
            <TableRow>
                <TableCell>{props.record.role}</TableCell>
                <TableCell>{props.record.email}</TableCell>
                <TableCell>{props.record.mobile}</TableCell>
                <TableCell>{props.record.name}</TableCell>
                <TableCell>{props.record._id}</TableCell>
                <TableCell>
                    <IconButton aria-label="delete" onClick={()=>{deleteuser(props.record._id)}}>

                            <DeleteIcon color="secondary"/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }
    function deleteuser(userid){
        axios.post('http://localhost:8070/tempuser/deleteuser', {userid}).then(res=>{
            console.log(userid);
            alert(res.data)
            history.go(0)
        }).catch(err=>{
            console.log(err)
        })

    }
    const userList = postdata.map((post) => {
        return (
            <ListAllUsers record = {post}/>
        )
    })

    return (
        <div>
            <div className="container">
            <br/><h2 style={{fontFamily:'Gabriola'}}>AllRegistered Users.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Role</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList}
                    </TableBody>
                </table>
            </div>
        </div>
    )
}
export default AdminViewAllUsers;