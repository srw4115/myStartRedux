import React from 'react'
import { connect } from 'react-redux'
import textAction from './action.js'

let AppContent = ({ dispatch }) => {
	const onButtonClick = ()=>{
    	dispatch(textAction("success"));
  	};
	return (
	    <button onClick={onButtonClick}> change </button>
	)
};


AppContent = connect()(AppContent)

export default AppContent
