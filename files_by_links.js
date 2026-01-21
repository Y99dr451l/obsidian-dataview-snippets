var arr = Object.values(dv.pages())[0]
	.map(p => [p.file.name, p.file.link, p.file.outlinks.length])
	.sort((a, b) => b[2] - a[2])
var arr2 = arr[0].map((_, i) => arr.map(row => row[i]));
const chartData = {
	type: 'bar',
	data: {
		labels: arr2[1].map(a => ''),
		datasets: [{
			label: 'Number of links in file',
			data: arr2[2],
			backgroundColor: [ 'rgba(150, 200, 255, 0.5)' ],
			borderWidth: 0,
		}]
	},
	options: { plugins: { tooltip: { callbacks: {
		label: function(context) {
			return arr2[0][context.dataIndex];
		}
	}}}}
}
window.renderChart(chartData, this.container);
dv.table(['File', 'Links'], dv.array(arr.map(p => p.slice(1, 3))))