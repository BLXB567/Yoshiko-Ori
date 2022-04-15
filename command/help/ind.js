exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} kamu belum daftar. Ketik .daftar dulu yaa ganteng`
	}
exports.regis = () =>{
	return` Sudah Terdaftar sebelumnya.`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`Working on it...\njika tidak ada respon, fitur ini sedang error.`
	}
exports.ok = () =>{
	return` ✅ Oke done !\nsubscribe\nyoutube.com/c/KYURA`
	}
exports.welcome = () =>{
	return`Selamat Bergabung!`
      }
exports.leave = () =>{
	return`Telah Keluar`
}
exports.donasi = () =>{
	return`*DONASI*\n*💰 E-MONEY*\n1. GOPAY\nㅁ 0819 9890 3280\n2. OVO\nㅁ 0819 9890 3280\n3. DANA\nㅁ 0819 9890 3280\n4. SAWERIA\nㅁ saweria.co/ArdhiRahma\n*Sebelum melakukan pembayaran ada baiknya anda menghubungi owner terlebih dahulu!* Klik Button atau ketik *.owner*`
}
exports.linkgc = () =>{
	return`Join Group Bot Raiden kak\ndisana ada seputar info bot\nhttps://chat.whatsapp.com/DtitNHIhu8OGUtu6u4ZtNI`
}
exports.ping = () =>{
	return`-- *PING RAIDEN* --\n999.99999999 ms\n*Perangkat* : Linux\n*Status* : Public\n*Runtime* : tahun 845 - 2022\n*Didukung Oleh* : Heroku.com\n*Dibantu Oleh* : iluser, ZoeDev, Zeeone, Nekopoi, Nurutomo.`
}
exports.info = () =>{
	return`-- *INFO RAIDEN* -- \n*Perangkat* : Linux\n*Status* : Public\n*Runtime* : tahun 845 - 2022\n*Didukung Oleh* : Heroku.com\n\n-- *CREDITS* --\n*Dibantu Oleh* : iluser, ZoeDev, Zeeone, Nekopoi, Nurutomo\nBase RaidenBot Dari Haruka oleh zeeone ofc\nRecode Haruka ke RaidenBot oleh Kyura\nYT Zeeone :https://www.youtube.com/c/ZEEONEOFC\nYT Kyura: https://www.youtube.com/c/KYURA\n*GH Zeeone*: https://github.com/zeeone-ofc/\nGH Kyura: https://github.com/KyuraSaja\nBase Haruka : https://github.com/zeeone-ofc/Haruka\nSource Code Raiden : Masih orek orek alias pengembangan`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Halo kak *${pushname}*, Selamat menunaikan ibadah puasa 1443 H bagi yang merayakan.
Bulan penuh berkah dan ampunan, bersihkan diri, jernihkan hati, 
dekatkan diri pada Ilahi:)

Selamat *${salam}*
Join Grup _bot_ kak, ketik *${prefix}grupraiden*

-- *List Menu* --

- *${prefix}menugrup*
untuk menampilkan fitur yang berguna di grup whatsapp kamu.
cth : tagall

- *${prefix}menupermainan* (BETA)
untuk menampilkan fitur bermain bersama bot.
cth : tebakgambar

- *${prefix}menudownload*
untuk menampilkan fitur download seperti mencari lagu di youtube dari bot ini.
cth : ytmp3

- *${prefix}menuporno*
untuk menampilkan fitur porno di bot ini dan tidak disarankan untuk mencoba.
cth : perkembang biakan makhluk hidup

- *${prefix}menuanime*
untuk menampilkan fitur mencari gambar karakter anime.
cth : tsunade

- *${prefix}menutools*
untuk menampilkan fitur alat seperti membuat stiker dari bot ini.
cth : stiker

- *${prefix}menuedukasi*
untuk menampilkan fitur edukasi pembelajaran dari bot ini.
cth : nulis

- *${prefix}menuphoto360*
untuk menampilkan fitur membuat teks photo360 yang keren dari bot ini.
cth : blackpink

- *${prefix}menutextpro*
untuk menampilkan fitur pembuat text yang unik dari bot ini.
cth : coba aja sendiri pasti tau XD
`
}
exports.menugrup = (prefix) =>{
	return`
-- *Menu Grup* --
${prefix}grup close/open
${prefix}jadian
${prefix}hidetag [text]
${prefix}linkgrup
${prefix}tagall
${prefix}setdesc [text] 
${prefix}setname [text]
${prefix}antilink (dihapus, kena resiko banned)


`
}
exports.menupermainan = (prefix) =>{
	return`
