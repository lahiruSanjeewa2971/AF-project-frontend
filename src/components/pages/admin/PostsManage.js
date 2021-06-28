import React , { useState , useEffect }from 'react';
import '../../CSSs/admin.css';

import axios from 'axios'


export default function PostsManage(){
    const[postsdata, setpostsdata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8070/conferences').then(res=>{
            console.log(res)
            setpostsdata(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    const postlist = postsdata.map(post=>{
        return(
            <div className='row justify-content-center'>
                
                <postdata></postdata>
            </div>
        )
    })
    
       
    return(
      <div className="container">
          <table class = "table table-striped">
              <thead>
                  <th>Name</th>
                  <th>View</th>
                  <th>Accept</th>
                  <th>Reject</th>
              </thead>
              <tbody>
                  <tr className="success">
                    <td>{postlist}</td>  
                    <td><button>View</button></td>
                    <td><button>Accept</button></td>
                    <td><button>Reject</button></td>
                  </tr>
              </tbody>
          </table>
        
      </div>
     
    )


}