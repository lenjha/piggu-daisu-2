//an example file for how to define a class
// to be removed once I can remember how to do this without a reference

class Entry{
  constructor(title, body){
    this.title = title,
    this.body = body
  }

  wordCount(){
    var words = this.body.split(' ');
    return words.length;
  }
}

exports.journalEntryModule = Entry;
