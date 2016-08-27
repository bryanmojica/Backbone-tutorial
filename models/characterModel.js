// The character model is the only thing in this project
// that truly holds data. The models in Backbone are used
// to store data, and are 'unaware' of any views which may
// be listening to it for events. Thus, a Backbone model
// simply emits an event as having happened, and any views
// that are listening act accordingly.

// When triggering an event, the 2nd argument is used for 
// context of 'this'.

// The events in Backbone are rather customizable, and this
// can be seen by the 'toggle:details' event below. To
// trigger an event in Backbone, the trigger keyword is used.

// Important take-aways:
// Backbone models hold the data and have nothing to do with 
// maintaining relationships with views.
// Models in Backbone have getters and setters which are used
// to get values or set values. See examples below
// this.set('changingProp', 'newValue'); 
// -> this.changingProp === 'newValue'
// this.get('desiredValue'); -> returned value is the desired value

var Character = Backbone.Model.extend({
  defaults: {
    name: 'Zim',
    image: 'http://pre13.deviantart.net/0a80/th/pre/f/2011/052/4/5/invader_zim_by_invadersponge-d3a3uuo.png',
    details: 'A genius, oblivious to his own capabilities.',
    displayInfo: false
  },

  toggleDetails: function() {
    this.set('displayInfo', !this.get('displayInfo'));
    this.trigger('toggle:details', this);
  }
});