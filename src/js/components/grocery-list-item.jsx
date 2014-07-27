/* jshint -W117 */
'use strict';

var React = require('react/addons');

module.exports = React.createClass({
	getInitialState: function() {
		return { buyed: false };
	},
	onChange: function() {
		this.setState({ buyed: !this.state.buyed })
	},
	render: function() {
		var item = this.props.item;
		var classes = React.addons.classSet({
			'grocery-list-item': true,
			'is-buyed': this.state.buyed
		});

		return (
			<li className={classes}>
				<input id={'item-' + item.id} type='checkbox' value={item.buyed} onChange={this.onChange} />
				<label htmlFor={'item-' + item.id}>
					<span className='name'>{item.name}</span>
					<span className='quantity'>({item.quantity})</span>
				</label>
			</li>
		);
	}
});
