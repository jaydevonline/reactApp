var React = require('react');
var ReactDOM = require('react-dom');
var Api = require('./utils/api');


module.exports = React.createClass({
	render : function(){
		return (
				<div className="tile-view-wrapper tile-view">
          			<div className="clearfix">
          				<div className="col col-12">
          					<h3 style={{textAlign:'center'}}> Potential Candidates</h3>
          				</div>
          			</div> 

          			<ul className="tiles">
        				<li className="tile">
        					<div className="circle avtar-image">
        						<img src="../images/amol.jpg" className="image-responsive" />
        					</div>
        					<div className="center bold">Abhi Chawla</div>
        					<br/>
        					<div className="center">62 Tickets</div>
        				</li>
        				<li className="tile">
        					<div className="circle avtar-image">
        						<img src="../images/avni.jpg" className="image-responsive" />
        					</div>
        					<div className="center bold">Abhi Chawla</div>
        					<br/>
        					<div className="center">30 Tickets</div>
        				</li>
        				<li className="tile">
        					<div className="circle avtar-image">
        						<img src="../images/amol.jpg" className="image-responsive" />
        					</div>
        					<div className="center bold">Abhi Chawla</div>
        					<br/>
        					<div className="center">62 Tickets</div>
        				</li>
        				<li className="tile">
        					<div className="circle avtar-image">
        						<img src="../images/avni.jpg" className="image-responsive" />
        					</div>
        					<div className="center bold">Abhi Chawla</div>
        					<br/>
        					<div className="center">30 Tickets</div>
        				</li>
          			</ul>
                </div>
			)
	}
});
