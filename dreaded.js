
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud");
// const node = require("node-fetch-commonjs");
const ytdl = require("ytdl-core");
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
const { fetchUrl, isUrl, processTime } = require("./lib/dreadfunc");
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/dreadupload');
const { Configuration, OpenAIApi } = require("openai");
let setting = process.env.AI; 
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/dreadfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = dreaded = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
   // leave the prefix string empty if you don't want the bot to use a prefix
    const prefix = process.env.PREFIX || '.';
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'TRUE';
    const cmd = body.startsWith(prefix);
//const autobio = process.env.AUTOBIO || 'TRUE';
const botname = process.env.BOTNAME || 'DREX AI';
const antibot = process.env.ANTIBOT || 'FALSE';
  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
    const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 
 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    const author = process.env.STICKER_AUTHOR ||'PRIME_𝐀𝐈';
    const packname = process.env.STICKER_PACKNAME || 'Prime';
const dev = process.env.DEV || '254740782927'

const menu = process.env.MENU_TYPE || 'VIDEO';
 const DevDreaded = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'TRUE';
   const bad = process.env.BAD_WORD || 'fuck';
    const autoread = process.env.AUTOREAD || 'FALSE';
    const badword = bad.split(",");
    const Owner = DevDreaded.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
const admin = process.env.ADMIN_MSG || '𝐅𝐚𝐢𝐥𝐮𝐫𝐞!, 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐭𝐨𝐨 𝐲𝐨𝐮𝐧𝐠 𝐭𝐨 𝐝𝐨 𝐭𝐡𝐚𝐭🦄';
    const group = process.env.GROUP_ONLY_MSG || 'Is this a group chat?';
    const botAdmin = process.env.BOT_ADMIN_MSG || '𝐅**𝐤 𝐲𝐨𝐮 🦄𝐚𝐦 𝐚𝐧 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Lol you are not ا۬͢𝆺𝅥⃝🏴‍☠️𝄄꯭𝙎𝙊𝙈𝙄𝙔𝝙'᭄͢ 🇺🇸𝙉𝜩‌𝙂𝙄ẞ';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " 𝐝𝐚𝐲, " : " 𝐃𝐚𝐲, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " 𝐡𝐨𝐮𝐫, " : " 𝐇𝐨𝐮𝐫𝐬, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " 𝐦𝐢𝐧𝐮𝐭𝐞, " : " 𝐌𝐢𝐧𝐮𝐭𝐞𝐬, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " 𝐬𝐞𝐜𝐨𝐧𝐝" : " 𝐒𝐞𝐜𝐨𝐧𝐝𝐬") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
  
 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 
 
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

if (wapresence === 'recording' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
    }
    



    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;



  
  
 

         
