import React, {useContext} from 'react'
import {State} from '../components/State'
import {Link} from 'react-router-dom'

function Cart(){
    const state = useContext(State)
    const [cart] = state.guestAPI.cart

    if(cart.length === 0)
        return <h3 style={{textAlign: "center", fontSize:"5rem"}}>Empty Cart</h3>
    return(
        <div className="col">
            {
                cart.map(researche => (
                    <div className="row" key={researche._id}>
                    <p>{researche.name}</p>
                    <div>
                      
                      <button>Pay and Present</button>
                      <Link to="#" className="cart">
                        Pay Now
                      </Link>
                    </div>

                  </div>
                ))
            }
        </div>
    )
}
export default Cart