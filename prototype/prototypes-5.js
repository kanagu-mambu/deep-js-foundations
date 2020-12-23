var foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return 'I am ' + this.me;
  },
};

var bar = Object.create(foo);

bar.speak = function () {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = Object.create(bar);
b1.init('Kanagu');

b1.speak();
