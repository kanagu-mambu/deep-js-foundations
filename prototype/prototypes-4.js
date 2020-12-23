var foo = Object.create(Object.prototype);

foo.init = function (who) {
  this.me = who;
};

foo.identify = function () {
  return 'I am ' + this.me;
};

var bar = Object.create(foo);
bar.init = function (who) {
  foo.init.call(this, who);
};

bar.speak = function () {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = Object.create(bar);
b1.init('Kanagu');

b1.speak();
