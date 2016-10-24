var $ = require('jquery');
var views = require('./views/b-views.js');
var models = require('./models/b-models.js');


//WAITS FOR DOM READY
$(function(){

var contactCollection = new models.ContactCollection();

var contactSubmit = new views.ContactSubmitView({collection: contactCollection});
contactSubmit.setElement($('#contact-form')[0]);

}); //END OF DOM READY FUNCTION
