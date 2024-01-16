const getUsersController = require('../../controllers/users/getUsersController');

const getUsers = async (req, res) => {

    try {
        const response = await getUsersController()

        res.json(response)
    } catch (error) {
        res.status(500).json({ message: 'Unexpected error' })
        console.error(error)
    }
}

module.exports = getUsers