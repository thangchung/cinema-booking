// 'use strict';

/** @jsx React.DOM */
// var homepage = require('./home-page/sample'),
// 	debug = require('./components/debug');

// homepage();
// debug();

var React = require('react'),
	{DefaultRoute, Route, Routes} = require('react-router'),
	App = require('./App'),
	Home = require('./Home'),
	About = require('./About');

React.renderComponent((
    <Routes location="history">
        <Route path="/" handler={App}>
            <DefaultRoute name="home" handler={Home} />
            <Route name="about" handler={About} />
        </Route>
    </Routes>
), document.body);