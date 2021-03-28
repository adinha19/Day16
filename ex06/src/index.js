const firstName = (firstName) => {
    return firstName.toUpperCase();
};

const lastName = (lastName) => {
    return lastName.toLowerCase();
};

console.log(firstName("john"), lastName("doe"));
exports.firstName = firstName;
exports.lastName = lastName;