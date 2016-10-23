import { createStore } from "redux";


const AppReducer = (state = "hello redux", action) => {
    switch (action.type) {
        case "START":
            state = action.text;
            return state;
        default:
            return state;
    }
};

export default AppReducer;
