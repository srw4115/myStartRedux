import React from "react"
import ReactDOM from "react-dom"
import ThunkMiddleware from 'redux-thunk'

import fetch from 'isomorphic-fetch'

import { createStore, applyMiddleware } from 'redux'
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


/*

const testReducer = (num=0,action) => {
	switch(action.type){
		case 'add':
			num+=1
			return num;
		default:
			return num;
	}
}


const testStore = createStore(testReducer);
testStore.subscribe(()=>{
	console.log(testStore.getState());
});

testStore.dispatch({type:"add"});
*/



/*

function fetchData(url) {
    return function (dispatch) {
        return fetch(url)
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (json) => {
                    return dispatch({ type: "POST_SUCCESS", data: json })
                }
            )
    }
}

const fetchReducer = (state = null, action) => {
    switch (action.type) {
    case "POST_SUCCESS":
        state = "POST_SUCCESS"
        return state
    default:
        return state
    }
}


const fetchStore = createStore(fetchReducer, applyMiddleware(ThunkMiddleware));

fetchStore.dispatch(fetchData('/data.json')).then((response) => {
    const data = response.data;
    console.log(data.text);
    //store.dispatch({ type: "START", text: data.text });
});

*/
