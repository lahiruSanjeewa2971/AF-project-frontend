import React from 'react';
import '../../CSSs/admin.css';
import { Grid } from '@material-ui/core';
import AdminViewMessages from './Messages/AdminViewMessages';

export default function AdminDashBoard(){
      
  
       
    return(
      <div>
        <Grid container xs={12} >
          <Grid item xs={6}>
            <AdminViewMessages/>
          </Grid>
          <Grid item xs={6}>
            <a href="/conference" className='btn btn-outline-dark m-5'> Conference</a>
            <a href="/viewworkshops" className='btn btn-outline-dark m-5'> Workshps</a>
            <a href="/adminviewAllUsers" className='btn btn-outline-dark m-5'> Users</a>
            <Grid container>
            Researchers
            </Grid>
          </Grid>
        </Grid>
         

      </div>
     
    )


}