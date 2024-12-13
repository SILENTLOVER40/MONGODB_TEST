const config = require('../config')
const {cmd , commands} = require('../command')
if (CONFIG.ANTI_FAKE) {
  cmd({
    pattern: "^(?!\\+94|\\+212|\\+263).*",
    desc: "Anti-fake protection",
    category: "system",
    react: "🚫",
    filename: __filename
  }, async (conn, mek, m, { from, reply }) => {
    reply("DM NOT ALLOWED BCZ ANTI_FAKE UNABLE");
    try {
      await conn.updateBlockStatus(from, 'block');
      console.log(`User ${from} blocked successfully.`);
    } catch (error) {
      console.log(`Error blocking user: ${error.message}`);
    }
  });
}
