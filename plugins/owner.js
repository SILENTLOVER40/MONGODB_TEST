const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "save",
    fromMe: true,
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
            if (!m.quoted) {
            return m.adreply("_Reply to Anyone's Status!_");
    }
    let res = await m.quoted.download();
          if(m.quoted.message.videoMessage){
           await conn.sendMessage(m.jid, { video :res ,  mimetype:"video/mp4"}, {quoted: m })
          } else if(m.quoted.message.imageMessage){
          await conn.sendMessage(m.jid, { image :res ,  mimetype:"image/jpeg"}, {quoted: m })
          }
        
    }catch(e){
console.log(e)
reply(`${e}`)
}
})
