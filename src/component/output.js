import React from 'react';
import './outut.css';

 
function Output (props){
	return(
			<div className="form">
           <h2> Output</h2>
            
            <p>My name: {props.name}</p>
            
            </div>


			)
	
}
export default Output;