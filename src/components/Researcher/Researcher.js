import React, {useContext, useState} from 'react'
import {State} from '../State'
import axios from 'axios'
import ResearcheItem from '../Item/ResearcheItem'
// import {Link} from 'react-router-dom'


function Researcher(){
    const state = useContext(State)
    const [researcher] = state.researcherAPI.researcher
    
    // const [researche, setResearche] = useState('')
    // const [token] = state.token
    // const addPay = state.guestAPI.addPay

    // const createResearche = async e =>{
    //   e.preventDefault()
    //   try{
    //       const res = await axios.post('/api/researcher', {name: researche}, {
    //         headers: {Authorization: token}
    //       })

    //   alert(res.data.msg)
    //   }catch(err){
    //     alert(err.response.data.msg)
    //   }
    // }
   
    return (
        <div className="researcher">
           {
            researcher.map(researche => {
              return<ResearcheItem key={researche._id} researche={researche}/>
            })
          }
          
            {/* <form onSubmit={createResearche}> 
              <label htmlFor="researche">Researcher</label>
              <input type="text" name="researche" value={researche} required
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
                      <button>Pay and Present</button>
                      <Link id="btn_pay" to="#" onClick={() => addPay(researche)}>
                        Pay and Present
                      </Link>
                    </div>

                  </div>
                ))
              }
            </div> */}



        </div>
    )
}

export default Researcher