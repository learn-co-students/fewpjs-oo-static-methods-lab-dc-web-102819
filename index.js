class Formatter {
  //add static methods here

  static capitalize(str) {

  	return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(string) {
  	return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
  	let splitString = string.split(' ')

  	let newStr = ''

  	let allowed = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

  	let capitalized = splitString.forEach(str => {
  		if (allowed.includes(str)) {
  			newStr = newStr + ' ' + str
  		}else {
  			newStr = newStr + ' ' + this.capitalize(str)
  		}

  	})

  	return this.capitalize(newStr.slice(1))
  }
}