function _0x4f1b(_0x44e88, _0x1e223f) {
    var _0x3db626 = _0x11cc();
    return _0x4f1b = function (_0x2e8ed0, _0x5cd594) {
        _0x2e8ed0 = _0x2e8ed0 - (0x13bd + 0xcbb * 0x3 + -0x38ae);
        var _0x1e37b8 = _0x3db626[_0x2e8ed0];
        return _0x1e37b8;
    }, _0x4f1b(_0x44e88, _0x1e223f);
}
var _0x2e16c2 = _0x4f1b;
function _0x11cc() {
    var _0x4506b9 = [
        'length',
        '4NTZryU',
        'BAE5',
        '1565770bnKzAf',
        'sender',
        'groupParti',
        'split',
        '84AXXWgJ',
        '4435424UJQIXb',
        'y\x20PRIME\x20',
        'TRUE',
        'tibot:\x0a\x0a@',
        '\x20as\x20a\x20bot.',
        '2LGBzpD',
        'sendMessag',
        'ate',
        '\x20Removed\x20b',
        '\x20unnecessa',
        '5880358pnqlFT',
        'cipantsUpd',
        '356958TiEbec',
        '\x20has\x20been\x20',
        'chat',
        'ry\x20spam!',
        'remove',
        'identified',
        '3301765GBoZYn',
        'to\x20prevent',
        'isGroup',
        '184473FwtnYZ',
        '18szWhmE',
        'startsWith',
        'PRIME_𝐀𝐈\x20an',
        '376590puyzhN',
        'key'
    ];
    _0x11cc = function () {
        return _0x4506b9;
    };
    return _0x11cc();
}
(function (_0xb3d1a0, _0x4f6370) {
    var _0x132d30 = _0x4f1b, _0x276ffb = _0xb3d1a0();
    while (!![]) {
        try {
            var _0x5a0c14 = -parseInt(_0x132d30(0x161)) / (0x1102 + 0x227 * 0x11 + -0x3598) * (-parseInt(_0x132d30(0x14d)) / (-0x2 * -0x1231 + 0x1 * 0xca + -0x252a * 0x1)) + parseInt(_0x132d30(0x15d)) / (-0x23 * -0xb7 + -0x141 * 0x3 + -0x153f) + parseInt(_0x132d30(0x141)) / (-0x2489 + 0x1cdf * -0x1 + 0x4 * 0x105b) * (parseInt(_0x132d30(0x15a)) / (-0x2 * -0xe87 + 0x22 * 0xb + -0x1e7f)) + -parseInt(_0x132d30(0x154)) / (-0x2c2 + 0x22 + -0xe2 * -0x3) * (-parseInt(_0x132d30(0x147)) / (0x58 * -0x4a + -0x8fd + 0x2274)) + -parseInt(_0x132d30(0x148)) / (0x2 * -0xc9a + 0x685 * -0x4 + 0x3350) + parseInt(_0x132d30(0x15e)) / (-0x427 * 0x3 + -0x1fd3 * 0x1 + -0x5 * -0x8dd) * (-parseInt(_0x132d30(0x143)) / (-0x1d65 + -0x26eb + 0x2 * 0x222d)) + -parseInt(_0x132d30(0x152)) / (-0x16d4 + 0x8 * -0x11f + 0x1fd7);
            if (_0x5a0c14 === _0x4f6370)
                break;
            else
                _0x276ffb['push'](_0x276ffb['shift']());
        } catch (_0x18afd9) {
            _0x276ffb['push'](_0x276ffb['shift']());
        }
    }
}(_0x11cc, 0x186eb * 0x4 + 0x24 * 0x9e + -0xb * -0x17e));
antibot === _0x2e16c2(0x14a) && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142)) && m[_0x2e16c2(0x15c)] && !isAdmin && isBotAdmin && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)] === -0xe50 + -0x57a * -0x4 + 0x4 * -0x1e2 && (kidts = m[_0x2e16c2(0x144)], client[_0x2e16c2(0x14e) + 'e'](m[_0x2e16c2(0x156)], {
    'text': _0x2e16c2(0x160) + _0x2e16c2(0x14b) + kidts[_0x2e16c2(0x146)]('@')[-0x12da + 0x247c + -0x25 * 0x7a] + (_0x2e16c2(0x155) + _0x2e16c2(0x159) + _0x2e16c2(0x14c) + _0x2e16c2(0x150) + _0x2e16c2(0x149) + _0x2e16c2(0x15b) + _0x2e16c2(0x151) + _0x2e16c2(0x157)),
    'contextInfo': { 'mentionedJid': [kidts] }
}, { 'quoted': m }), await client[_0x2e16c2(0x145) + _0x2e16c2(0x153) + _0x2e16c2(0x14f)](m[_0x2e16c2(0x156)], [kidts], _0x2e16c2(0x158)));
if (budy.startsWith('>')) { 
   if (!Owner) return;
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
 



    if (gptdm === 'TRUE' && m.chat.endsWith("@s.whatsapp.net")) {

  	

  // if (!text) return reply("I need more text. For better experience with my inbox AI make longer statements.");

           const configuration = new Configuration({

              apiKey: setting,

            });

            const openai = new OpenAIApi(configuration);

            try {

const response = await openai.createChatCompletion({

          model: "gpt-3.5-turbo",

          messages: [{role: "user", content: text}],

          });

          m.reply(`${response.data.choices[0].message.content}`);

          } catch (error) {

          if (error.response) {

            console.log(error.response.status);

            console.log(error.response.data);

            console.log(`${error.response.status}\n\n${error.response.data}`);

          } else {

            console.log(error);

            m.reply("I\'m Facing An Error:"+ error.message);

          }

          }

    }
if (badwordkick === 'TRUE' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
            
     client.groupParticipantsUpdate(from, [sender], 'remove')
            reply("Au revoir.\n\nBot owner hates usage of bad words!")
            
        
                                                   }
    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 kid = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`Adiós:\n\n@${kid.split("@")[0]}, sending group links is prohibited here!`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   

if (antilink === 'TRUE' && antilinkall === 'TRUE' && body.includes('http') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 ki = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`Auf wiedersehen:\n\n@${ki.split("@")[0]}, sending links is prohibited in this group!`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   
  
  
  

    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ CROWN-AI ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (cmd) {
      switch (command) {
      case "help":
        case "menu":
let cap = `╭════〘 PRIME 𝐁𝐎𝐓 〙═⊷❍
┃𒁷╭──────────────
┃𒁷│ 𝗢𝗪𝗡𝗘𝗥 : ا۬͢𝆺𝅥⃝🏴‍☠️𝄄꯭𝙎𝙊𝙈𝙄𝙔𝝙'᭄͢ 🇺🇸𝙉𝜩‌𝙂𝙄ẞ
┃𒁷│ 𝗨𝗦𝗘𝗥 : ${m.pushName}︎︎
┃𒁷│ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 :${runtime(process.uptime())}
┃𒁷│ 𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠 : 𝐋𝐢𝐧𝐮𝐱
┃𒁷│ 𝗥𝗔𝗠 : 64GB of 256GB
┃𒁷│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝐯𝟏.𝟎.𝟏
┃𒁷│ 𝗣𝗥𝗘𝗙𝗜𝗫 : ${prefix}
┃𒁷│ 𝗦𝗣𝗘𝗘𝗗 :  ${dreadedspeed.toFixed(4)} 𝐌𝐒
┃𒁷│
┃𒁷│▎▍▌▌▉▏▎▌▉▐▏▌
┃𒁷│▎▍▌▌▉▏▎▌▉▐▏▌
┃𒁷│ 𒁷PRIME_𝐀𝐈𒁷
┃𒁷│
┃╰─────
╰─────────────────❍
╭════〘 𒁷︎︎𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𒁷︎︎ 〙════⊷❍
▯╭────────────···▸
┴𒁷│
┃𒁷│𝐀𝐃𝐌𝐈𝐍
┃𒁷│𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓
┃𒁷│𝐉𝐎𝐈𝐍
┃𒁷│𝐁𝐎𝐓𝐏𝐏
┃𒁷│>
┃𒁷│𝐒𝐄𝐓𝐕𝐀𝐑
┃𒁷│𝐁𝐋𝐎𝐂𝐊
┃𒁷│𝐊𝐈𝐋𝐋
┃𒁷│𝐔𝐍𝐁𝐋𝐎𝐂𝐊
┃𒁷│𝐑𝐄𝐒𝐓𝐀𝐑𝐓
┬✯│
│╰─────────────────❍
╰══════════════════⊷❍

╭════〘 𒁷𝗘𝗗𝗜𝗧𒁷〙════⊷❍
▯╭─────────────···▸
┴𒁷│
┃𒁷│𝐒𝐓𝐈𝐂𝐊𝐄𝐑
┃𒁷│𝐓𝐎𝐈𝐌𝐆
┃𒁷│𝐔𝐏𝐋𝐎𝐀𝐃
┃𒁷│𝐒𝐌𝐄𝐌𝐄
┬✯│
│╰─────────────────❍
╰══════════════════⊷❍

╭════〘 𒁷𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𒁷〙════⊷❍
▯╭─────────────···▸
┴𒁷│
┃𒁷│𝐏𝐋𝐀𝐘
┃𒁷│𝐖𝐇𝐀𝐓𝐒𝐎𝐍𝐆
┃𒁷│𝐘𝐓𝐒
┃𒁷│𝐘𝐓𝐌𝐏3
┃𒁷│𝐘𝐓𝐌𝐏4
┃𒁷│𝐋𝐘𝐑𝐈𝐂𝐒
┃𒁷│𝐌𝐎𝐕𝐈𝐄
┃𒁷│𝐌𝐈𝐗
┬✯│
│╰─────────────────❍
╰══════════════════⊷❍

╭════〘 𒁷𝗔𝗜𒁷〙════⊷❍
▯╭─────────────···▸
┴𒁷│
┃𒁷│𝐀𝐈                                                                                                                                                                                                                                                                                   
┃𒁷│𝐆𝐏𝐓
┃𒁷│𝐆
┃𒁷│𝐈𝐌𝐆
┬✯│
│╰─────────────────❍
╰══════════════════⊷❍

╭════〘 𒁷𝗖𝗢𝗗𝗜𝗡𝗚𒁷〙════⊷❍
▯╭─────────────···▸
┴𒁷│
┃𒁷│𝐄𝐍𝐂
┃𒁷│𝐂𝐎𝐌𝐏𝐈𝐋𝐄-𝐏𝐘
┃𒁷│𝐂𝐎𝐌𝐏𝐈𝐋𝐄-𝐉𝐒
┃𒁷│𝐂𝐎𝐌𝐏𝐈𝐋𝐄-𝐂
┃𒁷│𝐂𝐎𝐌𝐏𝐈𝐋𝐄-𝐂++
┬✯│
│╰─────────────────❍
╰══════════════════⊷❍

╭════〘 𒁷𝗢𝗧𝗛𝗘𝗥𝗦𒁷〙════⊷❍
▯╭─────────────···▸
┴𒁷│
┃𒁷│𝐌𝐄𝐍𝐔
┃𒁷│𝐏𝐈𝐍𝐆
┃𒁷│𝐒𝐏𝐄𝐄𝐃
┃𒁷│𝐀𝐋𝐈𝐕𝐄
┃𒁷│𝐑𝐔𝐍𝐓𝐈𝐌𝐄
┃𒁷│𝐃𝐏
┃𒁷│𝐂𝐑𝐄𝐃𝐈𝐓𝐒
┃𒁷│𝐎𝐖𝐍𝐄𝐑
┃𒁷│𝐋𝐈𝐒𝐓
┃𒁷│𝐌𝐀𝐈𝐋
┃𒁷│𝐈𝐍𝐁𝐎𝐗
┃𒁷│𝐐𝐔𝐎𝐓𝐄𝐋𝐘
┃𒁷│𝐒𝐂𝐑𝐈𝐏𝐓
┃𒁷│SOMIYA
┃𒁷│PRIME
┃𒁷│𝐒𝐂
┬✯│
│╰─────────────────❍
╭════〘 𒁷𝗚𝗥𝗢𝗨𝗣𒁷 〙════⊷❍
▯╭─────────────···▸
┃𒁷│𝐏𝐑𝐎𝐌𝐎𝐓𝐄
┃𒁷│𝐃𝐄𝐌𝐎𝐓𝐄
┃𒁷│𝐃𝐄𝐋𝐄𝐓𝐄
┃𒁷│𝐑𝐄𝐌𝐎𝐕𝐄
┃𒁷│𝐅𝐎𝐑𝐄𝐈𝐆𝐍𝐄𝐑𝐒
┃𒁷│𝐅𝐀𝐊𝐄𝐑
┃𒁷│𝐂𝐋𝐎𝐒𝐄
┃𒁷│𝐎𝐏𝐄𝐍
┃𒁷│𝐃𝐈𝐒𝐏-𝐎𝐅𝐅
┃𒁷│𝐃𝐈𝐒𝐏-7
┃𒁷│𝐃𝐈𝐒𝐏-90
┃𒁷│𝐈𝐂𝐎𝐍
┃𒁷│𝐒𝐔𝐁𝐉𝐄𝐂𝐓
┃𒁷│𝐃𝐄𝐒𝐂
┃𒁷│𝐋𝐄𝐀𝐕𝐄
┃𒁷│𝐓𝐀𝐆𝐀𝐋𝐋
┃𒁷│𝐇𝐈𝐃𝐄𝐓𝐀𝐆
┃𒁷│𝐑𝐄𝐕𝐎𝐊𝐄
┃𒁷│
┃𒁷╰───────────────❍
╰════════════════⊷❍`;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./drex-ai menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24b7277d1e9ddf0ec6406.jpg' }, caption: cap, fileLength: "9999999999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `PRIME_𝐀𝐈`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./crown.jpg'),
                                sourceUrl: 'https://wa.me/254740782927?text=ʜᴇʟʟᴏ+ا۬͢𝆺𝅥⃝🏴‍☠️𝄄꯭𝙎𝙊𝙈𝙄𝙔𝝙'᭄͢ 🇺🇸𝙉𝜩‌𝙂𝙄ẞ+Nihostie+Bot+Mkuu+🥲',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
          // Group Commands
break;


case "advice":
reply(advice());
console.log(advice());

break;

case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });

break;

case "drex":
const _0x3cfb2e = _0x5913;
(function (_0x573879, _0x548047) {
    const _0x197f5a = _0x5913, _0x32c565 = _0x573879();
    while (!![]) {
        try {
            const _0x4329f0 = parseInt(_0x197f5a(0x8f)) / (0x1d * 0x10d + 0x1 * 0x9c2 + -0x283a) + -parseInt(_0x197f5a(0x7e)) / (0x11c0 + -0x1c60 + 0xaa2) * (-parseInt(_0x197f5a(0x76)) / (0x523 * -0x3 + 0x8b * 0x13 + 0x51b * 0x1)) + -parseInt(_0x197f5a(0x7b)) / (0x21ab + 0x1da2 + -0x3f49) + -parseInt(_0x197f5a(0x89)) / (-0x2 * -0x35e + 0x4db + -0xb92) + -parseInt(_0x197f5a(0x90)) / (0x1 * 0x2cd + -0xd * 0xd6 + 0x817) * (parseInt(_0x197f5a(0x74)) / (-0x1 * -0x7a2 + -0x7ca + 0x2f)) + parseInt(_0x197f5a(0x88)) / (-0x1727 + 0x133b * -0x1 + 0xb2 * 0x3d) + parseInt(_0x197f5a(0x86)) / (0x4f0 + 0x1618 + -0x1aff) * (parseInt(_0x197f5a(0x80)) / (0x4fd * -0x1 + -0x4af + 0x9b6));
            if (_0x4329f0 === _0x548047)
                break;
            else
                _0x32c565['push'](_0x32c565['shift']());
        } catch (_0x53362d) {
            _0x32c565['push'](_0x32c565['shift']());
        }
    }
}(_0x2de4, 0x10d265 + 0xf553f + -0x3 * 0x6f4b7));
function _0x5913(_0x42146b, _0x4f6baa) {
    const _0x187fad = _0x2de4();
    return _0x5913 = function (_0x4adfb, _0x41c07d) {
        _0x4adfb = _0x4adfb - (0xdee + -0x141 * 0x5 + -0x735);
        let _0x19fd6d = _0x187fad[_0x4adfb];
        return _0x19fd6d;
    }, _0x5913(_0x42146b, _0x4f6baa);
}
if (!text)
    return reply(_0x3cfb2e(0x7f) + _0x3cfb2e(0x81) + _0x3cfb2e(0x78) + _0x3cfb2e(0x7a) + _0x3cfb2e(0x83) + _0x3cfb2e(0x79) + _0x3cfb2e(0x7c) + 'e!');
const {bardAI, bardAsk} = require(_0x3cfb2e(0x87));
let sessionCookies = JSON[_0x3cfb2e(0x8a)](fs[_0x3cfb2e(0x8d) + 'nc'](__dirname + (_0x3cfb2 
