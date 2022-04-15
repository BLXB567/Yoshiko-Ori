require('./settings/config.js')
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const { banner, getBuffer, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const CFonts  = require('cfonts')
const { uploadImages } = require('./lib/uploadimage')

require('./command/case.js')
nocache('./command/case.js', module => console.log(`${module} is now updated!`))

const starts = async (kyura = new WAConnection()) => {
    kyura.logger.level = 'warn'
    kyura.version = [2, 2143, 3]
    kyura.browserDescription = [ 'RaidenBotWA', 'Chrome', '3.0' ]
	CFonts.say('- RAIDEN -', {
		font: 'block',
    	color: ['#ff9c00'],
    	align: 'center',
		})
	CFonts.say(`Bot WhatsApp Created By Kyura`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
		
    kyura.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan qr maks 20 detik sebelum qr expired'))
    })

    fs.existsSync('./session.json') && kyura.loadAuthInfo('./session.json')
    kyura.on('connecting', () => {
        start('2', 'Connecting...')
    })
    kyura.on('open', () => {
        success('2', 'Connected')
    })
    await kyura.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(kyura.base64EncodedAuthInfo(), null, '\t'))

    kyura.on('chat-update', async (message) => {
        require('./command/case.js')(kyura, message)
    })

	kyura.on('group-participants-update', async (anu) => {
		console.log(anu)
		try {
						const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await kyura.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							kyura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const mdata = await kyura.groupMetadata(anu.jid)
						num = anu.participants[0]
						let v = kyura.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
						try {
							ppmem = await kyura.getProfilePicture(num);
							} catch (e) {
								ppmem = 'https://telegra.ph/file/f8df36078279304745bae.png'
								}
						try {
							ppgc = await kyura.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://telegra.ph/file/d4c05638fa7886a1d8060.jpg'
								}
						let ppmem2 = await getBuffer(ppmem)
						let ppmem3 = await uploadImages(ppmem2)
						let ppgc2 = await getBuffer(ppgc)
						let ppgc3 = await uploadImages(ppgc2)
						let gakloo = [{
										"buttonId": `.menu`,
										"buttonText": {
											"displayText": "Halooo kak 👋"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(kyura.user.jid)) {
							welcome = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/welcome2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome() + 'aku adalah bot, silahkan ketik /menu untuk memulai', `by ${ownername}`,welcome, [{"buttonId": `menu`,"buttonText": {"displayText": "Mat Datang 🙋🏻‍♀️"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome() + 'aku adalah bot, silahkan ketik /menu untuk memulai', `by ${ownername}`,ppmem2, [{"buttonId": `menu`,"buttonText": {"displayText": "Welcome 🙋🏻‍♀️"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(kyura.user.jid)) {
							goodbye = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/goodbye2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n⌯ָ   ֙Leave from group:\n${mdata.subject}` + '\n' + lang.leave(), `by ${ownername}`,goodbye, [{"buttonId": `menu`,"buttonText": {"displayText": "Bye 🕺🏻"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n⌯ָ   ֙Leave from group:\n${mdata.subject}` + '\n' + lang.leave(), `By ${ownername}`,ppmem2, [{"buttonId": `menu`,"buttonText": {"displayText": "Bye 🕺🏻"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
		})
}
	
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
