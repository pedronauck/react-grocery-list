/* jshint -W117 */
'use strict';

var React = require('react');
var GroceryList = require('./components/grocery-list.jsx');
var items = require('./data/items.jsx');

React.renderComponent(
	<GroceryList items={items} name='Grocery List' />,
	document.getElementById('content')
);
