class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string) {
    let splitted = string.split(" ")
    for (let i = 0; i < splitted.length; i++) {
      splitted[i] = splitted[i].replace(/[^A-Za-z0-9-']+/g, '')
    }
    return splitted.join(" ")
  }
  
  static titleize(string) {
    let splitted = string.split(" ")
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    splitted[0] = this.capitalize(splitted[0])
    for (let i = 1; i < splitted.length; i++) {
      if (!exceptions.includes(splitted[i])) {
        splitted[i] = this.capitalize(splitted[i])
      }
    }
    return splitted.join(" ")
  }
}