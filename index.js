class Formatter {
  static capitalize(string)
  {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s'-]/g , '');
  }

  static titleize(string)
  {
    console.log(string);
    let arr = string.split(' ').map(word => 
      {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from')
      {
        return this.capitalize(word)
      }
      else
      {
        return word;
      }
    });

    return this.capitalize(arr.join(' '));
  }
}