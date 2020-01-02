class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    const uncapitalizedWords = ['a', 'an', 'but', 'of', 'and', 'for', 'by', 'at', 'the', 'from']
    let words = string.split(' ')
    return words.map(function(word, index) {
      if (index === 0 || !uncapitalizedWords.find(function(uncappedWord) {
        return uncappedWord === word
    })) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}