/* 
 	This component is a toggle button panel to change the view from Table to Tiles and vise versa 
 	It will find the classes "table-view" and "tile-view" and toggle display.
*/


var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({
	getInitialState: function(){
		return {
	      view:'table-view'
	    }
	},
	showTableView: function(event){

		if(this.state.view !== 'table-view'){
			this.setState({view:'table-view'})
		}
		this.handleToggle();
	},
	showTileView: function(event){
		if(this.state.view !== 'tile-view'){
			this.setState({view:'tile-view'})
		}
		this.handleToggle();
	},

	handleToggle : function(){
		var tableView = document.querySelectorAll('.table-view');
		var tileView = document.querySelectorAll('.tile-view');

		if(this.state.view === 'table-view'){

			tableView[0].style.display = "none";
			tileView[0].style.display = "block";
		}
		else{
			tableView[0].style.display = "block";
			tileView[0].style.display = "none";
		}
	},
	render : function(){
		return (
				<div className="clearfix">
					<div className="table-tile-toggle-panel">
						<button className="btn-icon" onClick={this.showTableView} disabled={this.state.view === 'table-view'}>
							<span className="icon-list37"></span>
						</button>
						<button className="btn-icon" onClick={this.showTileView} disabled={this.state.view === 'tile-view'}>
							<span className="icon-mosaic"></span>
						</button>
					</div>
				</div>
			)
	}
});