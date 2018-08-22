// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var helpers = require("../utils/helper.js");

var Saved = React.createClass({

  // render the function
  render: function() {

    return (

        <div className="container">
            <p>junk junk</p>

          {/* {this.props.children} */}

        </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Saved;