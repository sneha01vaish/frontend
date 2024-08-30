import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Bar extends Component {
	render() {
		const options = {
			title: {
				text: "Monthly Order Status"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "January",  y: 10  },
					{ label: "February", y: 15  },
					{ label: "March", y: 25  },
					{ label: "April",  y: 30  },
					{ label: "May",  y: 28  },
					{ label: "June",  y: 38  },
					{ label: "July",  y: 28  },
					{ label: "August",  y: 20  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Bar;     