const User = require('../models/User');
const striptags = require('striptags');

module.exports = function(socket, io) {
    socket.on('soldStackExchangeItem', async (data) => {
        const username = await data.item.user;
        const user = await User.findOne({username});

        if(!user) {
            return console.log('User does not exist.');
        }

        if(user.socket_id === '') {
            return console.log('User has no socket ID');
        }
        console.log(user.socket_id)
        io.to(user.socket_id).emit('hey', 'I just met you');
    });
};