const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "pair",
    alias: ["register","link"],
    react: "🔢",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("*Example - :* .pair +923096287432")
const pair = await fetchJson(`https://silent-md.onrender.com/code?number=${q}`)
const done = `_*SILENT-SOBX-MD PAIRED SUCCESSFULLY ...✅*_`

const pir = pair.code
m.reply(`${pir}\n\n${done}`)
} catch (e) {
console.log(e)
reply(e)
}}
)
