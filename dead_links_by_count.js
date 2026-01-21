var a = app.metadataCache.unresolvedLinks;
var counts = {};
for (const elem in a) {
	if (Object.keys(a[elem]).length == 0) continue;
	for (const e of Object.keys(a[elem])) {
		if (counts[e]) counts[e] += 1;
		else counts[e] = 1;
	}
}
var arr = Object.keys(counts).map((key) => [key, counts[key]]).sort();
var counts2 = {};
for (const e of arr) {
	if (e[1] in counts2)
		counts2[e[1]] = [counts2[e[1]], e[0]].join(' '.repeat(5));
	else counts2[e[1]] = e[0];
}
var arr2 = Object.keys(counts2).map((key) => [counts2[key], key]);
arr2.sort((a, b) => b[1] - a[1]);
dv.table(['Dead links', 'Counts'], dv.array(arr2));