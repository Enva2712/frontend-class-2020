const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(config) {
    config.addCollection('lessons', collections =>
        collections.getFilteredByTag('lesson')
        .sort((a, b) => a.data.lesson - b.data.lesson)
    )

    config.addPlugin(syntaxHighlight)

	return {
		dir: {
			input: 'content',
			output: 'public'
		}
	}
}
