let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '15'
let info = `

*⫹⫺ Halo Kak Welcome Store Oscar*
 ⫹⫺ 𝘚𝘦𝘮𝘦𝘯𝘵𝘢𝘳𝘢 𝘚𝘵𝘰𝘳𝘦 Raffa Botz 𝘩𝘢𝘯𝘺𝘢 𝘪𝘯𝘪
 ⫹⫺ Di Jamin Amanah kok
`
const sections = [
   {
	title: `⫹⫺  Store Raffa Botz`,
	rows: [
	    {title: "🔖 TutorJadibot", rowId: '.order *Paket:* TutorJadibot', description: 'Tutor Jadibot/belajar ngebot' },
	    {title: "⛽ NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🤖 Jasa Run Bot On dua puluh empat jam", rowld: '.order *Paket:* JasaRunBOT', description: 'PRICE: ' + sh + 'k (permanent)' },
	]
    }, {
    title: `⫹⫺ Suport Store Raffa Botz`,
	rows: [
	   {title: "📮Donasi", rowId: ".donasi"},
	  {title: "🎀 Iklan RAFFA BOTZ", rowId: ".sosialmedia"},
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store(oscar)?|storeoscar)$/i

export default handler
