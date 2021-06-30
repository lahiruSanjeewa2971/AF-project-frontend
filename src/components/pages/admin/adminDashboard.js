import React from 'react';
import '../../CSSs/admin.css';
import { Grid } from '@material-ui/core';
import AdminViewMessages from './Messages/AdminViewMessages';
import AdminViewAllResearchers from './Researchers/AdminViewAllResearchers';

export default function AdminDashBoard(){
      
  
       
    return(
      <div>
        <h1>Admin Dashboard</h1>
        <Grid container xs={12} >
          <Grid item xs={4}>
            <AdminViewMessages/>
          </Grid>
          <Grid item xs={8}>
            <div >
              <a href="/conference" className='btn btn-outline-dark m-5' style={{width:'40%', alignItems:'center'}}> Conference</a><br/>
              <a href="/viewworkshops" className='btn btn-outline-dark m-5' style={{width:'40%', alignItems:'center'}}> Workshops</a>
              <a href="/adminviewAllUsers" className='btn btn-outline-dark m-5' style={{width:'40%', alignItems:'center'}}> Users</a>
            </div>
            <Grid container>
              <AdminViewAllResearchers/>
            </Grid>
          </Grid>
        </Grid>
         

      </div>
     
    )


}