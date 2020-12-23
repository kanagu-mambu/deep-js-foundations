function foo(who) {
    this.me = who
}

foo.prototype.identify = function () {
    console.log("I am " + this.me)
}


var a1 = new foo("a1")
var a2 = new foo("a2")


a2.identify = function () {
    console.log("Hello, I am : " + this.me + ".")
}


a2.identify1 = function () {
    foo.prototype.identify.call(this)
}


a1.identify()
a2.identify()
a2.identify1()


