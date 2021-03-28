class Person {
    static display() {
        let message = "Static method is invoked from Person class";
        return message;
    }
    show() {
        return Person.display();
    }
}
message = new Person();
message.show();
console.log(message.show());
module.exports = Person;