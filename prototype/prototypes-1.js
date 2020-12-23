function foo(who) {
    this.me = who
}

foo.prototype.identify = function () {
    return "I am " + this.identify
}


var a1 = new foo("a1")
var a2 = new foo("a2")


a2.speak = function () {
    console.log("Hello,  " + this.identify() + ".")
}

console.log(a1.__proto__ === a2.__proto__)
console.log(a1.__proto__ === a2.constructor.prototype)
console.log(a1.__proto__ === foo.prototype)
console.log(a1.constructor === foo)
console.log(foo === foo.prototype.constructor)



