class foo {
  constructor(who) {
    this.me = who;
  }

  identify() {
    return 'I am ' + this.me;
  }

  static hello() {
    return 'hello';
  }
}

class bar extends foo {
  constructor(who) {
    super(who);
    this.me = who;
  }

  identify() {
    return super.identify() + '(From Bar)';
  }

  speak() {
    console.log('Hello, ' + this.identify() + '.');
  }
}

var b1 = new bar('b1');
var b2 = new bar('b2');

b1.speak();
b2.speak();

console.log(bar.hello());
