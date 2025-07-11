const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: " allmenu",
    category: "allmenu",
    react: "🫅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *𝙲𝙷𝙰𝙼𝙸-𝙼𝙳  (🪀)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *V.1* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

⟣──────────────────⟢

> ☣️ 𝙲𝙷𝙰𝙼𝙸-𝙼𝙳 ☣️ 

⟣──────────────────⟢
${readMore}
\ CHANNEL🛠️\
https://whatsapp.com/channel/0029VbAvLMM0Vyc9KfRBrS3i

\ GROUP\ 👥

[https://chat.whatsapp.com/JXiUr5QkPiw4wGxEZ9Q092?mode=ac_c]

\ 𝙲𝙷𝙰𝙼𝙸-𝙼𝙳\ *Dev🧑‍💻*

wa.me/+94766315540 ?text=Support!

⟣──────────────────⟢

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400240662312@newsletter',
                        newsletterName: '『 ☣️ 𝙲𝙷𝙰𝙼𝙸-𝙼𝙳 🦖 』',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
    
