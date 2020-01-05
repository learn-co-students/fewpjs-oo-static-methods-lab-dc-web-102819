class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    let words = string.match(/\b\w+\b/g)
    let preps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return words.map((e,i) => preps.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e).join(" ")
  }
}