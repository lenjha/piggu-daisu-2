const Entry = require('./../js/entry.js').journalEntryModule;

$(document).ready(function(){
  $('#new-entry').submit(function(event){
    event.preventDefault();
    let title = $('#title-field').val();
    let body = $('#body-field').val();
    $('#new-entry').trigger("reset");
    let newEntry = new Entry(title, body);
    $('.entry-list').append(
      `<li class="journal-entry">
       <h3>${title}</h3>
       <p>${body}</p>
       </li>`
    );
  });
});
