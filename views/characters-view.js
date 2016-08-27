// Here we have a view for a collection (charactersView in app.js).
// This view has a tagName which denotes what type of HTML tag 
// will be given to this view. Ultimately, you can add whatever
// you want within a view. Since this view is for a collection,
// we use the underscore each method to add content to this.$el.

// this.$el is a reserved namespace for the HTML content for a
// view. Each Backbone view has its own respective $el. In the 
// render method below, we see that this.$el is cleared upon each
// rendering. This allows a clean slate to be given before the 
// new content is appended.

// The initialize function is given to each Backbone view,
// and it is called when the view is created.

// Notice that in the each function below, a new CHaracterView
// is appended to the collection view, and a model type is once
// again passed as an argument. The model argument is referring
// to a JavaScript object, not a Backbone model. It will be 
// made into a model within characterModel.js.

var CharactersView = Backbone.View.extend({
  tagName: 'div',

  render: function() {
    this.$el.html('');
    this.$el.append('<div class="character-title">Invader Zim Characters</div>');
    this.collection.each(function(character) {
      this.$el.append(new CharacterView({model: character}).$el);
    }, this);

    return this;
  },

  initialize: function() {
    this.render();
  }
});