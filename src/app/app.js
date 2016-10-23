import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appStore from "../store/app.store.js"
import Content from "../app/contentContainer.js"

const store = createStore(appStore);

ReactDOM.render(
	<Provider store={store}>
		<Content />
	</Provider>, 
	document.querySelector(".app")
);