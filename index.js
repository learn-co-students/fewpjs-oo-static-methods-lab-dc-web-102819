class Formatter {
  static capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase()
    let newWord = string.substr(1)
    return firstLetter + newWord
  }
  static sanitize(string){
    return string.replace(/[^\w\s\/'\-]/g, '')
  }
  static titleize(string){
    let words = string.split(' ')
    let newStringArray = []
    words.forEach(function(word, index) {
      // debugger
      if (index === 0) {
        newStringArray.push(Formatter.capitalize(word))
      }else {
        switch (word) {
          case 'the':
            newStringArray.push(word)
            break
          case 'a':
            newStringArray.push(word)
            break
          case 'an':
            newStringArray.push(word)
            break
          case 'but':
            newStringArray.push(word)
            break
          case 'of':
            newStringArray.push(word)
            break
          case 'and':
            newStringArray.push(word)
            break
          case 'for':
            newStringArray.push(word)
            break
          case 'at':
            newStringArray.push(word)
            break
          case 'by':
            newStringArray.push(word)
            break
          case 'from':
            newStringArray.push(word)
            break
          default:
          newStringArray.push(Formatter.capitalize(word))
          break
        }
      }
      // the, a, an, but, of, and, for, at, by, and from
    })
    let a = newStringArray.toString().split(',').join(' ')
    return a
  }
}
