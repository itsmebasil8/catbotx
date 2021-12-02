/* codded by basilser
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 OA_AI: process.env.CATBOT_AI === undefined ? true : process.env.Z_BOTNAME,  
 OB_NAME: process.env.BOT_NAME === undefined ? 'CATBOT' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.DEP_NAME === undefined ? 'cat' : process.env.Z_DEP_NAME,
 OA_REPLY: process.env.DEP_REPLY === undefined ? 'cat is my creator his full name is basilser' : process.env.Z_DEP_REPLY,
    

};
