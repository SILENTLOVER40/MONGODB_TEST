const { cmd, commands } = require('../command')

cmd({
  pattern: "vv",
  desc: "read vv",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Check if there is a quoted message and if it's a ViewOnce message
    const viewOnceData = mek.msg.contextInfo?.quotedMessage?.viewOnceMessageV2;

    if (viewOnceData) {
      // If the quoted message is an image
      if (viewOnceData.message.imageMessage) {
        console.log("Quoting an image");
        let caption = viewOnceData.message.imageMessage.caption;
        let savedPath = await conn.downloadAndSaveMediaMessage(viewOnceData.message.imageMessage);

        return conn.sendMessage(mek.chat, {
          image: { url: savedPath },
          caption: caption
        });
      }

      // If the quoted message is a video
      if (viewOnceData.message.videoMessage) {
        let caption = viewOnceData.message.videoMessage.caption;
        let savedPath = await conn.downloadAndSaveMediaMessage(viewOnceData.message.videoMessage);

        return conn.sendMessage(mek.chat, {
          video: { url: savedPath },
          caption: caption
        });
      }
    }

  } catch (error) {
    console.log("Error processing viewOnce message:", error);
  }

  // Handle when the quoted message is not a ViewOnce message
  if (!quoted) {
    return reply("Please reply to a ViewOnce message");
  }

  // Check if the quoted message is a ViewOnce message
  if (quoted.mtype === "viewOnceMessage") {
    console.log("Processing a ViewOnce message");

    // If the ViewOnce message is an image
    if (quoted.message.imageMessage) {
      let caption = quoted.message.imageMessage.caption;
      let savedPath = await conn.downloadAndSaveMediaMessage(quoted.message.imageMessage);

      return conn.sendMessage(mek.chat, {
        image: { url: savedPath },
        caption: caption
      });
    }

    // If the ViewOnce message is a video
    if (quoted.message.videoMessage) {
      let caption = quoted.message.videoMessage.caption;
      let savedPath = await conn.downloadAndSaveMediaMessage(quoted.message.videoMessage);

      return conn.sendMessage(mek.chat, {
        video: { url: savedPath },
        caption: caption
      });
    }
  } else {
    return reply("This is not a ViewOnce message");
  }
});