import React from 'react'
import Background from '../images/Background.jpeg';

/**
 * 
 * @returns backgroundImage: "url(" + { Background } + ")"
 */
 var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`,
  };

function Header(){
    return( 
        <div>
            <section style={sectionStyle}>
            <h1 style={{color:'white'}}>Hi from header component</h1>
            </section>
        </div>
    )
}
export default Header;