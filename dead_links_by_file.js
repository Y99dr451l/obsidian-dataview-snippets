var a = app.metadataCache.unresolvedLinks;
var links = [];
for (const elem in a) {
	if (Object.keys(a[elem]).length == 0) continue;
	links.push([dv.page(elem).file.link, Object.keys(a[elem])]);
}
links.sort((a, b) => b[1].length - a[1].length);
dv.table(['File', 'Dead links'], dv.array(links));