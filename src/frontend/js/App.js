/** @jsx React.DOM */

var React = require('react'),
    {Link} = require('react-router');

var App = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <Link className="navbar-brand" to="home">Cinema Booking</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="home">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                      </ul>
                    </div>
                </div>                
                <this.props.activeRouteHandler />
            </nav>
        );
    }
});

module.exports = App;