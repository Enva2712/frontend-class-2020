module.exports = function(config) {
    config.addCollection('lessons', collections =>
        collections.getFilteredByTag('lesson')
        .sort((a, b) => a.data.lesson - b.data.lesson)
    )

	return {
		dir: {
			input: 'content',
			output: 'public'
		}
	}
}
