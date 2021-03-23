class Person {
    static display() {
        message;
        return "Static method is invoked from Person class";
    }
    show() {
        return Person.display();
    }
}
var message = new Person();
message.show();
console.log(message.show());
module.exports = Person;