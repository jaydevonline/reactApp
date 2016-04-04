var React = require('react');
var ReactDOM = require('react-dom');
var Accordion = require('./accordion');
var Table = require('./table');
var CustomTable = require('./custom-table');
var TileView = require('./tile-view');
var TableTileToggle = require('./table-tile-toggle');

var ReactRouter = require('react-router');
var Router = ReactRouter.router;
var Route = ReactRouter.Route;


var Home = React.createClass({

  render: function() {

      return <div className="main">
			<header className="header"> 
					<div className="clearfix">
					  <div className="col col-4">
					  	<a className="home-icon">
							<img src="../images/nethum_logo.png" alt="nethum logo" />
						</a>
					  </div>
					  <div className="col col-4">
					  	<div style={{visibility:'hidden'}}>lorem </div>
					  </div>
					  <div className="col col-4">
					  	<ul className="header-links">
							<li><a href="#"><span className="icon-bell20"></span></a></li>
							<li><a href="#"><span className="icon-woman56"></span></a></li>
							<li><a href="#"><span className="icon-cogwheel13"></span></a></li>
							<li><a href="#"><span className="icon-exit10"></span></a></li>
						</ul>
					  </div>
					</div>
			</header>
			<div className="wrapper">
				<div className="columns">
					<aside className="column-left">
					   <div className="accordian-container">
					   		<Accordion />  {/* rendering from accordion.jsx */}
					   </div>
					</aside>
					<div className="column-right">
						<div className="clearfix">
							<div className="col col-6">
								<ul className="breadcrumb list-reset">
									<li className="inline-block mr1"><a href="#" className="">Home</a></li>
									<li className="inline-block mr1 current"><a href="#" className="">Dashboard</a></li>
								</ul>
							</div>
							<div className="col col-6">

							</div>
							<div className="col col-12">
								<TableTileToggle />
								<CustomTable /> 
								<TileView />
							</div>
						</div>
					</div>
				</div>
			</div>
	  	</div>
  }

});


var element = React.createElement(Home);
ReactDOM.render(element, document.querySelector('.app-wrapper'));
