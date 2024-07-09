//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347045845726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU82a3R6NDZkUzJzVWxJVVA1dmt5THlNWmRibXlZUkcySC8ydWJTckhsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlU4R2Z3UXNpb2diZnk2aDBIL2hqNTB5Rk9xOWtKVFNOWXA2UDBpNWgxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTXJGQlZ6N3NtRUJ2WmZFY3dFZkFTZ2tiUW9aN2RiMG9TdEQzQVhpSW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHelJtSnFmSkM4Z0hrcHlocFhaVjJ2SlJ5R1cyN1JJcEEzczcxVFhTL2c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NWHRsUVZCK29GMlM3ZCsvS0V5QVF3K2FVbW1SUlFFYWJxMkpXY2pLWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR3c2dRK1FibUxzNHBMZlRmaVZMRXZ3ODZUc3d6VmRiTWNuRWd6dTJvRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtEZ1Zzb3lnWXQ5cXFvTStUOEs5TWplV3NSNXFLWU5GU3YrSHY2bzkwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmU5VVNxWS9PRTlFbnVNbk0yaDN2UGZaelVoeSszS0hYWnVzVm1nTDZRUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM5QXF4VElIOGREd01PZ0MyUndiNDNST2pKVm54YloxSE1NcDR6WUd0YURXekhmYnNWaHdKTlVGVGluYm4vT1VBaXRZYzRVTy8wcFpqTkt1MGMzbWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJKbDcyUC9xVVdyM0ZBeUU1c3FtdVlsWFFyQXRrVlRMa1FZMUtaRXI1blc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzN0VBTHlGTVJpaWFscExQRXpZcENnIiwicGhvbmVJZCI6IjA5ZmNiZDgyLWM1ZWMtNGIwNS1hY2JjLWViMWMxNTY2ZDIzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2VFk0Zzl3UzRkRW4vdmNQYjd0eWc3dzg1N3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2VGcWhnbnc3bkZkTkQxU1RZZFlzeFY0THZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkUxQU1aTVI2IiwibWUiOnsiaWQiOiIyMzQ3MDQ1ODQ1NzI2OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiw5fNnMOX4oKmxYLigrXJhuKCssmEyY40NTbDl82cw5cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEb25rb1FnSXkzdEFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9pUVZvMHRhN0FqYktCOUFybTZXOVJsU21sa2hTWjdJT2RJbE1WS0Z4akk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhzVDJtVDZHSTVkcks1eFI0QmJVdlFNTjUvU2xqMFNnRXJjRmF1WmRqY2lSUmtyNDR0WWJKcjMyMnZiSWI0cEIzTGJWMHZRa3k0bWt4YTRoTmZ2UUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsazdLYXlEbEI0QTdWR0FtVXlZQXRNNHZlWFlkVVl0TkFPMzBNZld0TitqZzc5NTdsZmEwOTF5QjExS01UMkZLT3RlYS83NVp5Q21DZTdocFI3S2RpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU4NDU3MjY6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUb2tGYU5MV3V3STJ5Z2ZRSzV1bHZVWlVwcFpJVW1leURuU0pURlNoY1l5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTY3MzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp6bSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Wₐᵣₐᵢ ₒ𝚗ᵢ desu ",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "×͜×-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
