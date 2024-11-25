const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "settings",

    react: ☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`

AUTO_READ_STATUS
MODE:
AUTO_VOICE: 
AUTO_STICKER: 
AUTO_REPLY: 
ALIVE_IMG: 
ALIVE_MSG: 
ANTI_LINK: 
ANTI_BAD: 
PREFIX: 
FAKE_RECORDING: 
AUTO_REACT: 
HEART_REACT: 
OWNER_REACT:
BOT_NAME:
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
