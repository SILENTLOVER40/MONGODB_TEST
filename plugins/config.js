const config = require('../config')
const {cmd , commands} = require('../command')
let fs = require('fs')

cmd({
  pattern: "update",
  desc: "Update config settings.",
  category: "owner",
  react: "🔧",
  filename: __filename
}, async (conn, mek, m, { from, isOwner, reply }) => {
  if (!isOwner) return reply("❌ You are not the owner!");
  const args = m.text.split(" ");
  if (args.length < 3) return reply("❌ Invalid format. Use `.update <setting> <value>`.");
  const setting = args[1];
  const value = args[2];
  // Update config setting
  const config = require('../config.json');
  config[setting] = value;
  require('fs').writeFile('../config.json', JSON.stringify(config, null, 2), (err) => {
    if (err) console.error(err);
  });
  reply(`🔧 Config setting ${setting} updated to ${value}.`);
});
