// Imports small array of users
// Pretend it's an API request
const { data } = require('browserslist');
const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
    //return users;
}

// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id)
}


// test
// console.log(getUser(3));
//console.log(getUsers());
module.exports = {getUsers , getUser};