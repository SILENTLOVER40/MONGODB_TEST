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
}, async (Void, citel, text) => {
  if (!citel.quoted) return await citel.reply(`*Reply To Any Image/Video To Get Url*`)
  let mime = citel.quoted.mtype
  if (mime != 'videoMessage' && mime != 'imageMessage') return await citel.reply("Uhh Please, Reply To An Image/Video")
  let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
  let anu = await TelegraPh(media);
  await citel.reply('*Here is URL of your media.\n' + util.format(anu));
  return await fs.unlinkSync(media);
});
