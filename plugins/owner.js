const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "vv",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
            if (!m.quoted) {
                return m.reply("_Reply to ViewOnce Message !_");
            }
         if (m.quoted.message.viewOnceMessageV2) {
                let vv = m.quoted.message.viewOnceMessageV2
    
                if (vv.message.imageMessage) {
                    let img = await m.downloadAndSaveMedia(vv.message.imageMessage, "vv", true)
    
                    await client.sendMessage(m.jid, {
                        image: {
                            url: img
                        }, caption: vv.message.imageMessage.caption
                    }, {
                        quoted: m
                    })
                } else if (vv.message.videoMessage) {
    
                    let video = await m.downloadAndSaveMedia(vv.message.videoMessage, "vv", true)
    
                    await client.sendMessage(m.jid, {
                        video: {
                            url: video
                        }, caption: vv.message.videoMessage.caption
                    }, {
                        quoted: m
                    })
    
                }
            } else if (m.quoted.message.viewOnceMessageV2Extension.message.audioMessage) {
                  let audio = await m.downloadAndSaveMedia(m.quoted.message.viewOnceMessageV2Extension.message.audioMessage, "vv", true)
    
                    await client.sendMessage(m.jid, {
                        audio: {
                            url: audio
                        }
                    }, {
                        quoted: m
                    })
         } else {
                m.reply('_Not a ViewOnce Message !_')
            }
    } catch {
      m.reply("_Error !_")
    }
        })
    
    
    cmd({
    pattern: "save",
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
           await client.sendMessage(m.jid, { video :res ,  mimetype:"video/mp4"}, {quoted: m })
          } else if(m.quoted.message.imageMessage){
          await client.sendMessage(m.jid, { image :res ,  mimetype:"image/jpeg"}, {quoted: m })
          }
        
}catch(e){
console.log(e)
reply(`${e}`)
}
});
