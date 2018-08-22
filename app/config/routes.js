var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/main.js");
var Search = require("../components/articles/search.js");
var Saved = require("../components/articles/saved.js");


module.exports = (
    <Router history={hashHistory}>

        <Route path = "/" component = {Main}>

            <Route path="search" component={Search}/>

            <Route path="saved" component={Saved}/>

            <IndexRoute component={Search}/>

        </Route>
    </Router>
);