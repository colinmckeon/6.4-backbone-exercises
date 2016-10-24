var $ = require('jquery');
var Backbone = require('backbone');

//SERIALIZE FUNCTION HELP FROM MADDY
$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
}



var BlogSubmitView = Backbone.View.extend({
  events: {
    'submit': 'addBlog'
  },
  addBlog: function(event){
    event.preventDefault();

    //SERIALIZE FUNCTION HELP FROM MADDY
    var contactDetails = $(event.currentTarget).serializeObject();
    this.collection.create(contactDetails);

    // var blogTitle = $('#title').val();
    // this.collection.create({title: blogTitle});
    //
    // var blogEntry = $('#blog').val();
    // this.collection.create({blog: blogEntry});
    //
    $('#title').val('');
    $('#blog').val('');
  }

});


module.exports = {
  BlogSubmitView: BlogSubmitView
}
