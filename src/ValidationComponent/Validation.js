import React from 'react';

const Validation = (props) => {
	if (props.name.length >=5 ){
		return <p> Text long enough</p>
	}
	return <p>Text to short </p>
}

export default Validation;
