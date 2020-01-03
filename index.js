class Formatter {
  static capitalize(string) {
  	return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
  	const notToTitleCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  	const array = string.split(' ')
  	let output = []

  	array.forEach(word => {
	  	debugger
  		if (notToTitleCase.includes(word)) {
  			output.push(word)
  			debugger
  		} else {
  			output.push(Formatter.capitalize(word))
  			debugger
  		}
  	})
  	console.log(Formatter.capitalize(output.join(' ')))
  	return Formatter.capitalize(output.join(' '))
  }
}