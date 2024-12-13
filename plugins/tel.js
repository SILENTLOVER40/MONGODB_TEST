const config = require('../config')
const { cmd, commands } = require('../command')
const { TelegraPh } = require('../lib/scraper')
const util = require('util')
const fs = require('fs')

cmd({
  pattern: "url",
  alias: ['createurl'],
  category: "misc",
  filename: __filename,
  desc: "Image to URL."
},
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  if (!quoted) return await return reply(`*Reply To Any Image/Video To Get Url*`)
  let mime = citel.quoted.mtype
  if (mime != 'videoMessage' && mime != 'imageMessage') return await reply("Uhh Please, Reply To An Image/Video")
  let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
  let anu = await TelegraPh(media);
  await reply('*Here is URL of your media.\n' + util.format(anu));
  return await fs.unlinkSync(media);
});
