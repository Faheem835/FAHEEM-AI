const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAHEEM-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xGcFVvR1dVcDZYaWs4RGZzaXVaK2xSdVdiTVd6b3ZYN0N4TWxLbzNtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFJQQXNIUE40cjk4YkZMZGwwTHRDblR4Vzk3dVVrakRneHg3eUduRDhIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQm1tVGMxZUh6aEhpS0VrYzI5UXpuRFJDc0J0YmpRQ0tQcjBUWHdZUm5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRTQ2clZ6N01mbVlYTlBEd3BxdlcxbXpwTWhTUjluSmVhdjUvT0tQdjE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMOEhkQm5PQVlZUXdHY0grY1FkdE5kcHIrd2JXZzQ3S0pQVFk3aXNLWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIyd0JhQnB4Z1dSMlhYRCs4aUlsT1RJc0x0UENlWUFyTlM4elAweDNhVUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlUd1Y1cDFVZlNjZDh0RURWTTk4Wno1dEFJeVROWko4VzdaQlYvZWtVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWxQdUgwbEZYUm9XVXhpOWNiM09WS3JYc1dQb2tIVlJmV01nTktXUGJ6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVHTExsMkVxTG5ScmE0TUNpSlhYWjdkRTlWSlZGaS9IbFJ1VENOU3NkVVhtT2hJejhJN25BVnllODdpL1hQSnNWUEpkUEw3ZkpITWkrdFZoZVJNMWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IkZlSFBFVnV2SFBxTlRLTldQMm4vVW5iTzRVYWV4NGRaem5jcUl1aDV6Mlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY4MDY0MzY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTg3RTM1MUJBNEY1N0U2QTg2RjM1M0FGREY2NzgxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk3NTE1ODJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2ODA2NDM2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzBFOEY4RTNGQkMxOTM1REQ2MkQ2MUNDOTRCNkIyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY5NzUxNTg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjgwNjQzNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBQUY4OUJCMDM5NjI2M0Y2OUIyNzgzNEM5MDU5OUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2OTc1MTU4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY4MDY0MzY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMzYyQUM3M0UwRUMzQjdGMDAzRTEwRjdDNkIzMDhCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk3NTE1ODV9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzM2ODA2NDM2OToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc4ODU2MDYxMzI1NTQ2OjFAbGlkIiwibmFtZSI6IuKLhvCdhrzqr63wnZCMz4XJvPCdl4zJpvCdm4LNnPCdlr3wnYa86q+t4Z+O4Z+O6q+t4oOq4oOqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOenY4Y0FHRUl5SThjc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDSVpoZ2Z4SmdWbVU4Z0dHTHRGaDFwVThHZEpEV3ZOU0dNUGNoQ3dIOHlnPSIsImFjY291bnRTaWduYXR1cmUiOiJUQ0ZjT0cwb0tUSTVxWGUrNHkyMmZkLytJM0dkWU5hbGpqZGFLVzhqLzhDZVM3K0pEMXZSVmQzK3ZET0pIcGRTM05rNitDUUtEOXlnWFZKdDhYUkREQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOHd0MjJBcHMxdlZZQ3RIbWZLR0g1ekRRS3VZbWkxbFUzWWhpbUlxZnRPdWpaRC93SHFVUEpqa211NFhKbjZPdVJvK2JUVVZ3aHkrbVVjTGprU3E1aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNjgwNjQzNjk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRaUdZWUg4U1lGWmxQSUJoaTdSWWRhVlBCblNRMXJ6VWhqRDNJUXNCL01vIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njk3NTE1NzgsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2JVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAHEEM🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hg5hj6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FAHEEM-AI",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "FAHEEM-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "61480853796",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "FAHEEM",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ғᴀʜᴇᴇᴍ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/a6d73s.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive 🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "61480853796",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
