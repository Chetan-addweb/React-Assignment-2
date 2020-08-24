import React from 'react';

const charComponent = (props) => {
	return(
		<div className = "Char"  onClick={props.delete}>
		<span>{props.char}</span>
	    </div>
		)
}
export default charComponent;