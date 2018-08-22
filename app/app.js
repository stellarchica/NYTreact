// include main react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// (main) Main component
var Routes = require("./config/routes");
console.log(Routes);

// render our main component (in this case Main)
ReactDOM.render(Routes, document.getElementById("app"));