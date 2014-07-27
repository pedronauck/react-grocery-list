/* jshint -W117 */
'use strict';

var React = require('react');
var GroceryList = require('./components/grocery-list');
var items = require('./data/groceries');

React.renderComponent(
	<GroceryList items={items} name='Grocery List' />,
	document.getElementById('content')
);
