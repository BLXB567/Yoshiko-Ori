const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="RaidenBot Powered By K Y U R A"
global.ownernumberr = ['6281998903280', '16124515978']
global.ownernumber = "16124515978"
global.botname = "RaidenBot"
global.packname = 'RaidenBot Powered By K Y U R A'
global.author = 'Find MyBot at bit.ly/telekanao'
global.thumbnail = fs.readFileSync("./settings/icon1.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/af5c140fee9800a1a21a0.jpg"
global.lolkey = 'RIFQIBOTZ' //apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
