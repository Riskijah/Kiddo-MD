const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Cikoo'
global.namaowner = 'Gickoo'

//—————「 Setting Owner 」—————//
global.owner = '6283873407979'
global.ownernomer = ["6283873407979"]
global.premium = ['6283873407979']

//—————「 Set Wm 」—————//
global.packname = 'CikooBaikkk'
global.author = 'Gickoo'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Selesai ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Bot Must Be Admin',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*Warning❗ Error Feature❗*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/54bdfdfaeadbda3984b82.jpg'
global.isLink = `linktr.ee/gickops`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
