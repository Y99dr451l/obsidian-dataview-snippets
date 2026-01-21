var arr = Object.values(dv.pages())[0]
	.map(p => [p.file.name, p.file.link, p.file.size])
	.sort((a, b) => b[2] - a[2])
var arr2 = arr[0].map((_, i) => arr.map(row => row[i]));
const chartData = {
	type: 'bar',
	data: {
		labels: arr2[1].map(a => ''),
		datasets: [{
			label: 'File length in characters',
			data: arr2[2],
			backgroundColor: [ 'rgba(200, 150, 255, .5)' ],
			borderWidth: 0
		}]
	},
	options: { plugins: { tooltip: { callbacks: {
		label: function(context) {
			return arr2[0][context.dataIndex] + ": " + arr2[2][context.dataIndex];
		}
	}}}}
}
window.renderChart(chartData, this.container);
dv.table(['File', 'Length'], dv.array(arr.map(p => p.slice(1, 3))))