var React = require('react');
var ReactDOM = require('react-dom');
var ReactIntl = require('react-intl');
var Api = require('./utils/api');

module.exports = React.createClass({  

	getInitialState : function(){
	  	return {
	  		filterText: '',
	  		apiData : [] 
	  	}
	},
	componentWillMount : function(){
  		Api.get('data.json')
  		.then(function(data){
  			this.setState({
  				apiData : data
  			})
  		}.bind(this));
  	},

  	handleUserInput: function(filterText) {
	    this.setState({
	      filterText: filterText
	    });
	},

	render : function() {
		
          return <div className="custom-table-wrapper table-view">
          			<div className="clearfix">
          				<div className="col col-12">
          					<h3 style={{textAlign:'center'}}> Potential Candidates</h3>
          				</div>
          				<div className="col col-5">
          					<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
          				</div>
          				<div className="col col-7">
          				</div>
          			</div>       			
          			<Table apiData={this.state.apiData} filterText={this.state.filterText} />
                </div>

	}
});


var Table = React.createClass({


    render: function() {	
  	var rows = [] ;
	var data = this.props.apiData;
		
    data.forEach(function(rowData) {

    	if (rowData.name.indexOf(this.props.filterText) === -1 && rowData.gender.indexOf(this.props.filterText) === -1 && rowData.gender.indexOf(this.props.filterText) === -1){
		    return;
		}

      rows.push(<Row {...rowData} key={rowData.id} />);
    }.bind(this));
 
    return (
	        	<table className="custom-table">
	          			<thead>
						    <tr>
						      <th>Id</th>
						      <th>Name</th>
						      <th>Age</th>
						      <th>Gender</th>
						      <th>Balance</th>
						    </tr>
						</thead>
			            <tbody>
			             	{rows}
			            </tbody>
			    </table>
    );
  }
});

var Row = React.createClass({   
	
	getInitialState: function(){
		return {
	      selected:''
	    }
	},

	handleClick : function(){

		if(this.state.selected !== 'selected'){
			this.setState({selected:'selected'})
		}
		else{
			this.setState({selected:''})
		}
	},

	render : function(){
        return  <tr onClick={this.handleClick}  className={this.state.selected}>
                    <td> {this.props.id} </td>
                    <td> {this.props.name} </td>
                    <td> {this.props.age} </td>
                    <td> {this.props.gender} </td>
                    <td> {this.props.balance} </td>
                </tr>


	}
});

var SearchBar = React.createClass({

  handleChange : function(){
  	this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },
  render: function() {
    return (
      <form>
      	<p>
      		<input type="text" 
      			placeholder="Search..." 
  			    value={this.props.filterText} 
  			    ref="filterTextInput"
  			    onChange={this.handleChange} />
      	</p>
      </form>
    );
  }
});


var TableControls = React.createClass({

  render: function() {
    return (
      	<p>
      		<button></button>
      	</p>
    );
  }
});






