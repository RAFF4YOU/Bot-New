let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 6283823397743
⫹⫺ Via Dana : 6283823397743
⫹⫺ Via Gopay : 6283823397743
⫹⫺ Via Sociabuzz :
⫹⫺ https://sociabuzz.com/raff4you/tribe

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
