// Below is the view constructor for individual characters.
// Notice that this view, for singular models, extends
// the same Backbone.View object as the collection view did.
// This is important to note because Backbone objects are
// given specialized functionality that is needed for Backbone
// objects to behave as expected.

// Here, the tagName is given, and templates are created.
// These two templates will decide what content is shown,
// and that decision will be made based on the properties
// on the character model itself.

// Just like before, this view constructor has a render 
// and initialize method.

// The view is also what holds the functionality for
// events that may occur. The events in Backbone allow for
// specific events to be named and custom functionality to
// be given.

// Important take-away:
// Scripting can be used to get certain characteristics
// from the data models. In the templates below, you 
// can see the <% script tags %> which are used to select
// properties from the model objects being passed to this
// constructor.

var CharacterView = Backbone.View.extend({
  tagName: 'div',

  charTemplateBasic: _.template('<div><img class="charPic" src="<%=image%>"></div>'),
  
  charTemplateDetails: _.template('<div><img class="charPic" src="<%=image%>"><div class="names"><%=name%></div><div><%=details%></div></div>'),
  
  render: function() {
    var charTemplate = this.model.get('displayInfo') ? this.charTemplateDetails : this.charTemplateBasic;
    this.$el.html(charTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
    this.model.on('toggle:details', this.render, this);
  },
  
  events: {
    'click': function() {
      this.model.toggleDetails();
    }
  }
});