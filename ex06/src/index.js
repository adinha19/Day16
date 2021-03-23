function firstName(firstName) {
    return firstName;
}
function lastName(lastName) {
    return lastName;
}
console.log(firstName("JOHN"));
console.log(lastName("doe"));
exports.firstName = firstName;
exports.lastName = lastName;