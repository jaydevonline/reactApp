var React = require('react');
var ReactDOM = require('react-dom');
// var Row = require('./row.jsx');


module.exports = React.createClass({  

	fakeData : [
		  {
		    "id": "56badf3d24aa263fbc1187ar6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc65686742eebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a67wd79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3debg74dba114cff0b0",
		    "balance": "$3,648.27",
		    "picture": "http://placehold.it/32x32",
		    "age": 36,
		    "name": "Santos Burton",
		    "gender": "male",
		    "company": "NETBOOK",
		    "email": "santosburton@netbook.com",
		    "phone": "+1 (823) 594-3892"
		  },
		  {
		    "id": "56badf3dfewcb7da59530c8e7",
		    "balance": "$2,998.40",
		    "picture": "http://placehold.it/32x32",
		    "age": 33,
		    "name": "April Kennedy",
		    "gender": "female",
		    "company": "APPLICA",
		    "email": "aprilkennedy@applica.com",
		    "phone": "+1 (927) 565-3872"
		  },
		  {
		    "id": "56badf3dcc0o49f72804b03bb",
		    "balance": "$2,723.44",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Henrietta Bryan",
		    "gender": "female",
		    "company": "PHORMULA",
		    "email": "henriettabryan@phormula.com",
		    "phone": "+1 (822) 483-3416"
		  },
		  {
		    "id": "56badf3dg24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfwc656806742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dnc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badfs3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badrf3dfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56baxdf3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56bvadf3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3mdfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a6g7d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badfa3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3pdfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a6m7d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3d24fdaa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dwefc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badref3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56bawdf3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfwc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3ddc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badddf3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56basdf3dfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56bvfadf3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3d2h4aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dffc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56bfadf3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56bafdf3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc65686742ebff656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a67df79id7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3fd24aa263fobc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56fbadf3dfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "5f6badf3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56fbadf3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc65686742efbf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a67df79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3d2d4aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badfd3dfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3gdc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3d2g4aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc65686h742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4ha67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badfhh3d24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc656u86742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4a67d7u9d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3fd24aa263fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3dfc6o5686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56baodf3dc4a67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  },
		  {
		    "id": "56badf3d24aa26o3fbc1187a6",
		    "balance": "$2,736.25",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Boyer Nixon",
		    "gender": "male",
		    "company": "VIRXO",
		    "email": "boyernixon@virxo.com",
		    "phone": "+1 (862) 582-3517"
		  },
		  {
		    "id": "56badf3odfc65686742ebf656",
		    "balance": "$1,179.11",
		    "picture": "http://placehold.it/32x32",
		    "age": 29,
		    "name": "Valdez Best",
		    "gender": "male",
		    "company": "BARKARAMA",
		    "email": "valdezbest@barkarama.com",
		    "phone": "+1 (834) 444-2924"
		  },
		  {
		    "id": "56badf3dc4ao67d79d7626264",
		    "balance": "$1,338.74",
		    "picture": "http://placehold.it/32x32",
		    "age": 40,
		    "name": "Mendez David",
		    "gender": "male",
		    "company": "DYMI",
		    "email": "mendezdavid@dymi.com",
		    "phone": "+1 (877) 400-3988"
		  }
		],

	getInitialState : function(){
		return {
			selectedRows : []
		}
	},

	componentDidMount: function() {
		var table = $('#fake-table');
		$(table).DataTable({
			paging: false,
    		"bScrollInfinite": true,
	        "bScrollCollapse": true,
	        "sScrollY": "500px"
    	});

    	$(table).on( 'click', 'tbody tr', function () {
	        $(this).toggleClass('selected');
	    } );

	},

	render : function() {
			
			var rows = [] ;
			var data = this.fakeData;
            for( var i = 0 ; i < data.length ; i++ ){
                var fakeDataObj = data[i];
                rows.push(<Row {...fakeDataObj} key={data[i].id} />)
            }

          return <div className="data-table-wrapper">
          	        <table id="fake-table" className="data-table">
	          			<thead>
						    <tr>
						      <th>Id</th>
						      <th>Balance</th>
						      <th>age</th>
						      <th>name</th>
						      <th>gender</th>
						    </tr>
						</thead>
			            <tbody>
			             {rows}
			            </tbody>
		            </table>
                </div>

	}
});