-- *Menu Permainan* --
${prefix}tebakgambar 
${prefix}tebakkata (Baru)
${prefix}susunkalimat (Segera hadir)


`
}

exports.menudownload = (prefix) =>{
	return`
-- *Menu Download* --
${prefix}play [pencarian] (Beta)
${prefix}song [judul lagu]
${prefix}pinterest [pencarian]
${prefix}ytmp3 [url]
${prefix}ytmp4 [url]
${prefix}tiktok [url] (Perbaikan)
${prefix}tiktoknowm [url] (Perbaikan)
${prefix}tiktokwm [url] (Perbaikan)
${prefix}tiktokaudio [url] (Perbaikan)
${prefix}soundcloud [url]
${prefix}telesticker [url]
${prefix}spotify [url]
${prefix}spotifysearch [query]
${prefix}nhentai [code]
${prefix}nhentaipdf [code]
${prefix}nhentaisearch [query]

*MAAF, FITUR TIKTOK MASIH ERROR, SABAR.*

`
}
exports.menuanime = (prefix) =>{
	return`
-- *Gambar Anime* --
${prefix}nami 
${prefix}copper 
${prefix}naruto 
${prefix}zoro 
${prefix}ussop 
${prefix}minato 
${prefix}sasuke 
${prefix}sakura
${prefix}luffy 
${prefix}sanji 
${prefix}boruto 
${prefix}sarada 
${prefix}mitsuki 
${prefix}orochimaru 
${prefix}tsunade 
${prefix}kakashi 
${prefix}killua 
${prefix}gon 
${prefix}rimuru 
${prefix}sagiri 
${prefix}natsu 
${prefix}tanjirou 
${prefix}nezuko 
${prefix}senku


`
}
exports.menutools = (prefix) =>{
	return`
-- *Menu Alat* --
${prefix}stiker [video/image]
${prefix}semoji 😎
${prefix}smeme [text]
${prefix}memegen [text|text2]
${prefix}fast [video/vn]
${prefix}tupai [video/vn]
${prefix}vibra [video/vn]
${prefix}robot [video/vn]
${prefix}slow [video/vn]
${prefix}bass [video/vn]
${prefix}nightcore [video/vn]


`
}
exports.menuedukasi = (prefix) =>{
	return`
-- *Menu Edukasi* --
${prefix}nuliskiri [text]
${prefix}nuliskanan [text]
${prefix}foliokiri [text]
${prefix}foliokanan [text]


`
}
exports.menuphoto360 = (prefix) =>{
	return`
-- *Pembuat Ephoto360* --
${prefix}wetglass
${prefix}multicolor3d
${prefix}watercolor
${prefix}luxurygold
${prefix}galaxywallpaper
${prefix}lighttext
${prefix}beautifulflower
${prefix}puppycute
${prefix}royaltext
${prefix}heartshaped
${prefix}birthdaycake
${prefix}galaxystyle
${prefix}hologram3d
${prefix}greenneon
${prefix}glossychrome
${prefix}greenbush
${prefix}metallogo
${prefix}noeltext
${prefix}glittergold
${prefix}textcake
${prefix}starsnight
${prefix}wooden3d
${prefix}textbyname
${prefix}writegalacy
${prefix}galaxybat
${prefix}snow3d
${prefix}birthdayday
${prefix}goldplaybutton
${prefix}silverplaybutton
${prefix}freefire


`
}
exports.menutextpro = (prefix) =>{
	return`
-- *Pembuat TextPro* --
${prefix}blackpink
${prefix}neon
${prefix}greenneon
${prefix}advanceglow
${prefix}futureneon
${prefix}sandwriting
${prefix}sandsummer
${prefix}sandengraved
${prefix}metaldark
${prefix}neonlight
${prefix}holographic
${prefix}text1917
${prefix}minion
${prefix}deluxesilver
${prefix}newyearcard
${prefix}bloodfrosted
${prefix}halloween
${prefix}jokerlogo
${prefix}fireworksparkle
${prefix}natureleaves
${prefix}bokeh
${prefix}toxic
${prefix}strawberry
${prefix}box3d
${prefix}roadwarning
${prefix}breakwall
${prefix}icecold
${prefix}luxury
${prefix}cloud
${prefix}summersand
${prefix}horrorblood
${prefix}thunder


`
}
exports.menuporno = (prefix) =>{
return`
-- *Menu Porno* --
*FITUR INI SEDANG KENA UUD pasal 1000 ayat gatau*
barang siapa menonton/melihat porno maka akan dihantui genderuwo atau gak nikah


`
	}
