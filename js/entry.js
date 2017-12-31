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
