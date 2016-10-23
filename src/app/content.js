import React, { PropTypes } from 'react'
import { connect } from "react-redux"
import TextButton from "./button.js"

const AppContent = ({ text }) => {
	return (
		<div className="content" >
		    <span className="main" >{text} </span>
		    <TextButton />
		</div>
	)
}

AppContent.propTypes={
	text: PropTypes.string.isRequired
}

export default AppContent
