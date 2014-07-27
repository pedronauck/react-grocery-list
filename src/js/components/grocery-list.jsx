/* jshint -W117 */
'use strict';

var React = require('react');
var GroceryListItem = require('./grocery-list-item');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h2 className='title'>{this.props.name}</h2>
				<ul className='grocery-list'>
					{this.props.items.map(function(item) {
						return <GroceryListItem key={item.id} item={item} />
					})}
				</ul>
			</div>
		);
	}
});
