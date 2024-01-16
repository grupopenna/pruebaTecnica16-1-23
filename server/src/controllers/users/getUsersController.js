const axios = require('axios');

const getUsersController = async (req, res) => {

    try {
       const response = (await axios(`https://jsonplaceholder.typicode.com/users/`)).data;

       return response

    } catch (error) {
        throw new Error
    }
}

module.exports = getUsersController