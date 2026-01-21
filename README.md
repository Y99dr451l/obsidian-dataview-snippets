## Obsidian-dataview-snippets

This repo contains some of the horrible JavaScript code I wrote to display statistics of my [Obsidian](obsidian.md) vault.

These obviously require the [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) Obsidian plugin. Simply copy-paste the contents of the `.js` files into a codeblock marked with `dataviewjs` in one of your Markdown files:

\`\`\`dataviewjs

// code

\`\`\`

- [`files_by_length.js`](files_by_length.js) displays a bar chart of the file lengths with tooltips to the file names, followed by a table of the file links and character counts. Both the bar chart and the table are sorted in descending order of character counts.
- [`files_by_links.js`](files_by_links.js) does the same with the number of links instead of characters.
- [`dead_links_by_count.js`](dead_links_by_count.js) creates a table with a column of linked-but-not-existing files and another with the number of occurences of those links, sorted in descending order of link counts.
- [`dead_links_by_file.js`](dead_links_by_file.js) creates a table with a column of links to files that link to non-existing files, and column of the latter per file, sorted in descending order of link count.