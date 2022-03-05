const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
sanzy: 'https://zeroyt7-api.xyz',
zenz: 'https://zenzapi.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'gysnzbsja',
'https://zenzapi.xyz': 'f2116e96b4',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'FiraaChann'
global.owner = ['6283830815715']
global.packname = 'Firaa'
global.author = 'Chann'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
