// This is simply dummy data to allow the page to have content 
// to be rendered.

var dummyData = [
  {
    name: 'Zim',
    image: 'http://pre13.deviantart.net/0a80/th/pre/f/2011/052/4/5/invader_zim_by_invadersponge-d3a3uuo.png',
    details: 'A genius, oblivious to his own capabilities.'
  },
  {
    name: 'Dib',
    image: 'http://vignette4.wikia.nocookie.net/villains/images/3/3f/304px-Dib_rage.png/revision/latest?cb=20130524204322',
    details: 'The only human who sees Zim as a threat.'
  },
  {
    name: 'Gaz',
    image: 'http://vignette1.wikia.nocookie.net/zimwiki/images/8/88/Gaz.png/revision/latest?cb=20121202182910',
    details: "Dib's sister, and the strongest of them all."
  },
  {
    name: 'Gir',
    image: 'http://vignette1.wikia.nocookie.net/zimwiki/images/f/fe/Gir_squint.png/revision/latest?cb=20130616053826',
    details: 'The true star of the show.'
  }
];

// In Backbone, a collection is created to monitor changes
// or hold data of similar objects all at once. For that,
// it is necessary to supply an object which declares the
// model of that collection. The example commonly given is
// Book models populating a Library collection. In this
// example, we have Character models populating a collection
// with the variable name 'myChars'. 
// Important take-away:
// from this is that the model listed is the same as the 
// construtor's name. 

var myChars = new Backbone.Collection(dummyData, {model: Character});

// Here, a new view is created for the library 'myChars'. 
// This allows the data to be rendered to the page, but
// more importantly, if an object were later added to this 
// collection, the collection could trigger an 'add' event.
// This would allow for special circumstances to be dealt
// with, in terms of rendering, rather than having to deal
// with each model individually.
// Important take-away:
// Collection views require a collection as an argument, and 
// provide a way to manage changes across a group of similar
// models.

var charactersView = new CharactersView({collection: myChars});

// Similar to my other 'tutorial' repos, this has the verbs
// array to update the page every half-secod.

var verbs = ['alive', 'happy', 'coding', 'busy', 'lazy', 'silly', 'funny', 'serious', 'clever', 'confident', 'prideful',
'proud', 'smart', 'sleepy', 'awake', 'tired', 'bored', 'excited', 'enthusiastic', 'motivated'];

var verb = verbs[Math.floor(Math.random() * 20)];

// I am setting a default value on the page, simply using JQuery.

$('body').prepend('<span class="words">I am ' + verbs[0] + '</span>');

// Here, I am setting a variable to be updated through each interval.

var words = '';

// Below is the setInterval function. It is located within app.js
// app.js appends the other views to the DOM, meaning I can simply
// add them before the remaining character content.

setInterval(function() {
  verb = verbs[Math.floor(Math.random() * 20)];
  words = 'I am ' + verb;
  $('.words').text(words);
}, 500);

// Here, I am appending the collection view directly to $('body');

$('body').append(charactersView.$el);
