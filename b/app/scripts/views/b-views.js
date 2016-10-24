var $ = require('jquery');
var Backbone = require('backbone');


//SERIALIZE FUNCTION HELP FROM MADDY
$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
}

var ContactSubmitView = Backbone.View.extend({
  events:{
    'submit': 'addContact'
  },
  addContact: function(event){
    event.preventDefault();

  //SERIALIZE FUNCTION HELP FROM MADDY
  var contactDetails = $(event.currentTarget).serializeObject();
  this.collection.create(contactDetails);

  $('#firstname').val('');
  $('#lastname').val('');
  $('#address').val('');
  $('#phonenumber').val('');
  }
});


module.exports = {
  ContactSubmitView: ContactSubmitView
}
