let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '15'
let info = `

*â«¹â«º Halo Kak Welcome Store Oscar*
 â«¹â«º ðð¦ð®ð¦ð¯ðµð¢ð³ð¢ ððµð°ð³ð¦ Raffa Botz ð©ð¢ð¯ðºð¢ ðªð¯ðª
 â«¹â«º Di Jamin Amanah kok
`
const sections = [
   {
	title: `â«¹â«º  Store Raffa Botz`,
	rows: [
	    {title: "ð TutorJadibot", rowId: '.order *Paket:* TutorJadibot', description: 'Tutor Jadibot/belajar ngebot' },
	    {title: "â½ NORMAL", rowId: '.order *Paket:* NORMAL â¢ Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "ð¤ Jasa Run Bot On dua puluh empat jam", rowld: '.order *Paket:* JasaRunBOT', description: 'PRICE: ' + sh + 'k (permanent)' },
	]
    }, {
    title: `â«¹â«º Suport Store Raffa Botz`,
	rows: [
	   {title: "ð®Donasi", rowId: ".donasi"},
	  {title: "ð Iklan RAFFA BOTZ", rowId: ".sosialmedia"},
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ð Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store(oscar)?|storeoscar)$/i

export default handler
