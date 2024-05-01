//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle


//import your own components
import Todo from "./component/todo.jsx";


//render your react application
ReactDOM.render(<Todo />, document.querySelector("#app"));
