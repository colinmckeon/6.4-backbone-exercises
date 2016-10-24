var $ = require('jquery');
var views = require('./views/a-views.js');
var models = require('./models/a-models.js');


//WAITS FOR DOM READY
$(function(){

var blogCollection = new models.BlogCollection();

var blogSubmit = new views.BlogSubmitView({collection: blogCollection});
blogSubmit.setElement($('#blog-form')[0]);





}); //END OF DOM READY FUNCTION
