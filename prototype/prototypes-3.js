function foo(who) {
  this.me = who;
}

foo.prototype.identify = function () {
  return 'I am ' + this.me;
};

function bar(who) {
  foo.call(this, who);
}

bar.prototype = Object.create(foo.prototype);

bar.prototype.speak = function () {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = new bar('b1');
var b2 = new bar('b2');

b1.speak();
b2.speak();
