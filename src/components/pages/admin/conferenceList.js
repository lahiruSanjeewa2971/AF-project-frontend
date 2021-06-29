import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ConferenceView from './ConferenceView';
 function ConferenceList(){
    const [confData, setConfData] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8070/conferences/displayconferences").then((res) => {
            setConfData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

    const Listconferences = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.description}</td>
                {/*<td onClick={e=>navigateConferenceViewPage(e, props.record._id)}  className='btn btn-default btn-sm btn-warning'>View</td>
                <td><a href="" className='btn btn-default btn-sm btn-success'>Accept </a></td>
        <td><a href="" className='btn btn-default btn-sm btn-danger'>Reject </a></td>*/}
                <td>
                    {/**onClick={e=>navigateConferenceViewPage(e, props.record._id)} */}
                    {/*<a className='btn btn-default btn-sm btn-warning' onClick={e=>navigateConferenceViewPage(e, props.record._id)}>View</a>*/}
                    <Link to={`/singleConference/${props.record.conferenceid}`}><li className='btn btn-default btn-sm btn-warning'>Edit conf</li></Link>
                    <a href="" className='btn btn-default btn-sm btn-success'>Accept </a>
                    <a href="" className='btn btn-default btn-sm btn-danger'>Reject </a>
                </td>
            </tr>
        )
    }
   
    function navigateConferenceViewPage(e, conferenceid){
        window.location = `conference/${conferenceid}`
    }
    
    const ConferenceList = confData.map((conference)=>{
        return (
                <Listconferences record={conference}/>                        
        );
    });
   

    return (
        <div className="container">
            <div>
                <h2>Conferences</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Options</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {ConferenceList}                
                    </tbody>
                </table>
            </div>           
        </div>
    
    )

}
export default ConferenceList;