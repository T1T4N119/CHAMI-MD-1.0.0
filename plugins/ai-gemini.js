const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gemini",
    alias: ["gemini"], 
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://lakiya-api-site.vercel.app/ai/gemini?q=${q}`)
return reply(`${data.result}

> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʜᴀᴍɪ-ᴍᴅ`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "gemini2",
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://dark-shan-yt.koyeb.app/ai/gemini?q=${q}`)
return reply(`${data.data}\n\n> ꜰᴏʀᴡᴀʀᴅ ʙʏ ᴄʜᴀᴍɪ-ᴍᴅ`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
