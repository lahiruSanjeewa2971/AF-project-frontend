import React, {useContext, useState} from 'react'
import {State} from '../State'
import axios from 'axios'
import ResearcheItem from '../Item/ResearcheItem'

function Researcher(){
    const state = useContext(State)
    const [researcher, setResearcher] = state.researcherAPI.researcher
    const [researche, setResearche] = useState('')
    const [token] = state.token

    const createResearche = async e =>{
      e.preventDefault()
      try{
          const res = await axios.post('/api/researcher', {name: researche}, {
            headers: {Authorization: token}
          })

      


          console.log(res)
      }catch(err){
        alert(err.response.data.msg)
      }
    }
   
    return (
        <div className="researcher">
          
            <form onSubmit={createResearche}> 
              <label htmlFor="researche">Researcher</label>
              <input type="text" name="researche" value={researche} value={researche} required
              onChange={e => setResearche(e.target.value)}/>

              <button type="submit">Save</button>
            </form>

            <div className="col">
              {
                researcher.map(researche => (
                  <div className="row" key={researche._id}>
                    <p>{researche.name}</p>
                    <div>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>

                  </div>
                ))
              }
            </div>

        </div>
    )
}

export default Researcher