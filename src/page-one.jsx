var React = require('react');
var ReactDOM = require('react-dom');


PageOne = React.createClass({
  render: function() {	
		return (<div> returned from page one </div>)
    }
});

var element = React.createElement(PageOne);
ReactDOM.render(element, document.querySelector('.page-one'));